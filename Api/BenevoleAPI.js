import "../Firebase";
import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase";

export function updateArbitre(idMatch, ArbitreNom, ArbitrePrenom) {
  firebase
    .firestore()
    .collection("Match")
    .doc(idMatch)
    .update({
      arbitreNom: ArbitreNom,
      arbitrePrenom: ArbitrePrenom,
    });
}

export function updateArbitre2(idMatch, Arbitre2Nom, Arbitre2Prenom) {
  firebase
    .firestore()
    .collection("Match")
    .doc(idMatch)
    .update({
      arbitre2Nom: Arbitre2Nom,
      arbitre2Prenom: Arbitre2Prenom,
    });
}

export async function getDataBene(uid) {
  try {
    var nom = "";
    var prenom = "";
    var emailUser = "";
    var beneList = [];
    var id= "";
    
    var snapshot = await firebase
      .firestore()
      .collection("Bénévole")
      .where("userId","==",uid)
      .get();
      snapshot.forEach((doc) => {
        nom = doc.data().nom;
        prenom = doc.data().prenom;
        emailUser = doc.data().emailUser;
        const beneItem = doc.data();
        id= doc.id;
        beneList.push(beneItem);
      });
  } catch (e) {
    console.error(e);
  }
  return {
    id,
    beneList,
    nom,
    prenom,
    emailUser,
  };
}

export function updateChrono(idMatch, chronoNom, chronoPrenom) {
  firebase
    .firestore()
    .collection("Match")
    .doc(idMatch)
    .update({
      chronometreurNom: chronoNom,
      chronometreurPrenom: chronoPrenom,
    });
}

export function updateMarqueur(idMatch, marqueurNom, marqueurPrenom) {
  firebase
    .firestore()
    .collection("Match")
    .doc(idMatch)
    .update({
      marqueurNom: marqueurNom,
      marqueurPrenom: marqueurPrenom,
    });
}

export function updateResponsableSalle(idMatch, responsableSalleNom, responsableSallePrenom) {
  firebase
    .firestore()
    .collection("Match")
    .doc(idMatch)
    .update({
      responsableSalleNom: responsableSalleNom,
      responsableSallePrenom: responsableSallePrenom,
    });
}

export function addbenevoleRetenus(id, contact, nom, prenom, roles) {
  firebase
    .firestore()
    .collection("Match")
    .doc(id)
    .collection("benevoleRetenus")
    .add({
      Contact: contact,
      Nom: nom,
      Prenom: prenom,
      Role: roles,
    });
}
export async function getBenevoleRetenus(id, benevoleRet) {
  try {
    var benevoleList = [];
    var snapshot = await firebase
      .firestore()
      .collection("Match")
      .doc(id)
      .collection("benevoleRetenus")
      .get();
    snapshot.forEach((doc) => {
      const benevoleItem = doc.data();
      benevoleItem.id = doc.id;
      benevoleList.push(benevoleItem);
    });
  } catch (e) {
    console.error(e);
  }
  benevoleRet(benevoleList);
}

export async function getBenevoleAccepte(idMatch, benevoleRet) {
  try {
    var benevoleList = [];
    var snapshot = await firebase
      .firestore()
      .collection("Match")
      .doc(idMatch)
      .collection("benevoleAccepte")
      .get();
    snapshot.forEach((doc) => {
      const benevoleItem = doc.data();
      benevoleItem.id = doc.id;
      benevoleList.push(benevoleItem);
    });
  } catch (e) {
    console.error(e);
  }
  benevoleRet(benevoleList);
}

export async function getBenevole(mailUser){

  try {
    var idUti=""
    var snapshot = await firebase
      .firestore()
      .collection("Bénévole")
      .where("emailUser","==",mailUser)
      .get();
      snapshot.forEach((doc) => {
        idUti = doc.id;
      });
  } catch (e) {
    console.error(e);
  }
  return {
    idUti
  };
}

