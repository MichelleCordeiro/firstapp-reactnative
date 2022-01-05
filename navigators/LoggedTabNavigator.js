import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import HomeStackNavigator from './HomeStackNavigator'

const Tab = createBottomTabNavigator()

export default function LoggedTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          title: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
