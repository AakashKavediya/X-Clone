import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Communities = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}} >
      <View style={styles.header} >
        <FontAwesome6 name="square-x-twitter" size={24} color="black" />
        <Text style={styles.grox} >Grox</Text>
      </View>
      <View style={styles.absolute} >
        <Text style={styles.bold} >Grok Something</Text>
        <Text style={styles.gray} >Premium subscribers can now use our most advanced AI, Grok on X</Text>
        <View style={styles.button} >
            <Text style={styles.touch} >Subscribe now</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Communities

const styles = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    grox:{
        fontSize:25,
        fontWeight:'bold',
        padding:5,
    },
    absolute:{ 
        position:'relative',
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white', 
        marginTop:470, 
        padding:20,
    },
    bold:{
        fontSize:35,
        fontWeight:'bold',
    },
    gray:{
        fontSize:16,
        fontWeight:'normal',
        color:'gray',
        textAlign:'center',
        marginHorizontal: 20,
    },
    touch:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        backgroundColor:'black',
        padding:10,
        borderRadius:20,
        textAlign:'center',
        width:'100%',
    },
    button:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        paddingHorizontal: 20,
    },
})
