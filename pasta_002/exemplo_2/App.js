import React from 'react'
import { Text, View } from 'react-native'


export default function App() {
  return (
    <View style={{ padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-around', alignItems: 'center' }}>
      <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
         <Text>1</Text>
      </View>
      <View style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
         <Text>2</Text>
      </View>
      <View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
         <Text>3</Text>
      </View>
    </View>
  )
}
