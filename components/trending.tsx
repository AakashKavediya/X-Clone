import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const Trending = () => {
  return (
    <View>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >#Cat_Man</Text>
        <Text style={styles.lightgray}>10.5k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >Cat Man</Text>
        <Text style={styles.lightgray}>10.5k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >#Catnip</Text>
        <Text style={styles.lightgray}>10.2k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in China</Text>
        <Text style={styles.black} >#Zoomies</Text>
        <Text style={styles.lightgray}>9.7k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >#Purrfect</Text>
        <Text style={styles.lightgray}>8.5k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in France</Text>
        <Text style={styles.black} >#Catitude</Text>
        <Text style={styles.lightgray}>8.2k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >#Meowment</Text>
        <Text style={styles.lightgray}>7.8k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >#Paw-some</Text>
        <Text style={styles.lightgray}>6.5k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >Cat Man</Text>
        <Text style={styles.lightgray}>10.5k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in London</Text>
        <Text style={styles.black} >#Fur-tastic</Text>
        <Text style={styles.lightgray}>6.4k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in America</Text>
        <Text style={styles.black} >#Whisker-tastic</Text>
        <Text style={styles.lightgray}>5.5k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in France</Text>
        <Text style={styles.black} >#Cat-meme</Text>
        <Text style={styles.lightgray}>4.5k posts</Text>
      </View>
      <View style={styles.right} >
        <TouchableOpacity><Entypo style={styles.dots} name="dots-three-vertical" size={24} color="black" /></TouchableOpacity>
      </View>
      </TouchableOpacity>
        <TouchableOpacity style={styles.list} >
      <View style={styles.left} >
        <Text style={styles.gray} >Trending in India</Text>
        <Text style={styles.black} >#Cat-lovers</Text>
        <Text style={styles.lightgray}>3.5k posts</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Trending

const styles = StyleSheet.create({
    list:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        marginTop:20,
    },
    left:{
        width:'95%'
    },
    right:{},
    gray:{
        color:'#474747',
        fontSize:14,
        fontWeight:'bold',
        padding:2,
    },
    black:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        padding:2,
    },
    lightgray:{
        color:'darkgray',
        fontSize:13,
        fontWeight:'bold',
        padding:2,
    },
    dots:{
        fontSize:13,
    },
})