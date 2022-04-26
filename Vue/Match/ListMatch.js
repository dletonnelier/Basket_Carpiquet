import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { getMatch } from "../../Api/MatchApi";
import MatchItem from "../Match/ScreenListMatch";

class ListMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      matchsList: [],
      isLoading: false,
    };
  }

  onMatchsReceived = (matchsList) => {
    this.setState((prevState) => ({
      matchsList: (prevState.matchsList = matchsList),
    }));
  };

  _remplirDon() {
    getMatch(matchsList).then((data) => {
      this.setState({ matchs: data.results });
    });
  }

  componentDidMount() {
    //Se lance dés qu'on est sur la page
    getMatch(this.onMatchsReceived);
  }

  render() {
    const admin = this.props.route.params.admin;
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.state.matchsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MatchItem
              match={item}
              navigation={this.props.navigation}
              admin={admin}
            />
          )}
          onEndReachedThreshold={0.3}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FBCEB1",
  },
  
});
export default ListMatch;
