import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

export default function Stories() {
  return (
    <View style={styles.stories}>
      <View style={styles.story}>
        <Image
          style={styles.imgstory}
          source={require('../assets/images/pernalonga.png')}
        />
        <Text>Perna</Text>
      </View>
      <View style={styles.story}>
        <Image
          style={styles.imgstory}
          source={require('../assets/images/taz.jpg')}
        />
        <Text>Taz</Text>
      </View>
      <View style={styles.story}>
        <Image
          style={styles.imgstory}
          source={require('../assets/images/frajola.jpg')}
        />
        <Text>Frajola</Text>
      </View>
      <View style={styles.story}>
        <Image
          style={styles.imgstory}
          source={require('../assets/images/patolino.jpg')}
        />
        <Text>Patolino</Text>
      </View>
      <View style={styles.story}>
        <Image
          style={styles.imgstory}
          source={require('../assets/images/piupiu.jpg')}
        />
        <Text>Piupiu</Text>
      </View>
      <View style={styles.story}>
        <Image
          style={styles.imgstory}
          source={require('../assets/images/pernalonga.png')}
        />
        <Text>Perna</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stories: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#fff'
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    alignItems: 'center'
  },
  imgstory: {
    height: 70,
    width: 70,
    borderRadius: 35
  }
})
