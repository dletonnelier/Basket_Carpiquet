import React from "react";
import {  View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { updatePoint } from "../../Api/MatchApi";
import GradientButton from "react-native-gradient-buttons";
import { RadioButton } from "react-native-paper";
import {
  updateMarqueur,
  updateChrono,
  updateArbitre,
  updateArbitre2,
  updateResponsableSalle,
} from "../../Api/BenevoleAPI";
import Icon from "react-native-vector-icons/MaterialIcons";

class AjoutPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreDom: "",
      scoreExt: "",

      nomRemplArbitre: "",
      prenomRemplArbitre: "",

      nomRemplArbitre2: "",
      prenomRemplArbitre2: "",

      nomRemplChrono: "",
      prenomRemplChrono: "",

      nomRemplMarqueur: "",
      prenomRemplMarqueur: "",

      nomRemplResponsableSalle: "",
      prenomRemplResponsableSalle: "",

      value: "",
      nom: "",
    };
  }
  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }

  _Valider() {
    if (this.state.scoreDom == "" && this.state.scoreExt == "" ) {      
      Alert.alert("Veuillez compléter tous les champs");
    } else if (this.state.scoreDom != "" && this.state.scoreExt != "" && this.state.value === "Oui"){
      
      updatePoint(
        this.props.route.params.match,
        this.state.scoreDom,
        this.state.scoreExt,
        Alert.alert("Les modifications ont été mise à jour"),
        this.props.navigation.navigate("Match")
      )} 
      
      else if (
        this.state.nomRemplArbitre == "" &&
        this.state.prenomRemplArbitre == "" &&
        this.state.nomRemplArbitre2 == "" &&
        this.state.prenomRemplArbitre2 == "" &&
        this.state.nomRemplChrono == "" &&
        this.state.prenomRemplChrono == "" &&
        this.state.nomRemplResponsableSalle == "" &&
        this.state.prenomRemplResponsableSalle == "" &&
        this.state.nomRemplMarqueur != "" &&
        this.state.prenomRemplMarqueur != ""
        
      ) {
        updateMarqueur(
          this.props.route.params.match,
          this.state.nomRemplMarqueur,
          this.state.prenomRemplMarqueur
        );
        Alert.alert("Les modifications ont été mise à jour");
        this.props.navigation.navigate("Match");
      } else 

      if (
        this.state.nomRemplArbitre == "" &&
        this.state.prenomRemplArbitre == "" &&
        this.state.nomRemplArbitre2 == "" &&
        this.state.prenomRemplArbitre2 == "" &&
        this.state.nomRemplMarqueur == "" &&
        this.state.prenomRemplMarqueur == "" &&
        this.state.nomRemplResponsableSalle == "" &&
        this.state.prenomRemplResponsableSalle == "" &&
        this.state.nomRemplChrono != "" &&
        this.state.prenomRemplChrono != ""
      ) {
        updateChrono(
          this.props.route.params.match, 
          this.state.nomRemplChrono,
          this.state.prenomRemplChrono
          );
          Alert.alert("Les modifications ont été mise à jour");
          this.props.navigation.navigate("Match");
      } else 

      if (
        this.state.nomRemplArbitre2 == "" &&
        this.state.prenomRemplArbitre2 == "" &&
        this.state.nomRemplMarqueur == "" &&
        this.state.prenomRemplMarqueur == "" &&
        this.state.nomRemplChrono == "" &&
        this.state.prenomRemplChrono == "" &&
        this.state.nomRemplResponsableSalle == "" &&
        this.state.prenomRemplResponsableSalle == "" &&
        this.state.nomRemplArbitre != "" &&
        this.state.prenomRemplArbitre != ""
      ) {
        updateArbitre(
          this.props.route.params.match,
          this.state.nomRemplArbitre,
          this.state.prenomRemplArbitre
        );
        Alert.alert("Les modifications ont été mise à jour");
        this.props.navigation.navigate("Match");
      } else 

      if (
        this.state.nomRemplMarqueur == "" &&
        this.state.prenomRemplMarqueur == "" &&
        this.state.nomRemplChrono == "" &&
        this.state.prenomRemplChrono == "" &&
        this.state.nomRemplResponsableSalle == "" &&
        this.state.prenomRemplResponsableSalle == "" &&
        this.state.nomRemplArbitre == "" &&
        this.state.prenomRemplArbitre == "" &&
        this.state.nomRemplArbitre2 != "" &&
        this.state.prenomRemplArbitre2 != ""
      ) {
        updateArbitre2(
          this.props.route.params.match,
          this.state.nomRemplArbitre2,
          this.state.prenomRemplArbitre2
        );
        Alert.alert("Les modifications ont été mise à jour");
        this.props.navigation.navigate("Match");
      } else 

      if (
        this.state.nomRemplArbitre == "" &&
        this.state.prenomRemplArbitre == "" &&
        this.state.nomRemplArbitre2 == "" &&
        this.state.prenomRemplArbitre2 == "" &&
        this.state.nomRemplMarqueur == "" &&
        this.state.prenomRemplMarqueur == "" &&
        this.state.nomRemplChrono == "" &&
        this.state.prenomRemplChrono == "" &&       
        this.state.nomRemplResponsableSalle != "" &&
        this.state.prenomRemplResponsableSalle != "" 

      ) {
        updateResponsableSalle(
          this.props.route.params.match,
          this.state.nomRemplResponsableSalle,
          this.state.prenomRemplResponsableSalle
        );
        Alert.alert("Les modifications ont été mise à jour");
        this.props.navigation.navigate("Match");
    } else {
      Alert.alert("Veuillez compléter tous les champs");
    }
  
  }


  render() {

    return (
      <View style={styles.main_container}>
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Icon
            name="home"
            size={35}
            onPress={() => {
              this._ChangeVueHome();
            }}
          />
        </View>
        <View style={styles.alignText}>
          <Text style={styles.textScore}>Score équipe domicile: </Text>
          <TextInput
            style={styles.paragraph}
            placeholder="Score équipe domicile"
            onChangeText={(text) => {
              this.setState({ scoreDom: text });
            }}
          />
        </View>

        <View style={styles.alignText}>
          <Text style={styles.textScore}>Score équipe externe :</Text>
          <TextInput
            style={styles.paragraph}
            placeholder="Score équipe externe"
            onChangeText={(text) => {
              this.setState({ scoreExt: text });
            }}
          />
        </View>

        <RadioButton.Group
          onValueChange={(value) => {
            this.setState({ value: value });
          }}
          value={this.state.value}
        >
          <View>
            <Text style={{marginLeft: 10, marginTop: 30, marginBottom: 10}}>Le bénévole est-il venu?</Text>
            <View style={{ flexDirection: "row" }}>
              <RadioButton.Item color="#d81d1d" label="Oui" value="Oui" />
              <RadioButton.Item color="#d81d1d" label="Non" value="Non" />
            </View>

            {this.state.value === "Non" ? (
              <RadioButton.Group
                onValueChange={(nom) => {
                  this.setState({ nom: nom });
                }}
                value={this.state.nom}
              >
                <RadioButton.Group
                onValueChange={(prenom) => {
                  this.setState({ prenom: prenom });
                }}
                value={this.state.prenom}
              ></RadioButton.Group>
                <View style={{ flexDirection: "column" }}>
                 
                  <RadioButton.Item
                    color="#d81d1d"
                    label="Arbitre 1"
                    value="Arbitre" 
                  />

                  {this.state.nom === "Arbitre" ? (
                    <TextInput
                      placeholder="   Nom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ nomRemplArbitre: text });
                      }}
                    />
                  ) : null}

                  {this.state.nom === "Arbitre" ? (  
                    <TextInput
                      placeholder="   Prénom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ prenomRemplArbitre: text });
                      }}
                    />
                  ) : null}
                  
                  <RadioButton.Item
                    color="#d81d1d"
                    label="Arbitre 2"
                    value="Arbitre2"
                  />

                  {this.state.nom === "Arbitre2" ? (
                    <TextInput
                      placeholder="   Nom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ nomRemplArbitre2: text });
                      }}
                    />
                  ) : null}

                  {this.state.nom === "Arbitre2" ? (  
                    <TextInput
                      placeholder="   Prénom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ prenomRemplArbitre2: text });
                      }}
                    />
                  ) : null}

                  <RadioButton.Item
                    color="#d81d1d"
                    label="Marqueur"
                    value="Marqueur"
                  />
                  {this.state.nom === "Marqueur" ? (
                    <TextInput
                      placeholder="   Nom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ nomRemplMarqueur: text });
                      }}
                    />
                  ) : null}

                  {this.state.nom === "Marqueur" ? (
                    <TextInput
                      placeholder="   Prénom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ prenomRemplMarqueur: text });
                      }}
                    />
                  ) : null}

                  <RadioButton.Item
                    color="#d81d1d"
                    label="Chronométreur"
                    value="Chronométreur"
                  />
                  {this.state.nom === "Chronométreur" ? (
                    <TextInput
                      placeholder="   Nom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ nomRemplChrono: text });
                      }}
                    />
                  ) : null}

                  {this.state.nom === "Chronométreur" ? (
                    <TextInput
                      placeholder="   Prénom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ prenomRemplChrono: text });
                      }}
                    />
                  ) : null}

                  <RadioButton.Item
                    color="#d81d1d"
                    label="Responsable de salle"
                    value="Responsable de salle"
                  />
                  {this.state.nom === "Responsable de salle" ? (
                    <TextInput
                      placeholder="   Nom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ nomRemplResponsableSalle: text });
                      }}
                    />
                  ) : null}

                  {this.state.nom === "Responsable de salle" ? (
                    <TextInput
                      placeholder="   Prénom du remplaçant"
                      onChangeText={(text) => {
                        this.setState({ prenomRemplResponsableSalle: text });
                      }}
                    />
                  ) : null}
                </View>
              </RadioButton.Group>
            ) : null}
          </View>
        </RadioButton.Group>
        <View style={styles.button}>
          <GradientButton
            text="Valider"
            textStyle={styles.textButton}
            width="40%"
            height="30%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._Valider();
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
    marginLeft: 12,
    fontSize: 14,
    fontWeight: "bold",
  },
  textScore: {
    flex: 0.5,
    marginTop: 5,
    marginLeft: 12,
    fontSize: 14,
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
export default AjoutPoint;
