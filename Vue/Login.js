import React from 'react';
import {View, StyleSheet, Text, StatusBar,TextInput, Button, Alert,ActivityIndicator } from 'react-native';


import * as firebase from 'firebase';






class UtiLogin extends React.Component {

  constructor(props)
  {
    super(props);

    this.state={
      email:'',
      mdp:'',
      isLoading:false
      
    }

  }


  
async _login(){
  
  try{
    this.setState({isLoading:true});
    let response =  await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.mdp)
    if (response && response.user) {
      this.setState({isLoading:false});
      Alert.alert("Connexion reussie")
      this._ChangeVue();
    }
    
  }
  catch(e){  
    this.setState({isLoading:false});  
    Alert.alert("Email ou Identifiants incorrect") 
    console.error(e.message)
  }
}


  _ChangeVue(){
    this.props.navigation.navigate('Profil')
  };
 



 render(){
   
  return (

          <View style={styles.container}>
              <Text>Authentification</Text>
              <StatusBar style="auto" />
              <TextInput style={styles.textinput} placeholder="Login" onChangeText={(text)=>this.setState({email:text})} />
              <TextInput style={styles.textinput}  placeholder="Mot de passe" secureTextEntry={true} onChangeText={(text)=>this.setState({mdp:text})} />

    
                <Button
        title="Valider"
        color='#0067eb'
        onPress={() => {this._login()}}
      />
      { this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' color="#0000ff" backgroundColor='#bfbdbc50'/>
          </View>
          : null
      }
         
            </View>   
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    textinput: {
      
      width:100,
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      borderColor:"#000000",
    },
    loading_container: {
    
      position:'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
    }
});
export default UtiLogin