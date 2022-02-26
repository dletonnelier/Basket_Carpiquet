import "../Firebase";
import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase";
import CryptoJS from "react-native-crypto-js";



export function addCompte(email, mdpcrypt,idBene) {

  let bytes = CryptoJS.AES.decrypt(mdpcrypt, 'secret key 123');
  let mdpnocrypt = bytes.toString(CryptoJS.enc.Utf8);
  console.log("mdp crypt" + mdpcrypt);
  console.log("mdp no crypt" + mdpnocrypt);

  firebase.auth().createUserWithEmailAndPassword(email, mdpnocrypt);
  console.log("Compte ajouté");
  
 var usera = "";
  setTimeout(() => {
    (usera = firebase.auth().currentUser),
    deleteCompteRetenu(usera.uid,idBene);
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
    })
    .then(() => console.log("mot de passe :" + mdpcrypt));
}

//TEST DE CRYPTAGE
export async function test() {
  let mdpcrypt = CryptoJS.AES.encrypt('test', 'secret key 123').toString();  // Encrypt
 
  let bytes = CryptoJS.AES.decrypt(mdpcrypt, 'secret key 123');              // Decrypt
  let mdpnocrypt = bytes.toString(CryptoJS.enc.Utf8);

console.log(mdpcrypt);
console.log(mdpnocrypt);
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
    .signOut()
    .then(() => console.log("Déconnexion"));
}

export function mdpOublie(email) {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => console.log("Succès"));
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
        console.log("testttt", compteItem);
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
    .delete()
    .then(() => console.log("Compte supprimé", idBene));
}

export function deleteCompteRetenu(uid,idBene) {
  firebase
    .firestore()
    .collection("Bénévole")
    .doc(idBene)
    .update({
      userId:uid,
      retenus: "0"
    })
    .then(() => console.log("Compte changé", idBene));
}