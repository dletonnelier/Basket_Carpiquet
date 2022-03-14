import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import GradientButton from "react-native-gradient-buttons";
import { verifAdmin } from "../Api/CompteApi";

import * as firebase from "firebase";

class Authentification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      mdp: "",
      isLoading: false,
      verif: "",
    };
  }

  async _login() {
    try {
      this.setState({ isLoading: true });
      let response = await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.mdp);
      if (response && response.user) {
        let admin1 = await verifAdmin(response.user.uid);
        this.setState({ isLoading: false });
        Alert.alert("Connexion reussie");
        this.props.navigation.navigate("Profil", {
          admin: admin1,
          uid: response.user.uid,
        });
      }
    } catch (e) {
      this.setState({ isLoading: false });
      Alert.alert("Email ou Identifiants incorrect");
      console.error(e.message);
    }
  }
  
  _ChangeVue() {
    this.props.navigation.navigate("Profil");
  }
  _ChangeVueMdpForget() {
    this.props.navigation.navigate("MdpOublie");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../Image/Ballon.png")} />
        <View style={styles.centre}>
          <TextInput
            style={styles.inputUser}
            placeholder="Adresse mail"
            onChangeText={(text) => this.setState({ email: text })}
          />
          <View style={styles.space} />
          <TextInput
            style={styles.inputUser}
            placeholder="Mot de passe"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ mdp: text })}
          />
          <View style={styles.buttonStyle}></View>
          <GradientButton
            text="Valider"
            textStyle={styles.textButton}
            width="40%"
            height="18%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._login();
            }}
          />
          <View style={styles.buttonStyle}></View>
          <Text
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
            onPress={() => {
              this._ChangeVueMdpForget();
            }}
          >
            Mot de passe oubliée ?{" "}
          </Text>
        </View>

        {this.state.isLoading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator
              size="large"
              color="#d81d1d"
              backgroundColor="#bfbdbc75"
            />
          </View>
        ) : null}
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
    width: 200,
    height: 200,
    
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 50,
    marginLeft:'auto',
    marginRight:'auto',
  
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
  },

  buttonStyle: {
    marginTop: 45,
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
    justifyContent:'center',
    alignItems:'center',

  },
});
export default Authentification;
