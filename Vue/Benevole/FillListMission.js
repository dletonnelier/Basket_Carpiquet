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
        <View >

        <View style={styles.header_container}>
                  <Text style={styles.title_text}>{dataMission.categorie} </Text>
                </View>
                <View style={styles.date_container}>
                <Text style={styles.text}>
              Date du match : {dataMission.dteMatch}
            </Text>
            

            <Text style={styles.text}>Heure du Match : {dataMission.heureMatch} </Text>
            <Text style={styles.text}>Roles : {dataMission.roles} </Text>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop:20,
    paddingBottom:10,
    paddingLeft: 20,
    paddingRight: 20,

  },
  header_container: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#AA0000",
    borderWidth:1,
    borderTopEndRadius:10,
    borderTopStartRadius:10,

        
    },
    title_text: {
      fontWeight: "bold",
      fontSize: 25,
      paddingRight: 5,
      justifyContent: "space-between",
      textAlign: "center",
      flex: 2,
      color:'white',
    },
    date_container: {
      flex: 1,
      backgroundColor: "#ffffff",
      borderBottomWidth:1,
      borderLeftWidth:1,
      borderRightWidth:1,
  
      borderBottomEndRadius:10,
      borderBottomStartRadius:10,  
    },

  text: {
    fontSize: 14,
    paddingLeft:5,
    paddingBottom:5,
  },
});

export default ListMission;
