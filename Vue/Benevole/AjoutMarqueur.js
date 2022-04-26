import * as React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import Icon from "react-native-vector-icons/MaterialIcons";
import {getDataBene,addMission,accepteBenevol} from "../../Api/BenevoleAPI";

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
    const { dataMatch } = this.props.route.params;

    if (this.state.marqueurNom != "" && this.state.marqueurPrenom != "" && this.state.contact != "") {
      accepteBenevol( 
        dataMatch.id,
        this.state.marqueurNom,
        this.state.marqueurPrenom,
        roles  
      );
      addMission(this.state.uid, dataMatch.categorie, dataMatch.dteMatch, dataMatch.heureMatch,roles)

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
        <View style={{
          marginLeft: 50, 
          borderWidth:1, 
          marginRight:50,
          justifyContent:'center',
          alignItems:'center',
          }}>
          <Text>{dataMatch.categorie}</Text>
          <Text>{dataMatch.dteMatch}</Text>
          <Text>{dataMatch.heureMatch}</Text>
        </View>

        <View style={styles.centre}>
          <View style={styles.alignText}>
            <Text style={styles.text}>Nom du marqueur :</Text>
            <Text
              style={styles.paragraph}    
            >{this.state.marqueurNom}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: "auto", marginBottom: 10 }}>
            <Text style={styles.text}>Prénom du marqueur :</Text>
            <Text
              style={styles.paragraph}    
            >{this.state.marqueurPrenom}</Text>
          </View>
          <View
            style={{ flexDirection: "row", margin: "auto", marginBottom: 50 }}
          >
            <Text style={styles.text}>Adresse mail :</Text>
            <Text
              style={styles.paragraph}    
            >{this.state.contact}</Text>
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
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    flex: 1,
    paddingLeft: 5,   
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
