import React from "react";
import { View, FlatList } from "react-native";

import ListMission from "./FillListMission";

import { getMissionByBenevole } from "../../Api/BenevoleAPI";
import Icon from "react-native-vector-icons/MaterialIcons";

class listMatchBene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      matchsList: [],
      isLoading: false,
    };
  }
  
  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }

  _onMatchsReceived = (matchsList) => {
    //Remets le state marchsList:[] comme il était si il y a plusieurs relance
    this.setState((prevState) => ({
      matchsList: (prevState.matchsList = matchsList),
    }));
  };

  componentDidMount() {
    //Se lance dés qu'on est sur la page
    getMissionByBenevole(
      this.props.route.params.uid, 
      this._onMatchsReceived
      );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FBCEB1" }}>
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Icon
            name="home"
            size={35}
            onPress={() => {
              this._ChangeVueHome();
            }}
          />
        </View>
        <FlatList
          data={this.state.matchsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <ListMission
                dataMission={item}
                navigation={this.props.navigation}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
export default listMatchBene;
