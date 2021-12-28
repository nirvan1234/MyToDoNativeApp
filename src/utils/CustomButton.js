import React from 'react'
import { View , Pressable , StyleSheet,Text, } from 'react-native'

const  CustomButton = (props) => {

    return (
        <View>
             <Pressable style={styles.button} onPress={props.onPressFunction}>
           <Text style={styles.text}>{props.title}</Text>
           </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

      text:{
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
      },
      button :{
        width: 350,
        height: 50,
        alignItems : "center",
        margin:10,
        backgroundColor:"#1eb900",
        borderRadius: 10
      },
      textone:{
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
      },

})

export default CustomButton;