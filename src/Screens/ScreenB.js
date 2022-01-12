import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function ScreenB() {

  const [newEmail, setNewEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  

  const getall= () =>{

  }


  return (
    <View>
    <View style={styles.border}>
      <Text style={styles.text}>App Name</Text>
      <View style={styles.hoja}>
        <TextInput
      style={styles.input}
      placeholder='E-mail'
      onChangeText={(value)=> setNewEmail(value)}
      >
      </TextInput>
      <FontAwesome5
        name={'envelope'}
        size={25}
        color={"#000000"}
       />
       </View>
       <View style={styles.hoja}>
      <TextInput
       style={styles.input}
       placeholder='First Name'
       onChangeText={(value)=> setLastName(value)}>
      </TextInput>
      <FontAwesome5
        name={'envelope-open-text'}
        size={25}
        color={"#000000"}
        />
      </View>
      <View style={styles.hoja}>
      <TextInput
       style={styles.input}
       placeholder='Last Name'
       onChangeText={(value)=> setFirstName(value)}>
      </TextInput>
      <FontAwesome5
        name={'male'}
        size={25}
       color={"#000000"}
       />
      </View>
      <View style={styles.hoja}>
      <TextInput
       style={styles.input}
       placeholder='Password'
       onChangeText={(value)=> setPassword(value)}>
     
      </TextInput>
      <FontAwesome5
        name={'lock'}
        size={25}
        color={"#000000"}
       />
      </View>
      <View style={styles.hoja}>
      <TextInput
       style={styles.input}
       placeholder='Confirm Password'>
     
      </TextInput>
      <FontAwesome5
        name={'lock-open'}
        size={25}
        color={"#000000"}
       />
      </View>
      <Button
        title="Register"
        onPress={() => getall()}
      />
    </View>

    <Text>{newEmail}</Text>
    <Text>{firstName}</Text>
    <Text>{lastName}</Text>
    <Text>{password}</Text>
    
<View style={styles.fixToText}>
        <Button
          title="FACEBOOK"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="TWITTER"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 4,
  },
  hoja: {
    flexDirection: 'row',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  border:{
    marginBottom: 70
  }
})

// import React from 'react';
// import {Pressable,Text,View,StyleSheet} from 'react-native';

// export default function ScreenB({navigation, route}){

//     const {ItemName, ItemId} = route.params; 

//     const onPressHandler = () =>{
//         navigation.navigate('Screen_A');
//         // navigation.setParams({ItemId: 14})
//   }
   
//     return (
//       <View style={styles.body}>
//         <Text style={styles.text}>
//           Screen B
//         </Text>
//         <Pressable
//          onPress={onPressHandler}
//          style={({pressed})=>({backgroundColor: pressed ? '#ddd' : '#0f0'})}
//         >
//         <Text style={styles.text}>
//           Go To Screen A
//         </Text>
//         </Pressable>

//         <Text style={styles.text}>
//           {ItemName}
//         </Text>
//         <Text style={styles.text}>
//           Id : {ItemId}
//         </Text>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     body: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     text: {
//       fontSize: 24,
//       fontWeight: '600',
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//   });