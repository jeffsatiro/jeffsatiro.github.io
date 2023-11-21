import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";
import * as fireFirestore from "firebase/firestore";

const config = useRuntimeConfig();
fireApp.initializeApp(config.public.firebase);

export default class {
  static async getData() {
    const auth = fireAuth.getAuth();
    const fireFirestoreDB = fireFirestore.getFirestore();
    return { config, auth, fireApp, fireAuth, fireFirestore, fireFirestoreDB };
  }

  // static async userCreate() {}

  // static async userUpdate() {}

  // static async userLogin() {}

  // static async userLogout() {}

  static async firestoreSave(collection, data = {}) {
    data = { uid: null, name: "", ...data };

    const { fireFirestore, fireFirestoreDB } = await this.getData();
    const ref = fireFirestore.collection(fireFirestoreDB, collection);

    if (!data.uid) {
      const created = await fireFirestore.addDoc(ref, data);
      data.uid = created.id;
    }

    if (data.uid) {
      await fireFirestore.setDoc(fireFirestore.doc(fireFirestoreDB, collection, data.uid), data);
    }

    await fireFirestore.setDoc(fireFirestore.doc(fireFirestoreDB, collection, data.uid), data);
    return data;
  }

  static async firestoreFind(collection, find, by = "uid") {
    const { fireFirestore, fireFirestoreDB } = await this.getData();
    const docRef = fireFirestore.doc(fireFirestoreDB, collection, find);
    const docSnap = await fireFirestore.getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : false;
  }

  static async firestoreSearch(collection, query = {}) {
    query = {
      limit: 5,
      orderBy: ["uid", "desc"],
      where: [],
      startAfter: false,
      endBefore: false,
      ...query,
    };

    let queryPrev = false;
    let queryNext = false;

    const { fireFirestore, fireFirestoreDB } = await this.getData();
    const collectRef = fireFirestore.collection(fireFirestoreDB, collection);

    let queryArgs = [];
    if (query.limit) {
      queryArgs.push(fireFirestore.limit(query.limit));
    }
    if (query.orderBy) {
      queryArgs.push(fireFirestore.orderBy.apply(null, query.orderBy));
    }
    // if (query.where.length > 0) {
    //   query.where.map((condition) => {
    //     queryArgs.push(fireFirestore.where.apply(null, condition));
    //   });
    // }
    if (query.startAfter) {
      const nextDoc = await fireFirestore.getDoc(fireFirestore.doc(fireFirestoreDB, collection, query.startAfter));
      queryArgs.push(fireFirestore.startAfter(nextDoc));
    }
    if (query.endBefore) {
      const prevDoc = await fireFirestore.getDoc(fireFirestore.doc(fireFirestoreDB, collection, query.endBefore));
      queryArgs.push(fireFirestore.endBefore(prevDoc));
    }

    const docsQuery = fireFirestore.query.apply(null, [collectRef, ...queryArgs]);
    const docs = await fireFirestore.getDocs(docsQuery);

    let data = [];
    docs.forEach((doc) => {
      data.push({ ...doc.data(), uid: doc.id });
    });

    if (data.length == query.limit) {
      queryNext = { ...query, startAfter: data[data.length - 1]["uid"] };
    }

    if (query.startAfter && data[0]) {
      queryPrev = { ...query, endBefore: data[0]["uid"], startAfter: false };
    }

    return { query, data, queryPrev, queryNext };
  }

  static async firestoreDelete() {}

  static async realtimeSave() {}

  static async realtimeFind() {}

  static async realtimeSearch() {}

  static async realtimeDelete() {}

  static async storageSave() {}

  static async storageFind() {}

  static async storageSearch() {}

  static async storageDelete() {}
}
