import React from "react";

import { StyleSheet, View, Text, Alert } from "react-native";
import {
  addCompte,
  deleteCompte,
  deleteCompteRetenu,
} from "../Api/CompteApi";
import GradientButton from "react-native-gradient-buttons";


class FillListComptes extends React.Component {
 async
 
  _Accepter() {  

    addCompte(
      this.props.dataBene.emailUser,
      this.props.dataBene.mdpcrypt, 
    );

    deleteCompteRetenu(this.props.dataBene.id);
    Alert.alert("Acceptation effectuée");
    this.props.navigation.navigate("Profil", {
      data: this.props.idBene,
    });
  }

  

  _Supprimer() {
    deleteCompte(this.props.dataBene.id);
    Alert.alert("Suppresion effectuée");
    this.props.navigation.navigate("Profil", {
      data: this.props.idBene,
    });
  }
  render() {
    const dataBene = this.props.dataBene;
    
    return (
      <View style={styles.main_container}>
        <View style={styles.test}>
          <View>
          <View>
            <Text>Email : {dataBene.emailUser} </Text>
          </View>

            <Text style={styles.date_text}>
              Nom et prénom : {dataBene.nom} {dataBene.prenom}
            </Text>
          </View>          
        </View>

        <View style={styles.space} />
        
        <View style={styles.button}>          
          <GradientButton
            text="Accepter"
            textStyle={styles.textButton}
            width="40%"
            height="60%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._Accepter();
            }}            
          />
          <View style={styles.space} />

          <GradientButton
            text="Supprimer"
            textStyle={styles.textButton}
            width="40%"
            height="60%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._Supprimer();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: 20,
    padding: 15,
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  space: {
    width: 10, //espacer les buttons
    height: 10,
  },

  text: {
    marginRight: 50,
    alignSelf: "center",
  },
  
  textButton: {
    fontSize: 20,
  },
});

export default FillListComptes;
