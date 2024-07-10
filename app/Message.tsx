import { StyleSheet, Text, View,Image,TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';


const Message = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}} >
         <View style={styles.search} >
                <TextInput
                    style={styles.search_bar}
                    placeholder='Search Cat'
                    placeholderTextColor={'gray'}
                />
                <TouchableOpacity><Feather style={styles.setting} name="settings" size={24} color="black" /></TouchableOpacity>
            </View>
      <TouchableOpacity style={styles.list} >
        <View style={styles.profile} >
            <Image style={styles.profile_img} source={{uri:'https://i.pinimg.com/564x/a7/af/b7/a7afb78da0f93d386bad00e4fc575aa1.jpg'}} />
        </View>
        <View style={styles.name} >
            <View style={styles.heading} >
                <Text style={styles.bold} >Cat_Man   </Text>
                <Text style={styles.gray_bold} >@catman .10 Jul 24</Text>
            </View>
            <Text style={styles.message_text} >World needs Cat Man 🔥</Text>
        </View>
      </TouchableOpacity>
          <TouchableOpacity style={styles.list} >
        <View style={styles.profile} >
            <Image style={styles.profile_img} source={{uri:'https://i.pinimg.com/564x/64/2d/cd/642dcda3a4c5c5cfc619fc0c172e2803.jpg'}} />
        </View>
        <View style={styles.name} >
            <View style={styles.heading} >
                <Text style={styles.bold} >Cat_Don   </Text>
                <Text style={styles.gray_bold} >@catdon .9 Jul 24</Text>
            </View>
            <Text style={styles.message_text} >World needs Cat Don 🔥</Text>
        </View>
      </TouchableOpacity>
          <TouchableOpacity style={styles.list} >
        <View style={styles.profile} >
            <Image style={styles.profile_img} source={{uri:'https://i.pinimg.com/736x/d8/76/d2/d876d25822c92df389c003192a2a8aeb.jpg'}} />
        </View>
        <View style={styles.name} >
            <View style={styles.heading} >
                <Text style={styles.bold} >Cat_Detective   </Text>
                <Text style={styles.gray_bold} >@catdetective .8 Jul 24</Text>
            </View>
            <Text style={styles.message_text} >World needs Cat Detective 🔥</Text>
        </View>
      </TouchableOpacity>
          <TouchableOpacity style={styles.list} >
        <View style={styles.profile} >
            <Image style={styles.profile_img} source={{uri:'https://i.pinimg.com/564x/b2/3e/a6/b23ea64f7d1251063c7d848586f0135c.jpg'}} />
        </View>
        <View style={styles.name} >
            <View style={styles.heading} >
                <Text style={styles.bold} >Cat_Fighter   </Text>
                <Text style={styles.gray_bold} >@catfighter .7 Jul 24</Text>
            </View>
            <Text style={styles.message_text} >World needs Cat Fighter 🔥</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Message

const styles = StyleSheet.create({
    search:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
        borderBottomColor:"#ededed",
        borderBottomWidth:2,
    },
    search_bar:{
        width:'92%',
        backgroundColor:'#edededed',
        padding:5,
        paddingLeft:10,
        borderRadius:20,
    },
    setting:{},
    list:{
        display:'flex',
        flexDirection:'row',
        padding:15,
        alignItems:'center',
    },
    profile:{
        marginRight:10,

    },
    profile_img:{
        height:40,
        width:40,
        borderRadius:20,
    },
    name:{},
    heading:{
        display:'flex',
        flexDirection:'row'
    },
    bold:{
        fontSize:16,
        fontWeight:'bold',
    },
    gray_bold:{
        fontSize:16,
        fontWeight:'normal',
        color:'gray'
    },
    message_text:{},
})