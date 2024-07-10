import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, StatusBar, SafeAreaView, TouchableOpacity, InputAccessoryView, TextInput } from 'react-native';
import Cards from '../components/feedCards';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';
import 'react-native-gesture-handler';
// import {Tabs} from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Tweet1 from '../components/tweet1';
import Tweet2 from '../components/tweet2';
import Tweet3 from '../components/tweet3';
import Tweet4 from '../components/tweet4';
import Tweet5 from '../components/tweet5';

const Blue = () => {
  return (
      <SafeAreaView style={styles.container} >
        <ScrollView>
        <Tweet1 />
        <Tweet2 />
        <Tweet3 />
        <Tweet4 />
        <Tweet5 />
         <Tweet1 />
        <Tweet2 />
        <Tweet3 />
        <Tweet4 />
        <Tweet5 />
         <Tweet1 />
         <Tweet1 />
        <Tweet2 />
        <Tweet3 />
        <Tweet4 />
        <Tweet5 />        
        </ScrollView>
      </SafeAreaView>
  )
}

export default Blue

const styles = StyleSheet.create({
    container:{
    // paddingTop:20,
  },
  
})

