import "../Firebase";
import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase";
import CryptoJS from "react-native-crypto-js";



export function addCompte(email, mdpcrypt,idBene) {

  let bytes = CryptoJS.AES.decrypt(mdpcrypt, 'secret key 123');
  let mdpnocrypt = bytes.toString(CryptoJS.enc.Utf8);
  firebase.auth().createUserWithEmailAndPassword(email, mdpnocrypt);

  var usera = "";
  var id = idBene;
    setTimeout(() => {
    (usera = firebase.auth().currentUser),
    updateCompteRetenu(usera.uid,id);
  }, 2000); 
}

export function addDataInCompte(email, nom, prenom, mdpcrypt) {
  firebase
    .firestore()
    .collection("Bénévole")
    .add({            
      emailUser: email,
      nom: nom,
      prenom: prenom,
      mdpcrypt: CryptoJS.AES.encrypt(mdpcrypt, 'secret key 123').toString(),
      retenus: "1",      
    });
}


export async function verifAdmin(id) {
  try {
    var verifAdmin = "False";
    let snapshot = await firebase
      .firestore()
      .collection("Compte")
      .where("userID", "==", id)
      .get();
    snapshot.forEach((doc) => {
      const compteItem = doc.data();
      const adminItem = compteItem.admin;
      verifAdmin = adminItem;
    });
  } catch (e) {
    console.error(e);
  }
  return verifAdmin;
}

export function decoCompte() {
  firebase
    .auth()
    .signOut();
}

export function mdpOublie(email) {
  firebase
    .auth()
    .sendPasswordResetEmail(email);
}

export async function getComptesRetenus(compteRet) {
  try {
    var comptesList = [];
    var snapshot = await firebase
      .firestore()
      .collection("Bénévole")
      .where("retenus", "==", "1")
      .get();
      snapshot.forEach((doc) => {
        const compteItem = doc.data();
        compteItem.id = doc.id;
        comptesList.push(compteItem);
      });
  } catch (e) {
    console.error(e);
  }
  compteRet(comptesList);
}

export function deleteCompte(idBene) {
  firebase
    .firestore()
    .collection("Bénévole")
    .doc(idBene)
    .delete();
}

export function updateCompteRetenu(uid,idBene) {
  firebase
    .firestore()
    .collection("Bénévole")
    .doc(idBene)
    .update({
      userId:uid,
      retenus: "0"
    });
}