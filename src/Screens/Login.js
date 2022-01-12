import React, {useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import CustomButton from '../utils/CustomButton';



export default function Login({ navigation }) {



    useEffect(() => {
        createTable();
        setTimeout( () => { 
            navigation.replace('My Tasks')
        }, 2000)

    }, []);

    const createTable = () => {
    
    }


    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../../assests/checklist.jpg')}
            />
            <Text style={styles.text}>
                  TO DO LIST
            </Text>
          
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    }
})


// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     StyleSheet,
//     Image,
//     Text,
//     TextInput,
//     Alert,
// } from 'react-native';
// import CustomButton from '../utils/CustomButton';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// import SQLite from 'react-native-sqlite-storage';
// import {useSelector,useDispatch} from 'react-redux';
// import {setName, setAge} from '../redux/action';


// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );

// export default function Login({ navigation }) {

//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//  const {name , age} = useSelector(state => state.userReducer);

// const dispatch = useDispatch();



//     useEffect(() => {
//         createTable();
//         getData();
//     }, []);

//     const createTable = () => {
//         db.transaction((tx) => {
//             tx.executeSql(
//                 "CREATE TABLE IF NOT EXISTS "
//                 + "Users "
//                 + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
//             )
//         })
//     }

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             navigation.navigate('Home');
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     "SELECT Name, Age FROM Users",
//                     [],
//                     (tx, results) => {
//                         var len = results.rows.length;
//                         if (len > 0) {
//                             navigation.navigate('Home');
//                         }
//                     }
//                 )
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const setData = async () => {
//         if (name.length == 0 || age.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
                
//                 dispatch(setName(name))
//                 dispatch(setAge(age))
//                 // var user = {
//                 //     Name: name,
//                 //     Age: age
//                 // }
//                 // await AsyncStorage.setItem('UserData', JSON.stringify(user));
//                 await db.transaction(async (tx) => {
//                     // await tx.executeSql(
//                     //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
//                     // );
//                     await tx.executeSql(
//                         "INSERT INTO Users (Name, Age) VALUES (?,?)",
//                         [name, age]
//                     );
//                 })
//                 navigation.navigate('Home');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }

//     return (
//         <View style={styles.body} >
//             <Image
//                 style={styles.logo}
//                 source={require('../../assests/khajana.jpg')}
//             />
//             <Text style={styles.text}>

//             </Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter your name'
//                 onChangeText={(value) => dispatch(setName(value))}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter your age'
//                 onChangeText={(value) => dispatch(setAge(value))}
//             />
//             <CustomButton
//                 title='Login'
//                 color='#1eb900'
//                 onPressFunction={setData}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#0080ff',
//     },
//     logo: {
//         width: 100,
//         height: 100,
//         margin: 20,
//     },
//     text: {
//         fontSize: 30,
//         color: '#ffffff',
//         marginBottom: 130,
//     },
//     input: {
//         width: 300,
//         borderWidth: 1,
//         borderColor: '#555',
//         borderRadius: 10,
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         fontSize: 20,
//         marginBottom: 10,
//     }
// })




// import React ,{useState,useEffect} from 'react';
// import {Pressable,Text,View,StyleSheet,Image, Alert} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import CustomButton from '../utils/CustomButton';
// import AsyncStorage  from '@react-native-async-storage/async-storage';
// import {useSelector,useDispatch} from 'react-redux';
// import {setName, setAge} from '../redux/action';


// function Login({navigation}) {

//     // const {name , age} = useSelector(state => state.userReducer);

//     //  const dispatch = useDispatch();

//     const [name, setName] = useState("");
//     const [age , setAge] = useState("");


    
//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
//             AsyncStorage.getItem('UserData')
//                 .then(value => {
//                     if (value != null) {
//                         navigation.navigate('Home');
//                     }
//                 })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const setData = async () =>{
//         if (name.length == 0 || age.length ==0){ 
//          Alert.alert('Warning!' , 'Please Write Your Name')
//         }else{

//             try {

//                 // dispatch(setName(name))
//                 // dispatch(setAge(age))
//                 var user =  {
//                     Name: name,
//                     Age: age
//                 }
//                 await AsyncStorage.setItem('UserData' , JSON.stringify(user));
//                 navigation.navigate('Home')
//             } catch (error) {
//                 console.log("error");
//             }
//         }
//     }



//     return (
//         <View style={styles.body}>
//             <Image style={styles.logo} source={require('../../assests/khajana.jpg')} />
//             <Text style={styles.text}>Async Storage</Text>
//              <TextInput 
//              style={styles.input}
//              value={name}
//              onChangeText={(value) => setName(value)} />
//              <TextInput 
//              style={styles.input}
//              value={age}
//              onChangeText={(value) => setAge(value)} />
              
//              <CustomButton 
//              title='Login'
//              color='#1eb900'
//              onPressFunction={setData}/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//       flex: 1,
//       alignItems: 'center',
//       backgroundColor: '#0080ff'
//     },
//     logo: {
//         height: 100,
//         width: 100
//     },
//     text : {
//         fontSize: 30,
//         color:'#ffffffff'
//     },
//     input:{
//         width: 300,
//         borderWidth:1,
//         borderColor:'#555',
//         backgroundColor:'#ffffff',
//         borderRadius: 10,
//         textAlign: "center",
//         fontSize: 20,
//         marginTop: 10,
//         marginBottom:10
//     }
  
//   });

// export default Login



