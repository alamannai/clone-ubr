import { StyleSheet, Image, View, ScrollView, SafeAreaView  } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', marginTop:20, height: '100%'}}>
        <View style={{padding: 20}}>
            <Image 
              style={{width :100 , height: 100, resizeMode: 'contain'}} 
              source={{uri : 'https://links.papareact.com/gzs'}} 
            />
            <ScrollView  
            horizontal={true}
          >

            <GooglePlacesAutocomplete
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}

              placeholder="Enter Location"
              style={{
                container:{
                  flex: 0,
                },
                textInput:{
                  fontSize: 24,
                }
              }}
              query={{
                key:GOOGLE_MAPS_KEY,
                language:'en'
              }}

            />

            </ScrollView>
            <NavOptions />
        </View>
    </SafeAreaView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({

})