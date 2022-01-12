import React,{useState} from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
  Pressable
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

export default function ScreenF({navigation}) {

  const [data, setData] = useState({
    email: '',
        password: '',
        Confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
  })


  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    })
  }
  
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      Confirm_password: val
    })
  }

  const updateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const confirmUpdateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
      
    })
  }
  const textInputChange = (val) =>{
      if(val.length !== 0){
          setData({
            ...data,
            email: val,
            check_textInputChange: true
          })
      }else{
        setData({
          ...data,
          email: val,
          check_textInputChange: false
        })

      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text_header}>Register Now! </Text>
      </View>
      <View style={styles.footer}>
      <Text style={styles.text_footer}>Email</Text>
      <View style={styles.action}>
        <FontAwesome5
         name="at"
         color="green"
         size={20}
        />
        <TextInput
          placeholder='Your Email' 
          style={styles.textInput}
          autoCapitalize='none'
          onChangeText={(val) => textInputChange(val)}/>
          {data.check_textInputChange? 
           <Feather 
           name="check-circle"
           color="green"
           size={20}
           /> : null }
         
      </View>
      <Text style={[styles.text_footer,{
        marginTop: 35
      }]}>Password</Text>
      <View style={styles.action}>
        <FontAwesome5
         name="lock"
         color="green"
         size={20}
        />
        <TextInput
          placeholder='Your Password' 
          style={styles.textInput}
          secureTextEntry={data.secureTextEntry ? true : false}
          autoCapitalize='none'
          onChangeText={(val) => handlePasswordChange(val)}/>
          <TouchableOpacity
          onPress={ updateSecureTextEntry}
          >
            {data.secureTextEntry ? 
           <Feather 
           name="check-circle"
           color="green"
           size={20}
           /> :  
          <Feather 
          name="eye-off"
          color="grey"
          size={20}
          />}
          </TouchableOpacity>
      </View>
      <Text style={[styles.text_footer,{
        marginTop: 35
      }]}>Confirm Password</Text>
      <View style={styles.action}>
        <FontAwesome5
         name="lock"
         color="green"
         size={20}
        />
        <TextInput
          placeholder='Your Password' 
          style={styles.textInput}
          secureTextEntry={data.secureTextEntry ? true : false}
          autoCapitalize='none'
          onChangeText={(val) => handleConfirmPasswordChange(val)}/>
          <TouchableOpacity
          onPress={ confirmUpdateSecureTextEntry}
          >
            {data.secureTextEntry ? 
           <Feather 
           name="check-circle"
           color="green"
           size={20}
           /> :  
          <Feather 
          name="eye-off"
          color="grey"
          size={20}
          />}
          </TouchableOpacity>
      </View>

      <TouchableOpacity>
             <View>
             <Pressable  style={styles.signIn}>
           <Text style={[styles.textSign , { color: "#fff"}]}>Sign Up
           </Text>
           
           </Pressable>
           </View>
      </TouchableOpacity>

      <TouchableOpacity>
             <View>
             <Pressable  
             onPress={ () => navigation.navigate('ScreenE')}
             style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
           <Text style={styles.textSign}>Sign In
           </Text>
           
           </Pressable>
           </View>
      </TouchableOpacity>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: "#5F9EA0",
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
})
