import React from 'react'
import { StyleSheet, View, Text,TouchableWithoutFeedback,Button } from 'react-native'
import { getMatch } from '../../Api/MatchApi';

class ListMatch extends React.Component {
  _ChangeVue(){
    
    this.props.navigation.navigate('ChoixAjout',{
      dataMatch:this.props.dataMatch,
      dataBene:this.props.route.params.uid,      
    }    
    )  
  console.log("dataBene");
  console.log(dataBene);
  };

  render() {
          
 const dataMatch = this.props.dataMatch

    return (
    <View style={styles.main_container} >
      
      <TouchableWithoutFeedback onPress={() => {this._ChangeVue()} }>
        <View style={styles.test}>

          <View>
          <Text>Catégorie : {dataMatch.categorie}</Text>
          </View>

          <View >
          <Text style={styles.date_text}>Date du match : {dataMatch.dteMatch}</Text>
          </View>

          <View style={{ }}>
          <Text >Heure du match : {dataMatch.heureMatch}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,

    backgroundColor:'grey',
    marginTop:10,
    padding:10,
    marginLeft:'10%',
    marginRight:'10%',
    justifyContent:'flex-start',
    alignItems:'flex-start', 
  },

  text:{
    marginRight:50,alignSelf:'center', 
  }
})

export default ListMatch