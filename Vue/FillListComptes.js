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
      this.props.dataBene.id,
    );

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
        <View style={styles.header_container}></View>
        <View style={styles.test}>
          
          <View style={styles.text}>
            <Text>Email : {dataBene.emailUser} </Text>
          </View>
            <View style={styles.text}>
             <Text>Nom et prénom : {dataBene.nom} {dataBene.prenom}
            </Text>        
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
        <View style={styles.space} />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop:20,
    paddingBottom:10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_container: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#AA0000",
    borderWidth:1,
    padding:10,
    borderTopEndRadius:10,
    borderTopStartRadius:10,

        
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
    paddingLeft: 25,
  },
  
  textButton: {
    fontSize: 20,
  },
  test:{
    flex: 1,
    backgroundColor: "#ffffff",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,

    borderBottomEndRadius:10,
    borderBottomStartRadius:10, 
  }
});

export default FillListComptes;
