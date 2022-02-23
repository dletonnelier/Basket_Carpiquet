
import React,{useState,useEffect} from 'react';
import { Button, View, StyleSheet, Text,TextInput, FlatList,TouchableWithoutFeedback,Alert } from 'react-native';

import ListMatch from '../Benevole/ListMatch'

import { getMatch } from '../../Api/MatchApi';



class Bénévole extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text:"",
      matchsList: [],
      isLoading: false 
    }
  }
  

  _onMatchsReceived = (matchsList) => { //Remets le state marchsList:[] comme il était s'il y a plusieurs relances
    this.setState(prevState => ({
      matchsList: prevState.matchsList = matchsList})); }


componentDidMount() {  //Se lance dés qu'on est sur la page
    getMatch(this._onMatchsReceived);
    
  }
  

render(){
  
  return (
    <View style={{flex:1,backgroundColor: '#FBCEB1',}}>
      <View  style={styles.header}>
        
      </View>
      <FlatList data={this.state.matchsList} keyExtractor={(item) => item.id.toString()} renderItem={({item}) =>
        <View>
          <ListMatch dataMatch={item} navigation={this.props.navigation}/> 
        </View> }/> 
    </View>
  );
}
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
 

  },
});
export default Bénévole