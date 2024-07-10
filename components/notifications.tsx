import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';

const Notifications = () => {
  return (
    <View >
      <TouchableOpacity style={styles.list} >
        <View style={styles.logo}><FontAwesome6 name="x-twitter" size={24} color="black" /></View>
        <View>
            <Image style={styles.image} source={{uri:'https://i.pinimg.com/564x/1e/2e/4d/1e2e4dea06d92f66f654c6d0c61472e5.jpg'}} />
            <Text style={styles.bold_black} >Lion Man</Text>
            <Text style={styles.gray_normal} >I am coming to save the world. I am always there to save the world.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.list}>
        <View style={styles.logo}><FontAwesome6 name="x-twitter" size={24} color="black" /></View>
        <View >
            <Image style={styles.image} source={{uri:'https://i.pinimg.com/564x/78/f1/f4/78f1f46c4834ea28f35e8d7ba4c8443c.jpg'}} />
            <Text style={styles.bold_black} >Tiger Man</Text>
            <Text style={styles.gray_normal} >I am coming to save the world. I am always there to save the world.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.list}>
        <View style={styles.logo} ><FontAwesome6 name="x-twitter" size={24} color="black" /></View>
        <View>
            <Image style={styles.image} source={{uri:'https://i.pinimg.com/564x/ad/96/1d/ad961dc3d69e7163eaf7d8d60f1b5e13.jpg'}} />
            <Text style={styles.bold_black} >Elephant Man</Text>
            <Text style={styles.gray_normal} >I am coming to save the world. I am always there to save the world.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.list}>
        <View style={styles.logo}><FontAwesome6 name="x-twitter" size={24} color="black" /></View>
        <View>
            <Image style={styles.image} source={{uri:'https://i.pinimg.com/736x/cd/0f/6f/cd0f6fa01806f3b893535d47a574cb6d.jpg'}} />
            <Text style={styles.bold_black} >Panda Man</Text>
            <Text style={styles.gray_normal} >I am coming to save the world. I am always there to save the world.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.list}>
        <View style={styles.logo}><FontAwesome6 name="x-twitter" size={24} color="black" /></View>
        <View>
            <Image style={styles.image} source={{uri:'https://i.pinimg.com/564x/02/2a/9f/022a9f19965c26c641080307b187450f.jpg'}} />
            <Text style={styles.bold_black} >Dog Man</Text>
            <Text style={styles.gray_normal} >I am coming to save the world. I am always there to save the world.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.list}>
        <View style={styles.logo}><FontAwesome6 name="x-twitter" size={24} color="black" /></View>
        <View >
            <Image style={styles.image} source={{uri:'https://i.pinimg.com/564x/78/f1/f4/78f1f46c4834ea28f35e8d7ba4c8443c.jpg'}} />
            <Text style={styles.bold_black} >Tiger Man</Text>
            <Text style={styles.gray_normal} >I am coming to save the world. I am always there to save the world.</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    logo:{
        width:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height:40,
        width:40,
        borderRadius:25,
    },
    bold_black:{
        fontSize:18,
        fontWeight:'bold',
    },
    gray_normal:{
        
        fontSize:16,
        fontWeight:'normal',
        color:'gray'
    },
    list:{
        display:'flex',
        flexDirection:'row',
        padding:8,
        paddingRight:70,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
        backgroundColor:'white'
    },
})