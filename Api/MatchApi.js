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

export async function getMatchbyId(idMatch) {
  try {
    var categorie = "";
    var dteMatch = "";
    var heureMatch = "";
    var matchList = [];
    
    await firebase
      .firestore()
      .collection("Match")
      .doc(idMatch)
      .get()
      .then((doc) => {
        categorie = doc.data().categorie;
        dteMatch = doc.data().dteMatch;
        heureMatch = doc.data().heureMatch;
        const matchItem = doc.data();
        matchList.push(matchItem);
      });
  } catch (e) {
    console.error(e);
  }
  return {
    matchList,
    categorie,
    dteMatch,
    heureMatch,
  };
}

export function addMatch(categorie, dte, heure) {
  firebase
    .firestore()
    .collection("Match")
    .add({
      categorie : categorie,
      dteMatch: dte,
      heureMatch: heure,
      arbitre: "",
      chronometreur: "",
      marqueur: "",
      responsableSalle: "",
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
