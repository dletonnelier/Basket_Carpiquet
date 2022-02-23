/*import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { getMatch } from '../Api/MatchApi';
import AjoutPoint from'./AjoutPoint';



class ScreenListMatch extends React.Component {



  render() {

      const match=this.props.match

    

    return (
      
      <View style={styles.main_container}>
 
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{match.equipeDomicile}</Text>
            <Text style={styles.vote_text}>{match.equipeExterne}</Text>
          </View>
          <View style={styles.score_container}>
            <Text style={styles.score_text,{fontSize:30, marginTop:20,}}>{match.scoreDomicile}-</Text>
            <Text style={styles.score_text,{fontSize:30}}>{match.scoreExterne}</Text>
          </View>

            <View style={styles.textBas_container}>
              <Text style={styles.date_text}>Arbitres:{match.arbitre}</Text>
              <Text style={styles.date_text}>chronométreur:{match.chronométreur}</Text>
              <Text style={styles.date_text}>Marqueur:{match.marqueur}</Text>
              <View style={styles.buttonStyle}>

            </View>
            </View>
            
          <View style={styles.date_container}>
            
            <Text style={styles.date_text}>{match.dteMatch}</Text>
          </View>
         
          
        </View>
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:3,
    flexDirection: 'row',
 
  padding:10,
  borderColor: '#fff',
  borderWidth:4,
  backgroundColor:'#d3cdcb',
    
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 4,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 25,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5

  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 25,

  },
  score_container: {
    flex: 7,
    flexDirection:"row",
    justifyContent:'center'
  },
  score_text: {
 
    fontStyle: 'italic',
    
  
  },
  bas_container: {
    flex: 1,
    flexDirection:"column",
    justifyContent:'space-between'

  },
    textBas_container: {
      flex:3,
      marginTop:20,
   
    alignItems:"flex-start"
  },
  date_container:{
    flex:1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  buttonStyle:{
    marginTop:10,
    alignItems:'flex-end',
  },
})

export default ScreenListMatch
*/