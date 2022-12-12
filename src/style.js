import {StyleSheet} from 'react-native';

export const styleData = StyleSheet.create({
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

  export const styleHome = StyleSheet.create({
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
     borderRadius:30
    }
 });

  