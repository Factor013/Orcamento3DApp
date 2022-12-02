import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App({route}) {



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
            <TextInput style={styles.input} placeholder='450W' keyboardType='numeric'/>
            <Text style={styles.text}>
                Energia:
            </Text>
            <TextInput style={styles.input} placeholder='Kw/h' keyboardType='numeric'/>
        </View>
        <View style={styles.form}>
            <Text style={styles.text}>
                Valor Filamento:
            </Text>
            <TextInput style={styles.input} placeholder='R$' keyboardType='numeric'/>
            <Text style={styles.text}>
                Quantidade Comprada:
            </Text>
            <TextInput style={styles.input} placeholder='Kg/Carretel' keyboardType='numeric'/>
        </View>
        </View>

        <View style={{flexDirection:'row'}}>
        <View style={styles.form}>
            <Text style={styles.text}>
                Taxa de Erros:
            </Text>
            <TextInput style={styles.input} placeholder='%' keyboardType='numeric'/>
            <Text style={styles.text}>
                Fixação de Peças:
            </Text>
            <TextInput style={styles.input} placeholder='R$/Impressão' keyboardType='numeric'/>
        </View>
        <View style={styles.form}>
        <Text style={styles.text}>
                Lucro:
            </Text>
            <TextInput style={styles.input} placeholder='%' keyboardType='numeric'/>
            <Text style={styles.text}>
                Depreciação:
            </Text>
            <TextInput style={styles.input} placeholder='%' keyboardType='numeric'/>
        </View>
    </View>
    <TouchableOpacity style={styles.Save}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>
            Salvar Dados
        </Text>
    </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dddd',
      alignItems: 'center',
      justifyContent:'center',
     },
     title:{
        fontSize:40,
        padding:20,
        fontWeight:'500',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius:5
     },
     text:{
        fontSize:18,
        fontWeight:'bold',
        paddingBottom:5,
        paddingTop:5,
     },
     input: {
      height:40,
      width:180,
      backgroundColor:'white'
     },
     form:{
      backgroundColor:'#aaaa',
      borderColor:'black',
      borderRadius:10,
      borderWidth:1,
      borderColor:'grey',
      margin:5,
      padding:10
     },
     Save:{
        height:80,
        width:200,
        margin:60,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
     }
  });