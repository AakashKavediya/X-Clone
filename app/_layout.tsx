import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {Tabs} from 'expo-router'
// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import TabBar from '../components/TabBar'
const _layout = () => {
  return (
      <Tabs
        tabBar={props => <TabBar {...props} />}
      >
        <Tabs.Screen 
        name='index'
        options={{title:'Home'}}
        />
        <Tabs.Screen 
        name='Search'
        options={{title:'Search'}}
        />
        <Tabs.Screen 
        name='Communities'
        options={{title:'Grox'}}
        />
        <Tabs.Screen 
        name='Notification'
        options={{title:'Notification'}}
        />
        <Tabs.Screen 
        name='Message'
        options={{title:'Message'}}
        />
      </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})