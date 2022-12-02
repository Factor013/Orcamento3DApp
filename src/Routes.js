import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Entypo, Feather} from '@expo/vector-icons'

import Home from './pages/Home';
import Dados from './pages/Data';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarStyle: {
              backgroundColor: '#121212',
              borderTopColor: 'transparent',
              paddingTop:5,
              paddingBottom:5
            },
            tabBarActiveTintColor:'white',
           
            
          }}>
            <Tab.Screen
             name="Dados" 
             component={Dados} 
             options={{tabBarIcon: ({size, color}) => (<Entypo name='new-message' size={size} color={color}/>)}}/>
            <Tab.Screen
             name="Orçamento" 
             component={Home} 
             options={{tabBarIcon: ({size, color}) => (<Entypo name='credit' size={size} color={color}/>)}}/>
        </Tab.Navigator>
    )
}