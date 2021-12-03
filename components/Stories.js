import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, View, FlatList } from 'react-native'

export default function Stories() {
  const [stories, setStories] = useState([]) //HOOK

  // useEffect({} => {})   ARROW FUNCTION
  // O 2º argumento é chamado de VETOR DE DEPENDÊNCIA
  useEffect(function () {
    async function getData() {
      // ASYNC p validar o AWAIT
      // AWAIT  para a aplicação p esperar o retorno do servidor
      const response = await fetch('https://mobile.ect.ufrn.br:3000/stories')
      const storiesServidor = await response.json()
      //console.log(storiesServidor)
      setStories(storiesServidor)
    }
    getData()
  }, [])

  function renderItem({ item }) {
    return (
      <View style={styles.story}>
        <Image style={styles.imgstory} source={{ uri: item.imgPerfilUri }} />
        <Text>{item.nomeUsuario}</Text>
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
