/*import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import Icon from "react-native-vector-icons/MaterialIcons";

class accueilBene extends React.Component {
  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }

  render() {
    const { dataMatch } = this.props.route.params;
    const admin = this.props.route.params.admin;
    console.log(dataMatch.id);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FBCEB1",
        }}
      >
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
          style={{marginLeft: 15, fontWeight: "bold", fontSize: 50,}}
        >
          <Text>{dataMatch.categorie}</Text>
          <Text>{dataMatch.dteMatch}</Text>
          <Text>{dataMatch.heureMatch}</Text>
        </View>

        <View>
          <View
            style={{
              marginTop:'25%',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GradientButton
              text="Voir la liste des bénévoles"
              textStyle={styles.textButton}
              width="80%"
              height="30%"
              radius={15}
              gradientEnd="#881515"
              gradientBegin="#d81d1d"
              gradientDirection="diagonal"
              onPressAction={() => {
                this.props.navigation.navigate("ChoixListBene", {
                  dataMatch: dataMatch,
                  admin: admin,
                });
              }}
            />
            <View style={styles.space}></View>
            <GradientButton
              text="S'ajouter sur le match"
              textStyle={styles.textButton}
              width="80%"
              height="30%"
              radius={15}
              gradientEnd="#881515"
              gradientBegin="#d81d1d"
              gradientDirection="diagonal"
              onPressAction={() => {
                if (){
                  this.setState({text:"Vous ne pouvez pas vous inscrire deux fois sur le même match !"})
                }
                else{
                  this.props.navigation.navigate("ChoixAjout", {
                  dataMatch: dataMatch,
                  });
                }
                this.props.navigation.navigate("ChoixAjout", {
                  dataMatch: dataMatch,
                });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    width: 20, //espacer les buttons
    height: 60,
  },
  textButton: {
    fontSize: 25,
    textAlign: "center",
  },
});
export default accueilBene;
*/