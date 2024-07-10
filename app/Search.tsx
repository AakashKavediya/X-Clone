import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Trending from '../components/trending';

const Search = () => {
  return (
    <ScrollView >
        <View style={styles.container} >
            <View style={styles.search} >
                <TextInput
                    style={styles.search_bar}
                    placeholder='Search Cat'
                    placeholderTextColor={'gray'}
                />
                <TouchableOpacity><Feather style={styles.setting} name="settings" size={24} color="black" /></TouchableOpacity>
            </View>
            <ScrollView horizontal={true} scrollEnabled={true} style={styles.topics} >
                <TouchableOpacity>
                    <Text style={styles.topic} >For you</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.topic} >Cat hub</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.topic} >Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.topic} >News</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.topic} >Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.topic} >Entertainment</Text>
                </TouchableOpacity>
            </ScrollView>
            <ScrollView style={styles.content} >
                <View style={styles.content_poster} >
                    <Image style={styles.poster} source={{uri:'https://i.pinimg.com/564x/b1/7e/cb/b17ecbdb13cf6e79ffb1fbb64550c04b.jpg'}} />
                </View>
                <View style={styles.trending} >
                    <Text style={styles.heading} >Trending for you</Text>
                    <Trending />
                </View>
            </ScrollView>
        </View>
    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF'
    },
    search:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
    },
    search_bar:{
        width:'92%',
        backgroundColor:'#edededed',
        padding:5,
        paddingLeft:10,
        borderRadius:20,
    },
    setting:{},
    topics:{
        display:'flex',
        flexDirection:'row',
        padding:5,
    },
    topic:{
        color:'gray',
        fontSize:15,
        fontWeight:'bold',
        padding:10,
        marginRight:10,
    },
    content:{},
    content_poster:{},
    poster:{
        height:200,
    },
    trending:{
        padding:20,
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
    },
})