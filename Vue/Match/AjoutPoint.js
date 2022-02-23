import  React,{ useState } from 'react';
import {Button, View, StyleSheet, Text,TextInput, Alert } from 'react-native';
import {updatePoint } from '../../Api/MatchApi'
import GradientButton from 'react-native-gradient-buttons';



class AjoutPoint extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      scoreDom:'',
      scoreExt:'',
    }
  }
  _Valider(){
    if(this.state.scoreDom !="" && this.state.scoreExt!=""){

  
    updatePoint(this.props.route.params.match,this.state.scoreDom,this.state.scoreExt)
    Alert.alert("Les points on été ajoutée")
    this.props.navigation.navigate('Match')
  }else{
    Alert.alert("Veuillez compléter tous les champs")
  }
    

  }
  
  render(){
    const   {match} = this.props.route.params
    console.log(match)
    
    return (
      <View style={styles.main_container}>
        <View style={styles.alignText}>
          <Text style={styles.textScore} >Score équipe domicile: </Text>
          <TextInput style={styles.paragraph} placeholder="Score équipe domicile"onChangeText={(text)=>{this.setState({scoreDom:text})}}/>
        </View>

        <View style={styles.alignText}>
          <Text style={styles.textScore}>Score équipe externe :</Text>
          <TextInput style={styles.paragraph} placeholder="Score équipe externe"onChangeText={(text)=>{this.setState({scoreExt:text})}}/>
        </View>

        <View style={styles.button}>
          <GradientButton text="Valider" textStyle={styles.textButton} width='40%' height='25%' radius={15} deepBlue impact onPressAction={() => {this._Valider()}}/>
        </View>
  
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    main_container: {
      flex:1,
      justifyContent: 'flex-start',
      backgroundColor: '#596fb899',
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
      borderRadius:10,
      paddingLeft:5,
      backgroundColor:'#596fb880',
      
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
  
    },
    textButton:{
      fontSize: 25,
    },
  });
export default AjoutPoint