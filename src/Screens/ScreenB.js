import React from 'react';
import {Pressable,Text,View,StyleSheet} from 'react-native';

export default function ScreenB({navigation, route}){

    const {ItemName, ItemId} = route.params; 

    const onPressHandler = () =>{
        navigation.navigate('Screen_A');
        // navigation.setParams({ItemId: 14})
  }
   
    return (
      <View style={styles.body}>
        <Text style={styles.text}>
          Screen B
        </Text>
        <Pressable
         onPress={onPressHandler}
         style={({pressed})=>({backgroundColor: pressed ? '#ddd' : '#0f0'})}
        >
        <Text style={styles.text}>
          Go To Screen A
        </Text>
        </Pressable>

        <Text style={styles.text}>
          {ItemName}
        </Text>
        <Text style={styles.text}>
          Id : {ItemId}
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });