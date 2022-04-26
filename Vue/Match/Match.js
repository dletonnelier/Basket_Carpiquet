import * as React from "react";
import {

  View,
  StyleSheet,

} from "react-native";
import GradientButton from "react-native-gradient-buttons";


class Match extends React.Component {
  _ChangeVueListe() {
    this.props.navigation.navigate("ListMatch", {
      admin: this.props.route.params.admin,
    });
  }
  _ChangeVueAjout() {
    this.props.navigation.navigate("AjoutMatch");
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          backgroundColor: "#FBCEB1",
        }}
      >
        <View>
          {this.props.route.params.admin === "True" ? (
            <View
              style={{
                marginTop:'auto',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GradientButton
                text="Voir la liste des matchs"
                textStyle={styles.textButton}
                width="80%"
                height="30%"
                radius={15}
                gradientEnd="#881515"
                gradientBegin="#d81d1d"
                gradientDirection="diagonal"
                onPressAction={() => {
                  this._ChangeVueListe();
                }}
              />
              <View style={styles.space}></View>

              <GradientButton
                text="Ajouter un match"
                textStyle={styles.textButton}
                width="80%"
                height="30%"
                radius={15}
                gradientEnd="#881515"
                gradientBegin="#d81d1d"
                gradientDirection="diagonal"
                onPressAction={() => {
                  this._ChangeVueAjout();
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
                marginTop: "60%",
                marginBottom: 10,
              }}
            >
              <GradientButton
                text="Voir la liste des matchs"
                textStyle={styles.textButton}
                width="80%"
                height="50%"
                radius={15}
                gradientEnd="#881515"
                gradientBegin="#d81d1d"
                gradientDirection="diagonal"
                onPressAction={() => {
                  this._ChangeVueListe();
                }}
              />
              <View style={styles.space}></View>
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
  },
});
export default Match;
