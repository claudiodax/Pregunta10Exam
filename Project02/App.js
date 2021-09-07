import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Image,TextInput, FlatList} from 'react-native';
import ConexionFetch from './App/components/conexionFetch/ConexionFetch';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      textResult: '',
      count: 0,
    }
  }

  render(){
    return <ConexionFetch/> ;
  }
}

const styles = StyleSheet.create({
  imagen:{
    width:78,
    height:60,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:8
},
  lista:{
    borderRadius:15,
  },
  contendorLista:{
    flex:1,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'flex-start',
    margin:15,
  },
  itemLista:{
    marginLeft:10,
    fontSize:15,
  },
  title: {
    color: 'white',
    fontSize:40,
    justifyContent: 'center',
    alignItems:'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:10,
    marginTop:10,
  },
  text:{
    alignItems:'center',
    justifyContent: 'center',
    padding: 15,
  },
  button:{
    top: 10,
    alignItems:'center',
    backgroundColor:'#bb3535',
    padding:10,
  },
  countContainer :{
    alignItems:'center',
    padding:10,
  },
  countText:{
    color:'#FF00FF',
  }
});