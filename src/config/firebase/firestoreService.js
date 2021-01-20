import firebase from "./firebase";

export const db = firebase.firestore();

const computerRef = db.collection("computadoras");

export const cargarProductos = async () => {
  const query = await computerRef.get();
  const docs = [];
  query.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return docs;
};
