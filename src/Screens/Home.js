import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import GlobalStyles from '../utils/GlobalStyles';
import SQLite from 'react-native-sqlite-storage';
import {useSelector,useDispatch} from 'react-redux';
import {setName, setAge ,setIncrease} from '../redux/action';


const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export default function Home({ navigation, route }) {

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    const {name , age} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    



    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             let user = JSON.parse(value);
            //             setName(user.Name);
            //             setAge(user.Age);
            //         }
            //     })
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userAge = results.rows.item(0).Age;
                            dispatch(setName(userName));
                            dispatch(setAge(userAge));
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                // var user = {
                //     Name: name
                // }
                // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                db.transaction((tx) => {
                    tx.executeSql(
                        "UPDATE Users SET Name=?",
                        [name],
                        () => { Alert.alert('Success!', 'Your data has been updated.') },
                        error => { console.log(error) }
                    )
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            // await AsyncStorage.clear();
            db.transaction((tx) => {
                tx.executeSql(
                    "DELETE FROM Users",
                    [],
                    () => { navigation.navigate('Login') },
                    error => { console.log(error) }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyles.CustomFont,
                styles.text
            ]}>
                Welcome {name} !
            </Text>
            <Text style={[
                GlobalStyles.CustomFont,
                styles.text
            ]}>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
            />
            <CustomButton
                title='Update'
                color='#ff7f00'
                onPressFunction={updateData}
            />
            <CustomButton
                title='Remove'
                color='#f40100'
                onPressFunction={removeData}
            />
            <CustomButton
                title='Increase Age'
                color='#f40100'
                onPressFunction={(value) => dispatch(setIncrease(value))}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})




// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useState, useEffect } from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Alert,
//     TextInput,
// } from 'react-native';
// import CustomButton from '../utils/CustomButton';
// import GlobalStyles from '../utils/GlobalStyles';
// import SQLite from 'react-native-sqlite-storage';
// import {useSelector,useDispatch} from 'react-redux';
// import {setName, setAge ,setIncrease} from '../redux/action';


// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );

// export default function Home({ navigation, route }) {

//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//     const {name , age} = useSelector(state => state.userReducer);

//     const dispatch = useDispatch();
    



//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             let user = JSON.parse(value);
//             //             setName(user.Name);
//             //             setAge(user.Age);
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     "SELECT Name, Age FROM Users",
//                     [],
//                     (tx, results) => {
//                         var len = results.rows.length;
//                         if (len > 0) {
//                             var userName = results.rows.item(0).Name;
//                             var userAge = results.rows.item(0).Age;
//                             dispatch(setName(userName));
//                             dispatch(setAge(userAge));
//                         }
//                     }
//                 )
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const updateData = async () => {
//         if (name.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 // var user = {
//                 //     Name: name
//                 // }
//                 // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
//                 db.transaction((tx) => {
//                     tx.executeSql(
//                         "UPDATE Users SET Name=?",
//                         [name],
//                         () => { Alert.alert('Success!', 'Your data has been updated.') },
//                         error => { console.log(error) }
//                     )
//                 })
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }

//     const removeData = async () => {
//         try {
//             // await AsyncStorage.clear();
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     "DELETE FROM Users",
//                     [],
//                     () => { navigation.navigate('Login') },
//                     error => { console.log(error) }
//                 )
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <View style={styles.body}>
//             <Text style={[
//                 GlobalStyles.CustomFont,
//                 styles.text
//             ]}>
//                 Welcome {name} !
//             </Text>
//             <Text style={[
//                 GlobalStyles.CustomFont,
//                 styles.text
//             ]}>
//                 Your age is {age}
//             </Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter your name'
//                 value={name}
//                 onChangeText={(value) => dispatch(setName(value))}
//             />
//             <CustomButton
//                 title='Update'
//                 color='#ff7f00'
//                 onPressFunction={updateData}
//             />
//             <CustomButton
//                 title='Remove'
//                 color='#f40100'
//                 onPressFunction={removeData}
//             />
//             <CustomButton
//                 title='Increase Age'
//                 color='#f40100'
//                 onPressFunction={(value) => dispatch(setIncrease(value))}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 40,
//         margin: 10,
//     },
//     input: {
//         width: 300,
//         borderWidth: 1,
//         borderColor: '#555',
//         borderRadius: 10,
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         fontSize: 20,
//         marginTop: 130,
//         marginBottom: 10,
//     }
// })





// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useState, useEffect } from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Alert,
//     TextInput,
// } from 'react-native';
// import CustomButton from '../utils/CustomButton';
// import GlobalStyles from '../utils/GlobalStyles';
// import SQLite from 'react-native-sqlite-storage';
// import {useSelector,useDispatch} from 'react-redux';
// import {setName, setAge ,setIncrease} from '../redux/action';


// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );

// export default function Home({ navigation, route }) {

//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//     const {name , age} = useSelector(state => state.userReducer);

//     const dispatch = useDispatch();
    



