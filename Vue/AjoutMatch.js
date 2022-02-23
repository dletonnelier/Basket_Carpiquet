import  React,{ useState } from 'react';
import {Button, View, StyleSheet, Text,TextInput, Alert } from 'react-native';
import {addMatch} from '../Api/MatchApi';


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


      
    }
  }
_AjoutMatch(){
  addMatch(this.state.equiDom,this.state.equiExt,this.state.dte,this.state.heure,this.state.arbitre,this.state.chrono,this.state.marqueur,this.state.responsableSalle);
  Alert.alert("Match ajouter")

}
  
  render(){
    
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
          <Text style={styles.text}>Heure de début :</Text>
          <TextInput style={styles.paragraph} placeholder="Heure de début"
          onChangeText={(text)=>{this.setState({heure:text})}}/>
          </View>
          <View style={styles.alignText}>
          <Text style={styles.text}>Arbitres :</Text>
          <TextInput style={styles.paragraph} placeholder="Arbitres"
          onChangeText={(text)=>{this.setState({arbitre:text})}}/>
          </View>
  
          <View style={styles.alignText}>
          <Text style={styles.text}>Chronométreur :</Text>
          <TextInput style={styles.paragraph} placeholder="Chronométreur"
          onChangeText={(text)=>{this.setState({chrono:text})}}/>
          </View>

          <View style={styles.alignText}>  
          <Text style={styles.text}>Marqueur :</Text>
          <TextInput style={styles.paragraph} placeholder="Marqueur"
          onChangeText={(text)=>{this.setState({marqueur:text})}}/>
          </View>

          <View style={styles.alignText}>  
          <Text style={styles.text}>Responsable de Salle :</Text>
          <TextInput style={styles.paragraph} placeholder="Responsable de Salle"
          onChangeText={(text)=>{this.setState({responsableSalle:text})}}/>
          </View>

          <View style={styles.button}>
            <Button  title="Valider l'ajout du match "
            onPress={() => {this._AjoutMatch()}}/>
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
      marginRight:10,
      flex:1,
      
    },
    text:{
      flex:0.5,
      marginTop:15,
      marginLeft:15,
      fontSize: 13,
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