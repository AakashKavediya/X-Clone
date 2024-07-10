import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tweet3 = () => {
  return (
    <View style={styles.container} >
      <View style={styles.profile_pic} >
        <Image
            style={styles.profile_image}
            source={{ uri: 'https://i.pinimg.com/564x/e1/b9/79/e1b97971bd770748e6dde0e8896b8cfe.jpg' }}
        />
      </View>
      <View style={styles.content} >
        <View style={styles.title} >
            <Text style={styles.bold}>Cat Chef 😽😽</Text>
            <Text style={styles.lightgray}>@Cat_Chef .45m </Text>
        </View>
        <View style={styles.message} >
            <Text style={styles.tweet} >Whiskered up a culinary masterpiece today! 🍲🐱 Proud of my chef skills at just 5 years old. Life as a 5-year-old cat is purrfect!</Text>
            <Text style={styles.hashtag}>#CatChef #GourmetPaws #5YearOld </Text>
        </View>
        <View style={styles.post} >
            <Image style={styles.post_img}  source={{uri:'https://i.pinimg.com/564x/df/4f/74/df4f74689663f1c0b328fb266ed82cb3.jpg'}} />
        </View>
        <View style={styles.icons} >
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="comment" size={24} color="black" />155</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="retweet" size={24} color="black" />95</Text></TouchableOpacity> 
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="heart" size={24} color="black" />92</Text></TouchableOpacity> 
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="share-apple" size={24} color="black" />195</Text></TouchableOpacity> 
        </View>

      </View>
    </View>
  )
}

export default Tweet3

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
    post:{},
    post_img:{
        height:300,
        width:'95%',
        borderRadius:15,
        borderWidth:2,
        borderColor:'#ededed',
        marginTop:5,
    },
})