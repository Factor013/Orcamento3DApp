import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {styles} from '../style'


export default function App() {

    const[consumo,setConsumo] = useState(0)
    const[energia,setEnergia] = useState(0)

    const[filamento,setFilamento] = useState(0)
    const[qtdComprada,setQtdComprada] = useState(0)

    const[erros,setErros] = useState(0)
    const[lucro,setLucro] = useState(0)

    const[fixacao,setFixacao] = useState(0)
    const[depreciacao,setDepreciacao] = useState(0)


    const salvarDados= async() =>{

        try{

           await AsyncStorage.setItem('@consumo',String(consumo))
           await AsyncStorage.setItem('@energia',String(energia))
           await AsyncStorage.setItem('@filamento',String(filamento))
           await AsyncStorage.setItem('@qtdComprada',String(qtdComprada))
           await AsyncStorage.setItem('@erros',String(erros))
           await AsyncStorage.setItem('@lucro',String(lucro))
           await AsyncStorage.setItem('@fixacao',String(fixacao))
           await AsyncStorage.setItem('@depreciacao',String(depreciacao)) //grava os dados com id @*** e o valor ***/ ***temporario***
           alert("Sucesso","Dados Salvos")

        }catch(e){
            alert(e)
        }
        
    }



  return (
    <View style={styles.container}>
        <View>
        <Text style={styles.title}>
            VALORES PADRÃO
        </Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.form}>
            <Text style={styles.text}>
                Consumo de Máquina:
            </Text>
            <TextInput style={styles.input} 
                    placeholder='450W' 
                    keyboardType='numeric'
                    value={consumo}
                    onChangeText={(value) =>setConsumo(value)}/>
            <Text style={styles.text}>
                Energia:
            </Text>
            <TextInput style={styles.input} 
            placeholder='Kw/h' 
            keyboardType='numeric'
            value={energia}
            onChangeText={(value) =>setEnergia(value)}/>
        </View>
        <View style={styles.form}>
            <Text style={styles.text}>
                Valor Filamento:
            </Text>

            <TextInput style={styles.input} 
            placeholder='R$' 
            keyboardType='numeric'
            value={filamento}
            onChangeText={(value) =>setFilamento(value)}/>

            <Text style={styles.text}>
                Quantidade Comprada:
            </Text>
            <TextInput style={styles.input} 
            placeholder='Kg/Carretel' 
            keyboardType='numeric'
            value={qtdComprada}
            onChangeText={(value) =>setQtdComprada(value)}/>
        </View>
        </View>

        <View style={{flexDirection:'row'}}>
        <View style={styles.form}>
            <Text style={styles.text}>
                Taxa de Erros:
            </Text>
            <TextInput style={styles.input} 
            placeholder='%' 
            keyboardType='numeric'
            value={erros}
            onChangeText={(value) =>setErros(value)}/>
            <Text style={styles.text}>
                Fixação de Peças:
            </Text>
            <TextInput style={styles.input} 
            placeholder='R$/Impressão' 
            keyboardType='numeric'
            value={fixacao}
            onChangeText={(value) =>setFixacao(value)}/>
        </View>
        <View style={styles.form}>
        <Text style={styles.text}>
                Lucro:
            </Text>
            <TextInput style={styles.input} 
            placeholder='%' 
            keyboardType='numeric'
            value={lucro}
            onChangeText={(value) =>setLucro(value)}/>
            <Text style={styles.text}>
                Depreciação:
            </Text>
            <TextInput style={styles.input} 
            placeholder='%' 
            keyboardType='numeric'
            value={depreciacao}
            onChangeText={(value) =>setDepreciacao(value)}/>
        </View>
    </View>
    <TouchableOpacity style={styles.Save} onPress={salvarDados}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>
            Salvar Dados
        </Text>
    </TouchableOpacity>
    </View >
  );
}


