import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import PictureScreen from '../screens/PictureScreen'
import ChatListScreen from '../screens/ChatListScreen'
import ChatScreen from '../screens/ChatScreen'

const Stack = createStackNavigator()

export default function PicturesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PictureScreen"
        component={PictureScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
