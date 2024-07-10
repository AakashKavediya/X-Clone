import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tweet5 = () => {
  return (
    <View style={styles.container} >
      <View style={styles.profile_pic} >
        <Image
            style={styles.profile_image}
            source={{ uri: 'https://i.pinimg.com/564x/1e/2e/4d/1e2e4dea06d92f66f654c6d0c61472e5.jpg' }}
        />
      </View>
      <View style={styles.content} >
        <View style={styles.title} >
            <Text style={styles.bold}>Big Cat Lion </Text>
            <Text style={styles.lightgray}>@Cat_lion .5h </Text>
        </View>
        <View style={styles.message} >
            <Text style={styles.tweet} >From house cat to king of the jungle, the journey is wild! 🦁 Embrace your inner roar and rule your domain.</Text>
            <Text style={styles.hashtag}>#FutureLion #BigCatDreams</Text>
        </View>
        <View style={styles.icons} >
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="comment" size={24} color="black" />169</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="retweet" size={24} color="black" />155</Text></TouchableOpacity> 
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="heart" size={24} color="black" />19</Text></TouchableOpacity> 
            <TouchableOpacity><Text style={styles.icon} ><EvilIcons name="share-apple" size={24} color="black" />145</Text></TouchableOpacity> 
        </View>

      </View>
    </View>
  )
}

export default Tweet5

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