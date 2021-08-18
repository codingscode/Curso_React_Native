
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'


export default function App() {
  const [metaDigitada, setMetaDigitada] = useState('')
  const [metasCurso, setMetasCurso] = useState([])

  const gerenMetaDigitada = (textoentrada) => {
     setMetaDigitada(textoentrada)
  }

  const adicionargerenMeta = () => {
    console.log(metaDigitada)
    setMetasCurso([...metasCurso, metaDigitada])
  }


  return (
    <ScrollView>
      <View style={estilos.tela} >
        <View style={estilos.entradaContainer} >
          <TextInput placeholder="Meta de curso" style={estilos.entrada} onChangeText={gerenMetaDigitada} value={metaDigitada} />
          <Button title="adicione" onPress={adicionargerenMeta} />
        </View>
        <Text>outro texto!</Text>
        <ScrollView>
          {metasCurso.map((cada, indice) => (
              <View style={estilos.itemLista} >
                  <Text key={indice} >{cada}</Text>
              </View>) )}
        </ScrollView>
        
      </View>

    </ScrollView>
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
   },
   itemLista: {
      padding: 10, marginVertical: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1
   }
})
