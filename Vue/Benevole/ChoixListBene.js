/*import * as React from "react";
import { View, StyleSheet,Text } from "react-native";
import GradientButton from "react-native-gradient-buttons";

import Icon from "react-native-vector-icons/MaterialIcons";

class accueilBene extends React.Component {
  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }

  render() {
    const { dataMatch } = this.props.route.params;
    const admin = this.props.route.params.admin;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
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
          style={{marginLeft: 15}}
        >
          <Text>{dataMatch.dteMatch}</Text>
          <Text>{dataMatch.equipeDomicile}</Text>
          <Text>{dataMatch.equipeExterne}</Text>
        </View>
        <View>
          {this.props.route.params.admin === "True" ? (
            <View
              style={{
                marginTop: "25%",
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              <GradientButton
                text="Voir la liste des bénévoles retenus"
                textStyle={styles.textButton}
                width="80%"
                height="30%"
                radius={15}
                gradientEnd="#881515"
                gradientBegin="#d81d1d"
                gradientDirection="diagonal"
                onPressAction={() => {
                  this.props.navigation.navigate("ListBenevoleRetenus", {
                    dataMatch: dataMatch,
                  });
                }}
              />
              <View style={styles.space}></View>
              <GradientButton
                text="Voir la liste des bénévoles acceptés"
                textStyle={styles.textButton}
                width="80%"
                height="30%"
                radius={15}
                gradientEnd="#881515"
                gradientBegin="#d81d1d"
                gradientDirection="diagonal"
                onPressAction={() => {
                  this.props.navigation.navigate("ListBenevoleAccepte", {
                    dataMatch: dataMatch,
                  });
                }}
              />
            </View>
          ) : null}

          {this.props.route.params.admin === "False" ? (
            <View
              style={{
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50%",
                marginBottom: 10,
              }}
            >
              <GradientButton
                text="Voir la liste des bénévoles acceptés"
                textStyle={styles.textButton}
                width="80%"
                height="55%"
                radius={15}
                gradientEnd="#881515"
                gradientBegin="#d81d1d"
                gradientDirection="diagonal"
                onPressAction={() => {
                  this.props.navigation.navigate("ListBenevoleAccepte", {
                    dataMatch: dataMatch,
                  });
                }}
              />
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    width: 20, //espacer les buttons
    height: 50,
  },
  textButton: {
    fontSize: 25,
    textAlign: "center",
  },
});
export default accueilBene;
*/