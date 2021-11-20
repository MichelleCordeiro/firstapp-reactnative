import React from 'react'
import { StyleSheet, Text, Image, View, FlatList } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Feed() {
  const feed = [
    {
      id: 1,
      nome: 'Piu Piu',
      imgPerfil: require('../assets/images/piupiu.jpg'),
      img: require('../assets/images/tinytoons.jpg'),
      aspectRatio: 1.777
    },
    {
      id: 2,
      nome: 'Pernalonga',
      imgPerfil: require('../assets/images/pernalonga.png'),
      img: require('../assets/images/tinytoons3.jpg'),
      aspectRatio: 1.595
    },
    {
      id: 3,
      nome: 'Taz',
      imgPerfil: require('../assets/images/taz.jpg'),
      img: require('../assets/images/tinytoons2.jpg'),
      aspectRatio: 0.712
    },
    {
      id: 4,
      nome: 'Felicia',
      imgPerfil: require('../assets/images/felicia.png'),
      img: require('../assets/images/tinytoons.jpg'),
      aspectRatio: 1.777 /* aspectRatio={altura/largura}   1280/720=1,7777  CSS height: undefined*/
    }
  ]

  function renderItem({ item }) {
    return (
      <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image style={styles.postheaderimg} source={item.imgPerfil} />
            <Text>{item.nome}</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={16} color="black" />
        </View>
        {/* aspectRatio={altura/largura}   1280/720=1,7777  CSS height: undefined*/}
        <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img} />
        <View style={styles.footer}>
          <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
          <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.feed}>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: 'red'
  },
  post: {
    backgroundColor: '#fff'
  },
  postheader: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5
  },
  postheaderesquerda: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 5
  },
  postimg: {
    width: '100%',
    height: undefined
  },
  footer: {
    height: 60,
    backgroundColor: '#eee',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  footericon: {
    margin: 5
  }
})
