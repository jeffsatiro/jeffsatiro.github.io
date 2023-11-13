import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  startAt,
} from "firebase/firestore";

export default (options = {}) => {
  options = {
    collection: "",
    data: {},
    model: { id: false, name: "" },
    ...options,
  };

  const config = useRuntimeConfig();
  const db = getFirestore(initializeApp(config.public.firebase));

  const r = reactive({
    busy: false,
    data: options.data,

    async create() {
      const id = this.data.id || false;
      if (id) return;
      console.log("create");
      const ref = collection(db, options.collection);
      return await addDoc(ref, r.data);
    },

    async update() {
      const id = this.data.id || false;
      if (!id) return;
      console.log("update");
      const docRef = doc(db, options.collection, id);
      return await setDoc(docRef, this.data);
    },

    async save() {
      return !!this.data.id ? this.update() : this.create();
    },

    async delete() {},

    async setData(data) {
      r.data = data;
    },

    async resetData() {
      r.data = options.model;
    },

    search: {
      busy: false,
      params: {},
      data: [],
      pagination: {},
      async submit() {
        r.search.data = [];
        const dbRef = collection(db, options.collection);
        const q = query(dbRef);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          r.search.data.push({ ...options.model, ...doc.data(), id: doc.id });
        });
      },
    },
  });

  return r;
};
