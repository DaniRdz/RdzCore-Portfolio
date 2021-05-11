import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmdFOKd0MzeXxwZ3gZHtQEm-uFJP7n1-U",
  authDomain: "rdzcore-msn.firebaseapp.com",
  projectId: "rdzcore-msn",
  storageBucket: "rdzcore-msn.appspot.com",
  messagingSenderId: "889462383401",
  appId: "1:889462383401:web:c73bd98218bcc044f90d38",
  measurementId: "G-5KLWRXBYEL",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const createMessage = ({ name, email, message }) => {
  return db.collection("messages").add({
    name,
    email,
    message,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const fetchMessages = () => {
  return db
    .collection("messages")
    .orderBy("date", "desc")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return {
          id,
          ...data,
        };
      });
    });
};
