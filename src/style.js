import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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

  