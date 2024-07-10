import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from "react";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Blue from '../app/index';
import Communities from '../app/Communities';
import Search from '../app/Search';
import Notification from '../app/Notification';
import Message from '../app/Message';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';




const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => <Feather name="home" size={24} color="black" />,
    Search: (props) => <AntDesign name="search1" size={24} color="black"  />,
    Communities: (props) => <FontAwesome6 name="square-x-twitter" size={30} color="black"  /> ,
    Notification: (props) => <Ionicons name="notifications-outline" size={26} color="black" />,
    Message: (props) => <AntDesign name="mail" size={24} color="black" />,
  };

  return (
    <View style={styles.navbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touchable}
          >
            {
              icons[route.name]
                ? icons[route.name]({ color: isFocused ? '#1A9AFB' : 'black' })
                : null
            }
            <Text style={{ color: isFocused ? '#ffffff' : '#ffffff' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 20,
    paddingVertical: 10,
    color: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: 'white'
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    textAlign: 'center',
    alignContent: 'center',
  }
});

export default TabBar;
