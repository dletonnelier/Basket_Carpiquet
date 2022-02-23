import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";


class FillListBeneAccep extends React.Component {
  render() {
    const dataBene = this.props.dataBene;
    return (
      <View style={styles.main_container}>
        <View style={styles.test}>
          <View>
            <Text style={styles.date_text}>
              Nom et prénom : {dataBene.Nom} {dataBene.Prenom}
            </Text>
          </View>

          <View>
            <Text>Contact : {dataBene.Contact} </Text>
          </View>

          <View>
            <Text>Role : {dataBene.Role} </Text>
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
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    marginRight: 50,
    alignSelf: "center",
  },
});

export default FillListBeneAccep;
