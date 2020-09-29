import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testando React Native!</Text>
      <Button title="Alterar Texto"/>
      <StatusBar style="auto" />
    </View>
  )
}

// análogo a CSS
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})
