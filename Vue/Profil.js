import React from "react";
import GradientButton from "react-native-gradient-buttons";

import { View, StyleSheet, Text  } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { countMissions } from "../Api/BenevoleAPI";

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
    };
  }

  _ChangeVueComptes() {
    this.props.navigation.navigate("ListComptes", {
      admin: this.props.route.params.admin,
    });
  }
  
  _ChangeVueListe() {
    this.props.navigation.navigate("ListMatch", {
      admin: this.props.route.params.admin,
    });
  }

  _ChangeVueMatch() {
    this.props.navigation.navigate("Match", {
      admin: this.props.route.params.admin,
    });
  }
  _ChangeVueBene() {
    this.props.navigation.navigate("ListMatchBene", {
      admin2: this.props.route.params.admin,
      uid: this.props.route.params.uid,
    });
  }  
  _ChangeVueMissions() {
    this.props.navigation.navigate("Missions", {
      uid: this.props.route.params.uid,
    });
  }
  _ChangeVueSettings() {
    this.props.navigation.navigate("Settings");
  }
  
  async _count(){
    const countMiss = await countMissions(this.props.route.params.uid);
    if (countMiss>=5){
      this.setState({text:"Vous avez assez de bénévolats"})
      
    }
    else{
      this.setState({text:"Vous n'avez actuellement pas assez de bénévolats, vous en n'avez que "+countMiss+" sur 5 requis."});
    }
  }
  componentDidMount() {
    this._count();
  }

  render() {    
    return (
      <View style={styles.screenContainer}>
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Icon
            name="settings"
            size={40}
            onPress={() => {
              this._ChangeVueSettings();
            }}
          />
        </View>
        
      
        
        {this.props.route.params.admin === "True" ? (
          
        <View        
          style={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:"40%",
          }}
        >
   
          <GradientButton
            text="Comptes"
            textStyle={styles.textButton}
            width="70%"
            height="25%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._ChangeVueComptes();
            }}
          />
          <View style={styles.space2}></View>
          <GradientButton
            text="Match"
            textStyle={styles.textButton}
            width="70%"
            height="25%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._ChangeVueMatch();
            }}
          />
            </View>
        ) : null}
        
        {this.props.route.params.admin === "False" ? (

<View        
style={{
  justifyContent: "center",
  alignItems: "center",            
}}
>

        <Text style={styles.text}>{this.state.text}</Text>
        <View style={styles.space}></View>
          <GradientButton
            text="Match"
            textStyle={styles.textButton}
            width="70%"
            height="18%"
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
            text="Bénévole"
            textStyle={styles.textButton}
            width="70%"
            height="18%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._ChangeVueBene();
            }}
          />
          <View style={styles.space}></View>
          <GradientButton
            text="Voir ses missions"
            textStyle={styles.textButton}
            width="70%"
            height="18%"
            radius={15}
            gradientEnd="#881515"
            gradientBegin="#d81d1d"
            gradientDirection="diagonal"
            onPressAction={() => {
              this._ChangeVueMissions();
            }}
          />
        </View>

        ) : null}
      </View>
      
    );
    
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#FBCEB1",
  },
  space: {
    width: 20, //espacer les buttons
    height: 30,
  },
  space2: {
    width: 40, //espacer les buttons
    height: 60,
  },
  textButton: {
    fontSize: 25,
  },
  text:{
    fontSize: 23,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  }
});

export default Profil;
