import  React,{ useState } from 'react';
import {Button, View, StyleSheet, Text,TextInput, Alert } from 'react-native';
import {addMatch} from '../Api/MatchApi';
import {getMatchByequiDomANDequiExtAndDte} from '../Api/MatchApi'


class AjoutMatch extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      equiDom:'',
      equiExt:'',
      dte:'',
      heure:'',
      arbitre:'',
      chrono:'',
      marqueur:'',
      responsableSalle:'',
      matchsList: [],


      
    }
  }
  


  onMatchsReceived = (matchsList) => {
    this.setState(prevState => ({
      matchsList: prevState.matchsList = matchsList
    }));
  }

  _remplirDon(){

    let response =   getMatchByequiDomANDequiExtAndDte(matchsList,"Carpiquet","Caen","20-05-2021").then(data=>{
      this.setState({ matchs: data.results})})
      if(response && response.user ){

      }
}
  
  render(){
    console.log(getMatchByequiDomANDequiExtAndDte(this.state.matchsList))
    
    return (
      <View style={styles.main_container}>
        
          
          <View style={styles.alignText}>
          <Text style={styles.text}>Équipe domicile :</Text>
          <TextInput style={styles.paragraph} placeholder="Equipe domicile"
          onChangeText={(text)=>{this.setState({equiDom:text})}}/>
          </View>
  
          <View style={styles.alignText}>
            <Text style={styles.text}>Équipe externe :</Text>
            <TextInput style={styles.paragraph} placeholder="Equipe externe"
            onChangeText={(text)=>{this.setState({equiExt:text})}}/>
          </View>
  
          <View style={styles.alignText}>
            <Text style={styles.text}>Date du match :</Text>
            <TextInput style={styles.paragraph} placeholder="Date du match"
            onChangeText={(text)=>{this.setState({dte:text})}}/>
          </View>
          <View style={styles.alignText}>
          <Text style={styles.textScore} >Score équipe domicile: </Text>
          <TextInput style={styles.paragraph} placeholder="Score équipe domicile"
          onChangeText={(text)=>{this.setState({heure:text})}}/>
          </View>
          <View style={styles.alignText}>
          <Text style={styles.textScore}>Score équipe externe :</Text>
          <TextInput style={styles.paragraph} placeholder="Score équipe externe"
          onChangeText={(text)=>{this.setState({arbitre:text})}}/>
          </View>
  
     
          <View style={styles.button}>
            <Button  title="Valider l'ajout des points "
            onPress={() => {this._remplirDon()}}/>
          </View>
  
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    main_container: {
      flex:1,
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
      
    },
    button:{
      justifyContent:"center",
      alignItems:"center"
      
    },
    paragraph: {
      borderWidth:1,
      marginLeft:15,
      marginTop:10,
      marginBottom:10,
      marginRight:1,
      flex:1,
      
    },
    text:{
      flex:0.5,
      marginTop:15,
      marginLeft:12,
      fontSize: 14,
      fontWeight: 'bold',
    },
    textScore:{
      flex:0.5,
      marginTop:5,
      marginLeft:12,
      fontSize: 14,
      fontWeight: 'bold',
    },
    textTitre:{
      fontWeight: 'bold',
      fontSize:30,
      margin: 'auto',
      marginBottom:25,
      marginLeft:15,
    },
    alignText:{
      flexDirection:"row",
      margin:'auto',
  
    }
  });
export default AjoutMatch