//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             let user = JSON.parse(value);
//             //             setName(user.Name);
//             //             setAge(user.Age);
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     "SELECT Name, Age FROM Users",
//                     [],
//                     (tx, results) => {
//                         var len = results.rows.length;
//                         if (len > 0) {
//                             var userName = results.rows.item(0).Name;
//                             var userAge = results.rows.item(0).Age;
//                             dispatch(setName(userName));
//                             dispatch(setAge(userAge));
//                         }
//                     }
//                 )
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const updateData = async () => {
//         if (name.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 // var user = {
//                 //     Name: name
//                 // }
//                 // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
//                 db.transaction((tx) => {
//                     tx.executeSql(
//                         "UPDATE Users SET Name=?",
//                         [name],
//                         () => { Alert.alert('Success!', 'Your data has been updated.') },
//                         error => { console.log(error) }
//                     )
//                 })
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }

//     const removeData = async () => {
//         try {
//             // await AsyncStorage.clear();
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     "DELETE FROM Users",
//                     [],
//                     () => { navigation.navigate('Login') },
//                     error => { console.log(error) }
//                 )
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <View style={styles.body}>
//             <Text style={[
//                 GlobalStyles.CustomFont,
//                 styles.text
//             ]}>
//                 Welcome {name} !
//             </Text>
//             <Text style={[
//                 GlobalStyles.CustomFont,
//                 styles.text
//             ]}>
//                 Your age is {age}
//             </Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter your name'
//                 value={name}
//                 onChangeText={(value) => dispatch(setName(value))}
//             />
//             <CustomButton
//                 title='Update'
//                 color='#ff7f00'
//                 onPressFunction={updateData}
//             />
//             <CustomButton
//                 title='Remove'
//                 color='#f40100'
//                 onPressFunction={removeData}
//             />
//             <CustomButton
//                 title='Increase Age'
//                 color='#f40100'
//                 onPressFunction={(value) => dispatch(setIncrease(value))}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 40,
//         margin: 10,
//     },
//     input: {
//         width: 300,
//         borderWidth: 1,
//         borderColor: '#555',
//         borderRadius: 10,
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         fontSize: 20,
//         marginTop: 130,
//         marginBottom: 10,
//     }
// })




// import React,{useState, useEffect} from 'react';
// import {Pressable,Text,View,StyleSheet,TextInput,Alert} from 'react-native';
// // import GlobalStyles from '../utils/GlobalStyles';
// import AsyncStorage  from '@react-native-async-storage/async-storage';
// import CustomButton from '../utils/CustomButton';
// import {useSelector,useDispatch} from 'react-redux';
// import {setName, setAge} from '../redux/action';


// export default function Home({navigation}){

//   // const {name , age} = useSelector(state => state.userReducer);

//   const dispatch = useDispatch();

//     // const onPressHandler = () =>{
//     //     navigation.navigate('Screen_B');
//     // }
   
//   const [name, setName] = useState('');
//   const [age , setAge] = useState("");

//   useEffect(() => {
//     getData()
//   }, [])

//   const getData = async() => {
//        try{
//         await AsyncStorage.getItem('UserData').then( value =>{
//             if (value != null){
//               let user = JSON.parse(value)
//             setName(user.Name)
//             setAge(user.Age)
//             }
//         })
//        }catch(error){
//           console.log(value);
//        }
//   }

//   const updateData = async() =>{
//     if (name.length == 0){ 
//      Alert.alert('Warning!' , 'Please Write Your Data')
//     }else{
//         try {
//             var user = {
//               Name: name
//             }
//             await AsyncStorage.mergeItem('UserData' , JSON.stringify(user));
//             Alert.alert('Success!' , 'Your Data is updated');
//         } catch (error) {
//             console.log("error");
//         }
//     }
// }

// const removeData = async () =>{
//    try {
//           await AsyncStorage.clear();
//           navigation.navigate('Login')
//       } catch (error) {
//           console.log("error");
//       }
// }



//     return (
//       <View style={styles.body}>
//         <Text style={styles.text}>
//           Welcome {name}
//         </Text>
//         <Text style={styles.text}>
//           Your age is {age}
//         </Text>
//         <TextInput 
//              style={styles.input}
//              value={name}
//              onChangeText={(value) => setName(value)} />
              
//              <CustomButton 
//              title='Update'
//              color='#1eb900'
//              onPressFunction={updateData}/>

//             <CustomButton
//                 title='Remove'
//                 color='#f40100'
//                 onPressFunction={removeData}
//             />
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
//   input:{
//       width: 300,
//       borderWidth:1,
//       borderColor:'#555',
//       backgroundColor:'#ffffff',
//       borderRadius: 10,
//       textAlign: "center",
//       fontSize: 20,
//       marginTop: 130,
//       marginBottom:10
//   }
//   });

  // <Pressable
  //        onPress={onPressHandler}
  //        style={({pressed})=>({backgroundColor: pressed ? '#ddd' : '#0f0'})}
  //       >
  //       <Text style={[
  //         GlobalStyles.CustomFont,
  //         styles.text]}>
  //         Go To Screen B
  //       </Text>
  //       </Pressable>