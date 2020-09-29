import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
    const [saidaDeTexto, setSaidaDeTexto] = useState('Testando React Native!')

    return (
      <View style={styles.container}>
        <Text>{saidaDeTexto}</Text>
        <Button title="Alterar Texto" onPress={() => setSaidaDeTexto('O texto foi alterado!')} />
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
