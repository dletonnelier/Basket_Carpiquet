import React from "react";
import { View, FlatList } from "react-native";

import ListMatch from "./FillListMatch";

import { getMatch } from "../../Api/MatchApi";

class listMatchBene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      matchsList: [],
      isLoading: false,
    };
  }

  _onMatchsReceived = (matchsList) => {
    //Remets le state marchsList:[] comme il était si il y a plusieurs relance
    this.setState((prevState) => ({
      matchsList: (prevState.matchsList = matchsList),
    }));
  };

  componentDidMount() {
    //Se lance dés qu'on est sur la page
    getMatch(this._onMatchsReceived);
  }

  render() {
    const admin = this.props.route.params.admin2;

    return (
      <View style={{ flex: 1, backgroundColor: "#FBCEB1" }}>
        <FlatList
          data={this.state.matchsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <ListMatch
                dataMatch={item}
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
export default listMatchBene;
