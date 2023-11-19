import { reactive } from "vue";
const config = useRuntimeConfig();

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const getExceptionData = (e) => {
  return {
    code: e.code,
    message: e.message,
    fields: [],
  };
};

export default () => {
  const app = initializeApp(config.public.firebase);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    r.user = user || false;
  });

  const r = reactive({
    data: {
      email: "",
      password: "",
    },
    user: false,
    error: false,
    // auth,

    async save() {
      try {
        const data = await createUserWithEmailAndPassword(auth, r.data.email, r.data.password);
        r.user = data.user || false;
        r.data.email = "";
        r.data.password = "";
      } catch (e) {
        r.error = getExceptionData(e);
      }
    },

    async login() {
      try {
        const data = await signInWithEmailAndPassword(auth, r.data.email, r.data.password);
        r.user = data.user;
        r.data.email = "";
        r.data.password = "";
      } catch (e) {
        r.error = getExceptionData(e);
      }
    },

    async logout() {
      const data = await signOut(auth);
      r.user = false;
      return data;
    },
  });

  return r;
};
