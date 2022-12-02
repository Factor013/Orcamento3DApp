import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function App({route}) {

  

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            ORÇAMENTO
        </Text>
        <View style={styles.form}>
            <Text style={styles.text}>
                Peso da Peça:
            </Text>
            <TextInput style={styles.input} placeholder='gramas' keyboardType='numeric'/>
            <Text style={styles.text}>
                Tempo Impressão:
            </Text>
            <TextInput style={styles.input} placeholder='minutos' keyboardType='numeric'/>
        </View>
        <View style={styles.result}>
            <Text style={styles.price}>
                R$
            </Text>
        </View>
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:30,color:'white',fontWeight:'500'}}>
                    Calcular
                </Text>
            </TouchableOpacity>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddd',
    alignItems: 'center',
    justifyContent:'space-evenly'
   },
   title:{
    fontSize:40,
    padding:20,
    fontWeight:'500',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius:5
    },
   text:{
    paddingBottom:5,
    fontSize:30,
    fontWeight:'500'
   },
   input: {
    fontSize:20,
    width:350,
    height:50,
    backgroundColor:'white',
    borderRadius:5
   },
   form:{
    backgroundColor:'#aaaa',
    borderColor:'black',
    borderRadius:5,
    borderWidth:1,
    padding:15,
    paddingBottom:30,
   },
   result:{

    alignItems:'center',
    justifyContent:'center',
    width:400,
    height:150,
    margin:20,
    borderRadius:50,
    borderColor:'black'
   },
   button:{
        width:200,
        height:80,
        backgroundColor:'black',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:15
   },
   price:{
    padding:10,
    backgroundColor:'rgb(0,250,154)',
    fontWeight:'bold',
    color:'white',
    fontSize:50,
   }
});