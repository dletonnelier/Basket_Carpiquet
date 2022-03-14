import * as React from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { addbenevoleRetenus ,getDataBene} from "../../Api/BenevoleAPI";

class AjoutMarqueur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid:"",
      marqueurNom: "",
      marqueurPrenom: "",
      contact: "",
      test:false,
    };
  }
  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }
  _Valider() {
    var roles = "marqueur";
    if (this.state.marqueurNom != "" && this.state.marqueurPrenom != "" && this.state.contact != "") {
      accepteBenevol( 
        dataMatch.id,
        this.state.arbitreNom,
        this.state.arbitrePrenom,
        roles  
      );
      addMission(this.state.uid, dataMatch.categorie, dataMatch.dteMatch, dataMatch.heureMatch)

      Alert.alert("Ajout reussi");
      this.props.navigation.navigate("ListMatchBene", { data: this.props.data });
    } else {
      Alert.alert("Veuillez remplir le champ ");
    }
  }

  async _fillBene(){
    if(this.state.test== false){

    const  dataBene  = await getDataBene(this.props.route.params.uid);
    this.setState({ test: true });
    this.setState({uid : dataBene.id})
    this.setState({ marqueurNom: dataBene.nom });
    this.setState({ marqueurPrenom: dataBene.prenom });
    this.setState({ contact: dataBene.emailUser });
  }else{

  }
 
}


  render() {
    this._fillBene();

    const { dataMatch } = this.props.route.params;

    return (
      <View style={styles.container}>

        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Icon
            name="home"
            size={35}
            onPress={() => {
              this._ChangeVueHome();
            }}
          />
        </View>
        <View
          style={{marginLeft: 15}}
        >
          <Text>{dataMatch.categorie}</Text>
          <Text>{dataMatch.dteMatch}</Text>
          <Text>{dataMatch.heureMatch}</Text>
        </View>

        <View style={styles.centre}>
          <View style={styles.alignText}>
            <Text style={styles.text}>Nom du marqueur :</Text>
            <TextInput
              style={styles.paragraph}
              placeholder={this.state.marqueurNom}
              onChangeText={(text) => {
                this.setState({ marqueurNom: text });
              }}
            />
          </View>
          <View style={{ flexDirection: "row", margin: "auto", marginBottom: 10 }}>
            <Text style={styles.text}>Prénom du marqueur :</Text>
            <TextInput
              style={styles.paragraph}
              placeholder={this.state.marqueurPrenom}
              onChangeText={(text) => {
                this.setState({ marqueurPrenom: text });
              }}
            />
          </View>
          <View
            style={{ flexDirection: "row", margin: "auto", marginBottom: 50 }}
          >
            <Text style={styles.text}>Adresse mail :</Text>
            <TextInput
              style={styles.paragraph}
              placeholder={this.state.contact}
              onChangeText={(text) => {
                this.setState({ contact: text });
              }}
            />
          </View>

          <GradientButton
            text="Valider"
            textStyle={styles.textButton}
            width="40%"
            height="15%"
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
  container: {
    flex: 1,
    backgroundColor: "#FBCEB1",
  },
  alignText: {
    marginTop: "30%",
    flexDirection: "row",
    margin: "auto",
    marginBottom: 10,
  },
  poserText: {
    flexDirection: "row",
    margin: "auto",
    marginBottom: 10,
  },
  text: {
    flex: 0.5,
    marginTop: 15,
    marginLeft: 15,
    fontSize: 13,
    fontWeight: "bold",
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
  centre: {
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    textAlign: "center",
    fontSize: 25,
  },
});
export default AjoutMarqueur;
