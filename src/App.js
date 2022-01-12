import 'react-native-gesture-handler';
import React, {useState , useEffect} from 'react';
import Home from './Screens/Home';
import Login from './Screens/Login';
import ScreenB from './Screens/ScreenB';
import ToDo from './Screens/ToDo';
import Done from './Screens/Done';
import Task from './Screens/Task';
import { AuthContext } from './Screens/context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable,Text,View,StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider ,useSelector,useDispatch} from 'react-redux';
import {store} from './redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenC from './Screens/ScreenC';
import ScreenD from './Screens/ScreenD';
import ScreenE from './Screens/ScreenE';
import ScreenF from './Screens/ScreenF';


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'plus';
            size = focused ? 25 : 20;
          } else if (route.name === 'Done') {
            iconName = 'plus';
            size = focused ? 25 : 20;
          }
          return (
            <FontAwesome5
            name={iconName}
              size={size}
              color={color}
            />
          );
        }
      })
    }
      screenOptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: '#777777',
        labelStyle: { fontSize: 15, fontWeight: 'bold' }
      }}
    >
   <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
      {/* <Tab.Screen name={'ScreenB'} component={ScreenB} />
      <Tab.Screen name={'ScreenC'} component={ScreenC} /> */}
    </Tab.Navigator>
  );
}


function LoginTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'ScreenD'} 
      options={{
        headerShown: false
       }}
      component={ScreenD} />
      <Tab.Screen name={'ScreenE'} 
      options={{
        headerShown: false
       }}
      component={ScreenE} />
      <Tab.Screen name={'ScreenF'}
      options={{
        headerShown: false
       }}
       component={ScreenF} />
    </Tab.Navigator>
  );
}


// function HomeTab(){
//   return (
//     <Tab.Navigator 
//     screenOptions={
//       ({route}) => ({
//         tabBarIcon: ({focused, size , color}) => {
//             let iconName;
//             if(route.name === "ToDo"){
//               iconName ='clipboard-list';
//               size = focused ? 25 : 20;
//             }else if (route.name === "Done"){
//               iconName ='clipboard-check';
//               size = focused ? 25 : 20;
//             }
//             return (
//               <FontAwesome 
//               name={iconName} 
//               size={size}
//               color={color}
//               />
//             )
//         }
//       })
//     }
//     tabBarOptions={{
//       activeTintColor : '#0080ff',
//       inactiveTintColor : '#777777',
//       labelStyle : { fontSize: 15 , fontWeight: "bold"}
//     }}>
// <Tab.Screen name={'To-Do'} component={ToDo} />
// <Tab.Screen name={'Done'} component={Done} />
//     </Tab.Navigator>
//   )
// }

const Rootstack = createStackNavigator();
const Stack = createStackNavigator();

function App(){

  const [ isLoading , setIsloading] = useState(true);
  const [ userToken, setUserToken] = useState(null);

//   const initialLoginState = {
//     isLoading: true,
//     userEmail : null,
//     userToken: null
// }

// const loginReducer = (prevState , action ) => {
//   switch (action.type) {
//     case 'RETRIVE_TOKEN' :
//       return {
//         ...prevState,
//         userToken: action.token,
//         isLoading: false,
//       };
//     case 'LOGIN' :
//       return {
//         ...prevState,
//         userEmail : action.id,
//         userToken: action.token,
//         isLoading: false,

//       };
//     case 'LOGOUT' :
//       return {
//         ...prevState,
//         userEmail : null,
//           userToken: null,
//           isLoading: false,

//       };
//     case 'REGISTER' :
//       return {
//         ...prevState,
//         userEmail: action.id,
//         userToken: action.token,
//         isLoading: false,
//       };
//   }
// }

// const [loginState , dispatch] = React.useReducer(loginReducer, initialLoginState)


  const authContext = React.useMemo( ()=> ({
   
    signIn: () => {
      setUserToken('fgkj'),
      setIsloading(false)
      // let userToken,
      // useremail = null;
      // if(useremail  == 'ssd' && password == 'ssd'){
      //   userToken = 'dfgdfg';
      // }
      // dispatch({ type: 'LOGIN', id : useremail , token :userToken})
    },
    signOut: () => {
      setUserToken(null),
      setIsloading(false)
      // dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      setUserToken('fgkj'),
      setIsloading(false)
     }
  }),  [])

  useEffect(() => {
   setTimeout( ()=> {
      setIsloading(false)
      // dispatch({ type: 'REGISTER', token: 'dfgdfg' });
   }, 1000);
  }, []);

  
  if(isLoading){
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <Provider store={store}> 
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    { userToken  !== null ? (
         <Rootstack.Navigator
         initialRouteName='Login'>
           <Rootstack.Screen
            name="Login"
            component={Login}
               options={{
            headerShown: false
           }}
            />
            {/* <Rootstack.Screen
            name="Home"
            component={Home} /> */}
            <Rootstack.Screen
            name="My Tasks"
            component={HomeTabs} />
              <Rootstack.Screen
            name="Task"
            component={Task} />
            {/* <Rootstack.Screen
            name="Screen_B"
            component={ScreenB}
            initialParams={{ItemName: "Good Will", ItemId: 2}} /> */}
       </Rootstack.Navigator>

     ) :  
     <Rootstack.Navigator>
       <Rootstack.Screen
       name="My Page"
       options={{
        headerShown: false
       }}
       component={LoginTabs} />
  </Rootstack.Navigator> 
} 
    </NavigationContainer>
     </AuthContext.Provider>
     </Provider>
  );
};


export default App;



// import 'react-native-gesture-handler';
// import React from 'react';
// import Home from './Screens/Home';
// import Login from './Screens/Login';
// import ScreenB from './Screens/ScreenB';
// import {Pressable,Text,View,StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { Provider ,useSelector,useDispatch} from 'react-redux';
// import {store} from './redux/store';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import {createDrawerNavigator} from '@react-navigation/drawer';


// const stack = createStackNavigator();

// function App(){
 
//   return (
//     <Provider store={store}> 
//     <NavigationContainer>
//       <stack.Navigator
//       initialRouteName='Login'>
//         <stack.Screen
//          name="Login"
//          component={Login}
//          options={{
//            headerShown: false
//          }} />
//          <stack.Screen
//          name="Home"
//          component={Home} />
//          <stack.Screen
//          name="Screen_B"
//          component={ScreenB}
//          initialParams={{ItemName: "Good Will", ItemId: 2}} />
//     </stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// };


// export default App;
