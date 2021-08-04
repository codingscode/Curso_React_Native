
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'


export default function App() {
  return (
    <View style={estilos.tela} >
      <View style={estilos.entradaContainer} >
        <TextInput placeholder="Meta de curso" style={estilos.entrada} />
        <Button title="adicione" />
      </View>
      <Text>outro texto!</Text>
      
    </View>
  )
}

const estilos = StyleSheet.create({
  tela: {
     padding: 50
  },
  entradaContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  entrada: {
    width: '50%', borderBottomColor: 'black', borderWidth: 1, padding: 14
  }
})
