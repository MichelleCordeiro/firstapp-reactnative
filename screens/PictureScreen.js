import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

export default function PictureScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Picture Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  }
})
