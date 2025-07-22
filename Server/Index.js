const express = require('express')
const firebase = require('firebase/compat/app');
const store = require('firebase/compat/firestore')
const cors = require("cors")

const PORT = process.env.PORT || 3001;

const firebaseConfig = {
  apiKey: "AIzaSyBzpa94sE2dEHQIEuIN0bp2Ua6dflYrAO8",
  authDomain: "uniko-216b5.firebaseapp.com",
  databaseURL: "https://uniko-216b5-default-rtdb.firebaseio.com",
  projectId: "uniko-216b5",
  storageBucket: "uniko-216b5.firebasestorage.app",
  messagingSenderId: "646128369331",
  appId: "1:646128369331:web:723dc103d7ca8f6a6b7ac6",
  measurementId: "G-T258KRZ371"
};

const db = firebase.default.initializeApp(firebaseConfig).firestore();
// const db = fireConfig

const app = express();
app.use(express.json(), express.urlencoded({extended: true}), cors())

app.get('/data', async (req, res) =>{

    const ConersacionesRef = await db.collection('Conversaciones').get();

    res.send(ConersacionesRef.docs.map(items => items.data()))
})
 
app.post("/Enviar", async (req, res) =>{

    const Mensaje = req.body.mensaje;

    const ConversacionRef = db.collection('Conversaciones').doc();

    await ConversacionRef.set({
        Mensaje
    })

    res.send("Hecho")
})


app.listen(PORT, () =>{
    console.log(`SERVIDOR ACTIVO EN EL PUERTO ${PORT}`)
})