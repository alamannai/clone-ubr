import { StyleSheet, Image, View, SafeAreaView  } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'


const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', marginTop:20}}>
        <View style={{padding: 20}}>
            <Image 
              style={{width :100 , height: 100, resizeMode: 'contain'}} 
              source={{uri : 'https://links.papareact.com/gzs'}} 
            />
            <NavOptions />
        </View>
    </SafeAreaView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({

})