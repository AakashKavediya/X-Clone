import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tweet1 = () => {
  return (
    <View style={styles.container} >
      <View style={styles.profile_pic} >
        <Image
            style={styles.profile_image}
            source={{ uri: 'https://i.pinimg.com/736x/ab/f4/80/abf480f3c5906e9cb8406ad9365a5417.jpg' }}
        />
      </View>
      <View style={styles.content} >
        <View style={styles.title} >
            <Text style={styles.bold}>Karate Cat 😽</Text>
            <Text style={styles.lightgray}>@Cat_Man .5m </Text>
        </View>
        <View style={styles.message} >
            <Text style={styles.tweet} >Just took down a human in the dojo! 🐱🥋 Victory tastes as sweet as a bowl of cream. Another victory for the Karate Cat! 🐱🥋 Humans, beware.</Text>
            <Text style={styles.hashtag}>#KarateCat #Champion #Undefeated</Text>
        </View>
        <View style={styles.icons} >
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="comment" size={24} color="black" />69</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="retweet" size={24} color="black" />55</Text></TouchableOpacity> 
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="heart" size={24} color="black" />199</Text></TouchableOpacity> 
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="share-apple" size={24} color="black" />45</Text></TouchableOpacity> 
        </View>

      </View>
    </View>
  )
}

export default Tweet1

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        paddingBottom:0,
        paddingRight:40,
        backgroundColor:'#FFFFFF',
        borderBottomWidth:2,
        borderBottomColor:'#ededed',

    },
    profile_pic:{},
    profile_image:{
        width: 45,  
        height: 45, 
        borderRadius: 25,
    },
    content:{
        padding:8,
    },
    bold:{
        fontSize:18,
        fontWeight:'bold',
    },
    lightgray:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray'
    },
    tweet:{
        fontSize:17,
    },
    hashtag:{
        fontSize:17,
        fontWeight:'bold',
        color:'#007EFC'
    },
    title:{
        display:'flex',
        flexDirection:'row',
    },
    message:{},
    icons:{
        // flex:1,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:10,
    },
    icon:{display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        fontSize:18,
        color:'gray'
    },
})