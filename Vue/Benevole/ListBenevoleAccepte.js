import React from "react";
import { View, FlatList,Text } from "react-native";

import ListBenevoleAccep from "./FillListBeneAccep";

import { getBenevoleAccepte } from "../../Api/BenevoleAPI";
import Icon from "react-native-vector-icons/MaterialIcons";

class ListeBenevole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      benevoleList: [],
      isLoading: false,
    };
  }

  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }

  _onMatchsReceived = (benevoleList) => {
    //Remets le state benevoleList:[] comme il était si il y a plusieurs relance
    this.setState((prevState) => ({
      benevoleList: (prevState.benevoleList = benevoleList),
    }));
  };

  componentDidMount() {
    //Se lance dés qu'on est sur la page
    getBenevoleAccepte(
      this.props.route.params.dataMatch.id,
      this._onMatchsReceived
    );
  }

  render() {
    const { dataMatch } = this.props.route.params;

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
        <View
          style={{marginLeft: 15, marginBottom: 30}}
        >
          <Text>{dataMatch.dteMatch}</Text>
          <Text>{dataMatch.equipeDomicile}</Text>
          <Text>{dataMatch.equipeExterne}</Text>
        </View>
        <FlatList
          data={this.state.benevoleList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <ListBenevoleAccep dataBene={item} />
            </View>
          )}
        />
      </View>
    );
  }
}
export default ListeBenevole;
