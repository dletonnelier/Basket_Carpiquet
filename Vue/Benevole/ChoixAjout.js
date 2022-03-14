import React from "react";
import { View, StyleSheet,Text } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import Icon from "react-native-vector-icons/MaterialIcons";

class ChoixAjout extends React.Component {
  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }
  
  render() {
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
          <Text >{dataMatch.categorie}</Text>
          <Text>{dataMatch.dteMatch}</Text>
          <Text>{dataMatch.heureMatch}</Text>
        </View>

        <View style={styles.centre}>
          <View style={styles.space}></View>
          <GradientButton
            text="Ajouter en tant qu'arbitre"
            textStyle={styles.textButton}
            width="70%"
            height="18%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this.props.navigation.navigate("AjoutArbitre", {
                dataMatch: dataMatch,
                uid: this.props.route.params.uid,
                
              });
            }}
          />

          <View style={styles.space}></View>
          <GradientButton
            text="Ajouter en tant que marqueur"
            textStyle={styles.textButton}
            width="70%"
            height="18%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() =>
              this.props.navigation.navigate("AjoutMarqueur", {
                dataMatch: dataMatch,
                uid: this.props.route.params.uid,
              })
            }
          />

          <View style={styles.space}></View>
          <GradientButton
            text="Ajouter en tant que chronométreur"
            textStyle={styles.textButton}
            width="70%"
            height="18%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() =>
              this.props.navigation.navigate("AjoutChrono", {
                dataMatch: dataMatch,
                uid: this.props.route.params.uid,
              })
            }
          />

          <View style={styles.space}></View>
          <GradientButton
            text="Ajouter en tant que responsable de salle"
            textStyle={styles.textButton}
            width="70%"
            height="18%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() =>
              this.props.navigation.navigate("AjoutResponsableSalle", {
                dataMatch: dataMatch,
                uid: this.props.route.params.uid,
              })
            }
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
  space: {
    width: 20, // or whatever size you need
    height: 15,
  },
  centre: {
    marginTop: "1%",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    textAlign: "center",
    fontSize: 22,
  },
});
export default ChoixAjout;
