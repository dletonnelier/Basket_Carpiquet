/*import React from "react";

import { StyleSheet, View, Text, Alert } from "react-native";
import {
  accepteBenevol,
  addMission,
  deleteBenevol,
  getBenevole,
  getMail,
} from "../../Api/BenevoleAPI";
import GradientButton from "react-native-gradient-buttons";
import { getMatchbyId } from "../../Api/MatchApi";

class FillListMatchBene extends React.Component {
 async  _Accepter() {   
   
    accepteBenevol(
      this.props.idMatch.id,
      this.props.dataBene.Contact,
      this.props.dataBene.Nom,
      this.props.dataBene.Prenom,
      this.props.dataBene.Role      
    );

    
    const match= await getMatchbyId(this.props.idMatch.id)
    const bene = await getBenevole(this.props.dataBene.Contact)
    
    addMission(bene.idUti,match.equiDom,match.equiExt,match.dteMatch)

    deleteBenevol(this.props.idMatch.id, this.props.dataBene.id);
    Alert.alert("Acceptation effectuée");
    this.props.navigation.navigate("ChoixListBene", {
      data: this.props.idMatch.id,
    });   
  }
  _Supprimer() {
    deleteBenevol(this.props.idMatch.id, this.props.dataBene.id);
    Alert.alert("Suppresion effectuée");
    this.props.navigation.navigate("ChoixListBene", {
      data: this.props.idMatch.id,
    });
  }
  render() {
    const dataBene = this.props.dataBene;
    
    return (
      <View style={styles.main_container}>
        <View style={styles.test}>
          <View>
            <Text style={styles.date_text}>
              Nom et prénom : {dataBene.Nom} {dataBene.Prenom}
            </Text>
          </View>

          <View>
            <Text>Contact : {dataBene.Contact} </Text>
          </View>

          <View>
            <Text>Role : {dataBene.Role} </Text>
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
    marginTop: 10,
    padding: 10,
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  button: {
    marginBottom: 15,
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

export default FillListMatchBene;
*/