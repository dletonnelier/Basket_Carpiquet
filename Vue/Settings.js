import React from "react";
import { StyleSheet, View } from "react-native";
import GradientButton from "react-native-gradient-buttons";

import { decoCompte } from "../Api/CompteApi";

class Settings extends React.Component {
  _ChangeVueDeco() {
    decoCompte();
    this.props.navigation.navigate("Accueil"); //Déconnexion
  }
  _ChangeVueMenti() {
    this.props.navigation.navigate("Mentions"); //Navigation vers mentions légales
  }
  render() {
    return (
      <View style={styles.container}>
        <GradientButton
          text="Mentions légales"
          textStyle={styles.textButton}
          width="70%"
          height="12%"
          radius={15}
          gradientEnd="#881515"
          gradientBegin="#d81d1d"
          gradientDirection="diagonal"
          onPressAction={() => {
            this._ChangeVueMenti();
          }}
        />
        <View style={styles.space}></View>
        <GradientButton
          text="Déconnexion"
          textStyle={styles.textButton}
          width="70%"
          height="12%"
          radius={15}
          gradientEnd="#881515"
          gradientBegin="#d81d1d"
          gradientDirection="diagonal"
          onPressAction={() => {
            this._ChangeVueDeco();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCEB1",
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    textAlign: "center",
    fontSize: 25,
  },
  space: {
    width: 20, //espacer les buttons
    height: 45,
  },
});

export default Settings;
