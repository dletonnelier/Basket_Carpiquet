import React from "react";
import { View , FlatList} from "react-native";

import ListComptes from "./FillListComptes";

import { getComptesRetenus } from "../Api/CompteApi";
import Icon from "react-native-vector-icons/MaterialIcons";

class ListeComptes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      comptesList: [],
      isLoading: false,
    };
  }

  _ChangeVueHome() {
    this.props.navigation.navigate("Profil");
  }

  _onComptesReceived = (comptesList) => {
    //Remets le state comptesList:[] comme il était si il y a plusieurs relance
    this.setState((prevState) => ({
      comptesList: (prevState.comptesList = comptesList),
    }));
  };

  componentDidMount() {
    //Se lance dés qu'on est sur la page
    getComptesRetenus(this._onComptesReceived);
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
          data={this.state.comptesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <ListComptes
                dataBene={item}
                navigation={this.props.navigation}
                admin={this.props.route.params.admin2}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
export default ListeComptes;
