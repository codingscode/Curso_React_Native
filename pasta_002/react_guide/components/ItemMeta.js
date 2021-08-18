import React from 'react'
import { View, Text, StyleSheet } from 'react-native'




const ItemMeta = props => {
    return (
        <View style={estilos.itemLista}>
       <Text>{props.titulo}</Text>
    </View>
   )
}

export default ItemMeta

const estilos = StyleSheet.create({
    itemLista: {
        padding: 10, marginVertical: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1
    }
})

