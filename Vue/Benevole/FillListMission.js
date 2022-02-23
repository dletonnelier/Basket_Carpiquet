import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

class ListMission extends React.Component {
  render() {
    const dataMission = this.props.dataMission;
    return (
      <View style={styles.main_container}>
        <View style={styles.test}>
        <View>
            <Text style={styles.date_text}>
              Catégorie : {dataMission.categorie}
            </Text>
          </View>
          <View>
            <Text style={styles.date_text}>
              Date du match : {dataMission.dteMatch}
            </Text>
          </View>

          <View style={{}}>
            <Text>Heure du Match :{dataMission.heureMatch} </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,

    backgroundColor: "grey",
    marginTop: 10,
    padding: 10,
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  text: {
    marginRight: 50,
    alignSelf: "center",
  },
});

export default ListMission;
