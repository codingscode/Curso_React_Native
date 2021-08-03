
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'


export default function App() {
  return (
    <View style={{ padding: 20} } >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <TextInput placeholder="Meta de curso" style={{width: '50%', borderBottomColor: 'black', borderWidth: 1, padding: 14}} />
        <Button title="adicione" />
      </View>
      <Text>outro texto!</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
})
