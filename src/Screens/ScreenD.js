import React from 'react'
import { StyleSheet, Text, View ,Dimensions ,Image, TouchableOpacity, Pressable, Button} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//  import CustomButton from './CustomButton';

export default function ScreenD({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image 
      source={require('./../../assests/logo.png')}
      style={styles.logo}
      resizeMode='stretch'

      />
      </View>
      <View style={styles.footer}>
      <Text style={styles.title}>Stay Connected with Everyone!</Text>
      <Text style={styles.text}>Sign In with Account</Text>
      <View style={styles.button}>
      <TouchableOpacity>
             <View>
             <Pressable onPress={ () => navigation.navigate('ScreenE')} style={styles.signIn}>
           <Text style={styles.textSign}>Get Started  
           </Text>
           
           </Pressable>
           </View>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    backgroundColor: "#5F9EA0",
    justifyContent: 'center',
    alignItems : "center",
    borderRadius: 50,
    // marginTop: 10,
    // marginLeft: 150,
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
})

