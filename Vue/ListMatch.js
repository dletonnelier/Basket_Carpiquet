import * as React from 'react';
import { View, StyleSheet, Text,  FlatList,Button } from 'react-native';
import { getMatch } from '../Api/MatchApi';
import MatchItem from './ScreenListMatch';

class ListMatch extends React.Component  {  
  constructor(props) {
    super(props)

    this.state = {
      text:"",
      matchsList: [],
      isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
  }

  onMatchsReceived = (matchsList) => {
    this.setState(prevState => ({
      matchsList: prevState.matchsList = matchsList
    }));
  }

  _remplirDon(){
    getMatch(matchsList).then(data=>{
      this.setState({ matchs: data.results})      
    })
    console.log("fdfsfdsfdsfsfs",data.results)
    console.log("ezezaea",this.state.matchs)
  }

  componentDidMount() {
    getMatch(this.onMatchsReceived);
  }
  _ChangeVue(){
    this.props.navigation.navigate('AjoutPoint')
  };

  render(){
  return (    
    <View style={styles.main_container} >
      <FlatList
        data={this.state.matchsList}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item}) => <MatchItem match={item}/>}
        onEndReachedThreshold={0.5}/>
    </View>
  );
}
}

const styles =StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor: '#fff',
  },
  
})
export default ListMatch