import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  async function logar() {
    const json = {
      // user: user,
      user, // forma simplificada
      password
    }

    const headerOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json) //Recebe em formato json, mas converte p str
    }
    const response = await fetch('https://mobile.ect.ufrn.br:3000/login', headerOptions)
    // Qdo a resposta é 200 significa q a solicitação foi atendida c sucesso
    // Se status for 401 não foi possivel logar
    if (response.status === 200) {
      const token = await response.text()
      await AsyncStorage.setItem('token', token)
      navigation.navigate('LoggedTabNavigator')
      //console.log('TOKEN: ' + token)
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário..."
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha..."
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => logar()}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  loginContainer: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    margin: 20,
    padding: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 10
  },
  sendButton: {
    padding: 10,
    width: 120,
    backgroundColor: 'gray',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center'
  }
})
