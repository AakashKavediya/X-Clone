import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import Notifications from '../components/notifications'

const Notification = () => {
  return (
    <View>
      <View style={styles.horizontal_scroll} >
        <TouchableOpacity>
            <Text style={styles.nav_text} >All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.nav_text} >Verified</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.nav_text} >Mentions</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Notifications />
      </ScrollView>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    horizontal_scroll:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent:'space-around',
        backgroundColor:'white',
    },
    nav_text:{
        color:'gray',
        fontSize:18,
        fontWeight:'bold',
    },
})