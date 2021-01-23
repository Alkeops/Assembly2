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

export const productoUnico = async (id) => {
  const query = await computerRef.doc(id).get();
  const data = query.data();
  return data;
};

export const categoriaUnica = async (categoria) => {
  const query = await computerRef.where("categoria", "==", categoria).get();
  const docs = [];
  query.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return docs;
};
