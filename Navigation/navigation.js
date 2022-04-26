import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Accueil from "../Vue/Accueil";
import Inscription from "../Vue/Inscription";
import Authentification from "../Vue/Authentification";
import Profil from "../Vue/Profil";
import Match from "../Vue/Match/Match";
import Settings from "../Vue/Settings";
import Mentions from "../Vue/Mentions";
import MdpOublie from "../Vue/MdpOublie";
import ListMatch from "../Vue/Match/ListMatch";
import AjoutMatch from "../Vue/Match/AjoutMatch";
import ListMatchBene from "../Vue/Benevole/ListMatchBene";
import AjoutArbitre from "../Vue/Benevole/AjoutArbitre";
import AjoutChrono from "../Vue/Benevole/AjoutChrono";
import AjoutMarqueur from "../Vue/Benevole/AjoutMarqueur";
import AjoutResponsableSalle from "../Vue/Benevole/AjoutResponsableSalle";
import ChoixAjout from "../Vue/Benevole/ChoixAjout";
import Missions from "../Vue/Benevole/MissionsBene";
import ListComptes from "../Vue/ListComptes";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#AA0000",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen 
        name="Accueil" 
        component={Accueil} 
        options={{}} 
      />
      <Stack.Screen 
        name="Inscription" 
        component={Inscription} 
      />
      <Stack.Screen 
        name="Authentification" 
        component={Authentification} 
      />
      <Stack.Screen 
        name="Match" 
        component={Match} 
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Paramètres" }}
      />
      <Stack.Screen 
        name="Mentions" 
        component={Mentions} 
      />

      <Stack.Screen
        name="ListComptes"
        component={ListComptes}
        options={{ title: "Liste des comptes retenus" }}
      />

      <Stack.Screen
        name="ListMatch"
        component={ListMatch}
        options={{ title: "Liste des matchs" }}
      />
      <Stack.Screen
        name="AjoutMatch"
        component={AjoutMatch}
        options={{ title: "Ajouter un match" }}
      />

      
      <Stack.Screen
        name="ListMatchBene"
        component={ListMatchBene}
        options={{ title: "Liste des matchs" }}
      />
      
      <Stack.Screen
        name="ChoixAjout"
        component={ChoixAjout}
        options={{ title: "Type de bénévole" }}
      />
            
      <Stack.Screen
        name="Missions"
        component={Missions}
        options={{ title: "Nos missions" }}
      />

      <Stack.Screen
        name="AjoutArbitre"
        component={AjoutArbitre}
        options={{ title: "Ajout en tant qu'arbitre" }}
      />
      <Stack.Screen
        name="AjoutChrono"
        component={AjoutChrono}
        options={{ title: "Ajout en tant que chronométreur" }}
      />
      <Stack.Screen
        name="AjoutMarqueur"
        component={AjoutMarqueur}
        options={{ title: "Ajout en tant que marqueur" }}
      />
      <Stack.Screen
        name="AjoutResponsableSalle"
        component={AjoutResponsableSalle}
        options={{ title: "Ajout en tant que responsable de salle" }}
      />
      <Stack.Screen
        name="MdpOublie"
        component={MdpOublie}
        options={{ title: "Mot de passe oublié" }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
