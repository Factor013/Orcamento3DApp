import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styleHome} from '../Style'

export default function App() {

  

  const navigation = useNavigation();
    
    const[peso,setPeso]= useState(0)
    const[tempo,setTempo]= useState(0)
    var[result,setResult]= useState(0)
    var consumo,energia,filamento,qtdComprada,erros,lucro, fixacao,depreciacao = 0


         
     const calc = async () => {
        
        try {

            consumo = await AsyncStorage.getItem('@consumo')
            energia = await AsyncStorage.getItem('@energia')
            filamento = await AsyncStorage.getItem('@filamento')
            qtdComprada = await AsyncStorage.getItem('@qtdComprada')
            erros = await AsyncStorage.getItem('@erros')
            lucro = await AsyncStorage.getItem('@lucro')
            fixacao = await AsyncStorage.getItem('@fixacao')
            depreciacao = await AsyncStorage.getItem('@depreciacao')
            
        } catch (error) {
            alert(error)
        }

        let gFila = (filamento/(qtdComprada*1000))* peso
        let valorEner = (((consumo/100)*(tempo/60)))* energia
        let taxaErr = ((parseFloat(gFila)+parseFloat(valorEner))*(erros/100))
        let taxaDepre = ((parseFloat(gFila) + parseFloat(valorEner) + parseFloat(taxaErr)+ parseFloat(fixacao)))*(depreciacao/100)
        let taxaLucro = (parseFloat(gFila) + parseFloat(valorEner) + parseFloat(taxaErr) + parseFloat(taxaDepre)+ parseFloat(fixacao))*(lucro/100)
        setResult(parseFloat(gFila) + parseFloat(valorEner) + parseFloat(taxaErr) + parseFloat(taxaDepre) + parseFloat(fixacao)+ parseFloat(taxaLucro))
    }

  return (
    <View style={styleHome.container}>
        <Text style={styleHome.title}>
            ORÇAMENTO
        </Text>
        <View style={styleHome.form}>
            <Text style={styleHome.text}>
                Peso da Peça:
            </Text>
            <TextInput style={styleHome.input} 
                       placeholder='gramas' 
                       keyboardType='numeric'
                       value={peso} 
                       onChangeText={(value) =>setPeso(value)}
                       />
            <Text style={styleHome.text}>
                Tempo Impressão:
            </Text>
            <TextInput style={styleHome.input} 
                       placeholder='minutos' 
                       keyboardType='numeric' 
                       value={tempo} 
                       onChangeText={(value)=>{setTempo(value)}}/>
        </View>
        <View style={styleHome.result}>
            <Text style={styleHome.price} >
                R$ {result.toFixed(2)} 
            </Text>
        </View>
        <View>
            <TouchableOpacity style={styleHome.button} onPress={()=>calc()}>
                <Text style={{fontSize:30,color:'white',fontWeight:'500'}}>
                    Calcular
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );

}

