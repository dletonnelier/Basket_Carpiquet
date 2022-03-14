import React from "react";
import { 
  View,
  StyleSheet,
  Image,
} from "react-native";
import GradientButton from "react-native-gradient-buttons";

class Accueil extends React.Component {
  _ChangeVueLogin() {
    this.props.navigation.navigate("Authentification");
  }
  _ChangeVueInscri() {
    this.props.navigation.navigate("Inscription");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <GradientButton
          text="Connexion"
          textStyle={styles.textButton}
          width="70%"
          height="10%"
          radius={15}
          gradientEnd="#881515"
          gradientBegin="#d81d1d"
          gradientDirection="diagonal"
          onPressAction={() => {
            this._ChangeVueLogin();
          }}
        />
        <View style={styles.space}></View>
        <GradientButton
          text="Inscription"
          textStyle={styles.textButton}
          width="70%"
          height="10%"
          radius={15}
          gradientEnd="#881515"
          gradientBegin="#d81d1d"
          gradientDirection="diagonal"
          onPressAction={() => {
            this._ChangeVueInscri();
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
  image: {
    width: 175,
    height: 175,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 75,
    marginLeft:'auto',
    marginRight:'auto',
  
  },
  
  espaceButton: {
    marginBottom: 20,
    marginTop: 20,
  },
  space: {
    width: 20, //espacer les boutons
    height: 50,
  },
  textButton: {
    fontSize: 25,
  },
});
export default Accueil;
