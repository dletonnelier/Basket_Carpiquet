import * as React from "react";
import { View, StyleSheet, TextInput, Alert, Image, Text } from "react-native";
import GradientButton from "react-native-gradient-buttons";

import { adduIdInCompte, test } from "../Api/CompteApi";

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.text1 = "";
    this.test2 = "";
    this.state = {
      email: "",
      nom: "",
      prenom: "",
      mdp: "",
      confirmMdp: "",
    };
  }
  _ChangeVue() {
    this.props.navigation.navigate("Accueil");
  }

  submit() {
    
    if (this.state.mdp == this.state.confirmMdp) {
      if (this.state.mdp.length >= 6) {
        adduIdInCompte(this.state.email, this.state.nom, this.state.prenom, this.state.mdp);
        Alert.alert("Votre compte est en cours de validation !");
        this._ChangeVue();
      } else {
        Alert.alert("Le mot de passe ne fait pas 6 caractères");
      }
    } else {
      Alert.alert("Les mots de passe ne sont pas identiques !");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../Image/add-user.png")} />
        <View style={styles.centre}>

          <TextInput
            style={styles.inputUser}
            placeholder="Adresse e-mail"
            onChangeText={(text) => this.setState({ email: text })}
          />
          <View style={styles.space} />

          <TextInput
            style={styles.inputUser}
            placeholder="Nom"
            onChangeText={(text) => this.setState({ nom: text })}
          />
          <View style={styles.space} />

          <TextInput
            style={styles.inputUser}
            placeholder="Prénom"
            onChangeText={(text) => this.setState({ prenom: text })}
          />
          <View style={styles.space} />

          <TextInput
            style={styles.inputUser}
            placeholder="Mot de passe"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ mdp: text })}
          />
          <Text
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              fontSize: 13,
              marginRight: "3%",
            }}
          >
            *Mot de passe de 6 caractères minimum !
          </Text>
          <View style={styles.space} />

          <TextInput
            style={styles.inputUser}
            placeholder="Valider le mot de passe"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ confirmMdp: text })}
          />
          <View style={styles.buttonStyle}></View>
          <GradientButton
            text="Valider"
            textStyle={styles.textButton}
            width="40%"
            height="12%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this.submit();
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCEB1",
    justifyContent:'center',
  },
  image: {
    width: 125,
    height: 125,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20,
    marginLeft:'auto',
    marginRight:'auto',
  },

  buttonStyle: {
    marginTop: 50,
  },

  inputUser: {
    width: "80%",
    height: 45,
    borderColor: "#7c4141",
    backgroundColor: "#80121250",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 50,
    paddingLeft: 10,
  },
  space: {
    width: 20, //espacer les buttons
    height: 20,
  },
  textButton: {
    fontSize: 25,
  },
  centre: {
    justifyContent: "center",
    alignItems: "center",
    
  },
});
export default Inscription;
