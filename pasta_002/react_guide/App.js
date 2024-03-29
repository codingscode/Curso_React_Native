
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native'

import ItemMeta from './components/ItemMeta'


export default function App() {
  const [metaDigitada, setMetaDigitada] = useState('')
  const [metasCurso, setMetasCurso] = useState([])

  const gerenMetaDigitada = (textoentrada) => {
     setMetaDigitada(textoentrada)
  }

  const adicionargerenMeta = () => {
    console.log(metaDigitada)
    setMetasCurso([...metasCurso, {chave: Math.random().toString(), valor: metaDigitada}])
  }


  return (
     <View style={estilos.tela} >
       <View style={estilos.entradaContainer} >
         <TextInput placeholder="Meta de curso" style={estilos.entrada} onChangeText={gerenMetaDigitada} value={metaDigitada} />
         <Button title="adicione" onPress={adicionargerenMeta} />
       </View>
       <Text>outro texto!</Text>
       <FlatList keyExtractor={(cada, i) => cada.chave} data={metasCurso} renderItem={cada => (
          <ItemMeta titulo={cada.item.valor} />      
             )}  />
              
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
