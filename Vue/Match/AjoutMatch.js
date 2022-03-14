import React from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { addMatch } from "../../Api/MatchApi";
import GradientButton from "react-native-gradient-buttons";

class AjoutMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: "",
      selectedStartDate: null,
      dte: "",
      heure: "",
    };
  }

  
  _AjoutMatch() {
    if (
      this.state.categorie != "" &&
      this.state.dte != "" &&
      this.state.heure != ""
    ) {
      addMatch(
        this.state.categorie,
        this.state.dte,
        this.state.heure,
      );
      Alert.alert("Le match a été ajouté");
      this.props.navigation.navigate("Match")
    } else {
      Alert.alert("Veuillez compléter tous les champs");
    }
  }
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.alignText}>
          <Text style={styles.text}>Catégorie :</Text>
          <TextInput
            style={styles.paragraph}
            placeholder="Catégorie"
            onChangeText={(text) => {
              this.setState({ categorie: text });
            }}
          />
        </View>

        <View style={styles.alignText}>
          <Text style={styles.text}>Date du match :</Text>
          <TextInput
            style={styles.paragraph}
            placeholder="AAAA/MM/JJ"
            onChangeText={(text) => {
              this.setState({ dte: text });
            }}
          />
        </View>
        
        <View style={styles.alignText}>
          <Text style={styles.text}>Heure du match :</Text>
          <TextInput
            style={styles.paragraph}
            placeholder="Heure de début"
            onChangeText={(text) => {
              this.setState({ heure: text });
            }}
          />
        </View>

        <View style={styles.button}>
          <GradientButton
            text="Valider"
            textStyle={styles.textButton}
            width="40%"
            height="25%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._AjoutMatch();
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
    justifyContent: "flex-start",
    backgroundColor: "#FBCEB1",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    flex: 1,
    borderRadius: 10,
    paddingLeft: 5,
    backgroundColor: "#80121250",
  },
  text: {
    flex: 0.5,
    marginTop: 15,
    marginLeft: 15,
    fontSize: 13,
    fontWeight: "bold",
  },
  textTitre: {
    fontWeight: "bold",
    fontSize: 30,
    margin: "auto",
    marginBottom: 25,
    marginLeft: 15,
  },
  alignText: {
    flexDirection: "row",
    margin: "auto",
  },
  textButton: {
    fontSize: 25,
  },
});
export default AjoutMatch;
