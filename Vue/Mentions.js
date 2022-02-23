import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

class Mentions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.textMention}>Mentions légales :</Text>
            <View>
              <Text style={styles.text}>Raison sociale:</Text>
              <Text style={styles.text}>
                Adresse : 7 Avenue Charles de Gaulle
              </Text>
              <Text style={styles.text}>
                Adresse e-mail : contact@carpiquetbasket.fr
              </Text>
              <Text style={styles.text}>
                Numéro de téléphone : 06 62 04 21 70
              </Text>
              <Text style={styles.text}>Responsable de publication :</Text>
            </View>
            <Text style={styles.text}>
              L'application "ES Carpiquet" a été développé par GARBACIAK Robin et LETONNELIER Donatien 
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCEB1",
  },

  textMention: {
    fontSize: 25,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  text: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18,
  },
});

export default Mentions;