export async function getMail() {
  try {
    var emailUti = [];
    var snapshot = await firebase.firestore().collection("Bénévole").get();
    snapshot.forEach((doc) => {
      const beneItem = doc.data();
      const emailItem = beneItem.emailUser;
      emailUti.push(emailItem);
    });
  } catch (e) {
    console.error(e);
  }

  return emailUti;
}

export async function getBenevoleById(uid){

  try {
    var idUti=""
    var snapshot = await firebase
      .firestore()
      .collection("Bénévole")
      .where("userId","==",uid)
      .get();
      snapshot.forEach((doc) => {
        idUti = doc.id;
      });
  } catch (e) {
    console.error(e);
  }
  return {
    idUti
  };
}



export function accepteBenevol(id, nom, prenom,  roles) {
  if (roles == "arbitre") {
    firebase
      .firestore()
      .collection("Match")
      .doc(id)
      .update({
        arbitreNom: nom,
        arbitrePrenom: prenom,
      });
  } else if (roles == "arbitre2") {
    firebase
      .firestore()
      .collection("Match")
      .doc(id)
      .update({
        arbitre2Nom: nom,
        arbitre2Prenom: prenom,
      });
  } else if (roles == "chronometreur") {
    firebase
      .firestore()
      .collection("Match")
      .doc(id)
      .update({
        chronometreurNom: nom,
        chronometreurPrenom: prenom,
      });
  } else if (roles == "marqueur") {
    firebase
      .firestore()
      .collection("Match")
      .doc(id)
      .update({
        marqueurNom: nom,
        marqueurPrenom: prenom});
  } else if (roles == "responsableDeSalle") {
    firebase
      .firestore()
      .collection("Match")
      .doc(id)
      .update({
        responsableSalleNom: nom,
        responsableSallePrenom: prenom,
      });
  }
}

export function deleteBenevol(idMatch, idBene) {
  firebase
    .firestore()
    .collection("Match")
    .doc(idMatch)
    .collection("benevoleRetenus")
    .doc(idBene)
    .delete();
}

export async function getMissionByBenevole(userid,missionRet) {
  var missionList = [];
  var docId = "";
  try {
    var snapshot = await firebase
      .firestore()
      .collection("Bénévole")
      .where("userId", "==", userid)
      .get();
    snapshot.forEach((doc) => {
      docId = doc.id;
     
    });

    var snapshot1= await firebase
    .firestore()
    .collection("Bénévole")
    .doc(docId)
    .collection("Missions")
    .get()
    snapshot1.forEach((doca) => {
      const missionItem = doca.data();
      missionItem.id = doca.id;
      missionList.push(missionItem);
    })
} catch (e) {
  console.error(e);
}
missionRet(missionList);

}

export async function getDataForMission(docId, missionRet) {
  try {
    var missionList = [];
    var snapshot = await firebase
      .firestore()
      .collection("Bénévole")
      .doc(docId)
      .collection("Missions")
      .get();
    snapshot.forEach((doc) => {
      const missionItem = doc.data();
      missionItem.id = doc.id;
      missionList.push(missionItem);
    });
  } catch (e) {
    console.error(e);
  }
  missionRet(missionList);
}

export function addMission(userid, categorie, dteMatch, heureMatch,roles) {
  try {
    firebase
      .firestore()
      .collection("Bénévole")
      .doc(userid)
      .collection("Missions")
      .add({
        categorie: categorie,
        dteMatch: dteMatch,
        heureMatch: heureMatch,
        roles:roles
      });
  } catch (e) {
    console.error(e);
  }
}

export async function countMissions(userId){
  var docId = "";
  var countMiss="0";
    try {
    var snapshot = await firebase
      .firestore()
      .collection("Bénévole")
      .where("userId", "==", userId)
      .get();
    snapshot.forEach((doc) => {
      docId = doc.id;
     
    });

    var snapshot1= await firebase
    .firestore()
    .collection("Bénévole")
    .doc(docId)
    .collection("Missions")
    .get()
    .then((doca)=>{
      countMiss=doca.size;
    })
  } catch (e) {
    console.error(e);
  }
  return countMiss;
}