import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Touchable
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react/cjs/react.development'

export default function ChatScreen({ route }) {
  const { id } = route.params
  const [chat, setChat] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist/' + id)
      const chat = await response.json()
      //console.log(chat)
      setChat(chat)
    }
    getData()
  }, [])

  function renderItem({ item }) {
    return (
      <View style={item.autor ? styles.mensagemAutor : styles.mensagem}>
        <Text>{item.texto}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.chatContainer}>
        <FlatList
          data={chat.mensagens}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity style={styles.sendButton}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chatContainer: {
    flex: 1,
    margin: 5
  },
  inputContainer: {
    flexDirection: 'row',
    height: 50,
    padding: 5
  },
  mensagem: {
    height: 30,
    backgroundColor: 'darkgrey',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 5,
    alignSelf: 'flex-start'
  },
  mensagemAutor: {
    height: 30,
    backgroundColor: 'mediumpurple',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 5,
    alignSelf: 'flex-end'
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'slategray',
    borderRadius: 5,
    padding: 5
  },
  sendButton: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
