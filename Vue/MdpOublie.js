import React from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import { mdpOublie } from "../Api/CompteApi";

class MdpOublie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  submit() {
    mdpOublie(this.state.email);
    Alert.alert("Regardez vos mails !");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignItems: "flex-start" }}>Votre adresse mail</Text>
        <TextInput
          style={styles.inputUser}
          placeholder="Adresse e-mail"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <View style={styles.buttonStyle}></View>

        <GradientButton
          text="Valider"
          textStyle={styles.textButton}
          width="40%"
          height="8%"
          radius={15}
          gradientEnd="#881515"
          gradientBegin="#d81d1d"
          gradientDirection="diagonal"
          onPressAction={() => {
            this.submit();
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


  buttonStyle: {
    marginTop: 50,
  },
});
export default MdpOublie;
