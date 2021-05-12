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

export const createMessage = ({ name, email, message, subject }) => {
  return db.collection("messages").add({
    name,
    email,
    message,
    subject,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const fetchMessages = () => {
  return db
    .collection("messages")
    .orderBy("date", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { date } = data;
        const createdAtDate = new Date(date.seconds * 1000);

        const normalizedDate = new Intl.DateTimeFormat("es-ES", {
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(createdAtDate);

        return {
          ...data,
          id,
          date: normalizedDate,
        };
      });
    });
};

export const deleteMessage = (id) => {
  return db
    .collection("messages")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

export const getMessageById = (id) => {
  return db
    .collection("messages")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();

      console.log("Data", data);
    });
};
