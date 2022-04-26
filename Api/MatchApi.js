import "../Firebase";
import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase";

export async function getMatch(matchsRet) {
  try {
    var matchList = [];
    var snapshot = await firebase
      .firestore()
      .collection("Match")
      .orderBy("dteMatch", "desc")
      .get();
    snapshot.forEach((doc) => {
      const matchItem = doc.data();
      matchItem.id = doc.id;
      matchList.push(matchItem);
    });
  } catch (e) {
    console.error(e);
  }
  matchsRet(matchList);
}



export function addMatch(categorie, dte, heure) {
  firebase
    .firestore()
    .collection("Match")
    .add({
      categorie : categorie,
      dteMatch: dte,
      heureMatch: heure,
      arbitreNom: "",
      arbitrePrenom: "",
      arbitre2Nom: "",
      arbitre2Prenom: "",
      chronometreurNom: "",
      chronometreurPrenom: "",
      marqueurNom: "",
      marqueurPrenom: "",
      responsableSalleNom: "",
      responsableSallePrenom: "",

    });
}

export function updatePoint(id, pointDom, pointExt) {
  firebase
    .firestore()
    .collection("Match")
    .doc(id)
    .update({
      pointDomicile: pointDom,
      pointExterne: pointExt,
    });
}

export async function getMatchEmpty(matchsRet) {
  try {
    var matchList = [];
    var snapshot = await firebase
      .firestore()
      .collection("Match")
      .get(); 
    snapshot.forEach((doc) => {
      if(doc.data().arbitreNom == "" || doc.data().arbitre2Nom == "" || doc.data().chronometreurNom == "" || doc.data().marqueurNom == "" || doc.data().responsableSalleNom == ""){
        const matchItem = doc.data();
        matchItem.id = doc.id;
        matchList.push(matchItem); 
      }
      });
  } catch (e) {
    console.error(e);
  }
  matchsRet(matchList);
}