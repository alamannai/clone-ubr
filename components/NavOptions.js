import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";


const data = [
    {
        id: '123',
        title: 'Get a Ride',
        image:'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image:'https://links.papareact.com/28w',
        screen: 'EatScreen'
    }
]

export default function NavOptions() {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.btnOption}>
                <View>
                    <Image 
                    style={styles.imageElt} 
                    source={{uri : item.image}} 
                    />
                    <Text style={{paddingTop:8, fontWeight: 'bold'}}>{item.title}</Text>
                    <Icon  
                        style={{width:40, padding:8, marginTop:16, backgroundColor: '#000',  borderRadius:24}} 
                        name='arrowright'
                        type='antdesign'
                        color='white' />
                </View>
            </TouchableOpacity>
        )}

       />
    </View>
  )
}

const styles = StyleSheet.create({
    btnOption:{
        padding: 8, 
        paddingLeft: 16, 
        paddingTop:12, 
        paddingBottom:24, 
        backgroundColor:'#D0D0E0',
        width: 130,
        margin:8
    },
    imageElt:{
        width :120, 
        height: 120, 
        resizeMode: 'contain'
    }
});