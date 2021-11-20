import React from 'react'
import { StyleSheet, Text, Image, View, FlatList } from 'react-native'

export default function Stories() {
  const stories = [
    {
      id: 1,
      nome: 'Pernalonga',
      src: require('../assets/images/pernalonga.png')
    },
    {
      id: 2,
      nome: 'Taz',
      src: require('../assets/images/taz.jpg')
    },
    {
      id: 3,
      nome: 'Frajola',
      src: require('../assets/images/frajola.jpg')
    },
    {
      id: 4,
      nome: 'Patolino',
      src: require('../assets/images/patolino.jpg')
    },
    {
      id: 5,
      nome: 'Piupiu',
      src: require('../assets/images/piupiu.jpg')
    },
    {
      id: 6,
      nome: 'Felicia',
      src: require('../assets/images/felicia.png')
    }
  ]

  function renderItem({ item }) {
    return (
      <View style={styles.story}>
        <Image style={styles.imgstory} source={item.src} />
        <Text>{item.nome}</Text>
      </View>
    )
  }

  // function renderItem(obj) {
  //   obj.item
  // }

  return (
    <View style={styles.stories}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
