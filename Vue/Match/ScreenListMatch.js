import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class ScreenListMatch extends React.Component {
  _ChangeVueAjoutPoint() {

    this.props.navigation.navigate("OptionMatch", {
      match: this.props.match.id,
    });
  }

  render() {
    const match = this.props.match;
    const admin = this.props.admin;

    return (
      <View>
        {admin === "True" ? (
          <TouchableWithoutFeedback
            onPress={() => {
              this._ChangeVueAjoutPoint();
            }}
          >
            <View style={styles.main_container}>
              <View style={styles.content_container}>
                <View style={styles.header_container}>
                  <Text style={styles.title_text}>{match.categorie} </Text>
                </View>
                <View style={styles.date_container}>                        
                  <Text 
                    style={(styles.date_text, { fontWeight: "bold", fontSize: 15, marginTop: 5 })}
                    >
                      {match.dteMatch}
                  </Text>
                  <Text 
                    style={(styles.date_text, { fontWeight: "bold", fontSize: 15, marginTop: 20 })}
                  >
                  {match.heureMatch}
                  </Text>

                <View style={styles.textBas_container}>
                  <Text style={styles.date_text}>
                    Arbitre 1 : {match.arbitreNom} {match.arbitrePrenom}
                  </Text>

                  <Text style={styles.date_text}>
                    Arbitre 2 : {match.arbitre2Nom} {match.arbitre2Prenom}
                  </Text>

                  <Text style={styles.date_text}>
                    chronométreur : {match.chronometreurNom} {match.chronometreurPrenom}
                  </Text>

                  <Text style={styles.date_text}>
                    Marqueur : {match.marqueurNom} {match.marqueurPrenom}
                  </Text>

                  <Text style={styles.date_text}>
                    Responsable de salle : {match.responsableSalleNom} {match.responsableSallePrenom}
                  </Text>                  
                </View>
                  <Icon name="add" size={35}/>                  
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        {admin === "False" ? (
          <View style={styles.main_container}>
            <View style={styles.content_container}>

              <View style={styles.header_container}>
                  <Text style={styles.title_text}>{match.categorie} </Text>
                </View>
                <View style={styles.date_container}>                        
                  <Text 
                    style={(styles.date_text, { fontWeight: "bold", fontSize: 15, marginTop: 5 })}
                    >
                      {match.dteMatch}
                  </Text>
                  <Text 
                    style={(styles.date_text, { fontWeight: "bold", fontSize: 15, marginTop: 20 })}
                  >
                  {match.heureMatch}
                  </Text>

                  <View style={styles.textBas_container}>
                    <Text style={styles.date_text}>
                      Arbitre 1 : {match.arbitreNom} {match.arbitrePrenom}
                    </Text>
                    <Text style={styles.date_text}>
                      Arbitre 2 : {match.arbitre2Nom} {match.arbitre2Prenom}
                    </Text>
                    <Text style={styles.date_text}>
                      chronométreur : {match.chronometreurNom} {match.chronometreurPrenom}
                    </Text>
                    <Text style={styles.date_text}>
                      Marqueur : {match.marqueurNom} {match.marqueurPrenom}
                    </Text>
                    <Text style={styles.date_text}>
                      Responsable de salle : {match.responsableSalleNom} {match.responsableSallePrenom}
                    </Text>                  
                  </View>           
                </View>                  
              </View>
            </View>
                      
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 3,
    flexDirection: "row",
    padding: 10,
    borderColor: "#AA0000",
    borderWidth: 4,
    backgroundColor: "#d3cdcb",
    borderRadius: 50,
  },
  Icon:{
    alignItems: "flex-end" 
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 4,
    flexDirection: "row",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 25,
    paddingRight: 5,
    justifyContent: "space-between",
    textAlign: "center",
    flex: 2,
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 25,
  },
  score_container: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "center",
  },
  score_text: {
    fontStyle: "italic",
  },
  bas_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textBas_container: {
    flex: 3,
    marginTop: 20,

    alignItems: "flex-start",
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    
    textAlign: "right",
    fontSize: 14,
  },
  buttonStyle: {
    marginTop: 10,
    alignItems: "flex-end",
  },
});

export default ScreenListMatch;
