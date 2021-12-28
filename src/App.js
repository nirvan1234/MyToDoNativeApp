import 'react-native-gesture-handler';
import React from 'react';
import Home from './Screens/Home';
import Login from './Screens/Login';
import ScreenB from './Screens/ScreenB';
import ToDo from './Screens/ToDo';
import Done from './Screens/Done';
import Task from './Screens/Task'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable,Text,View,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider ,useSelector,useDispatch} from 'react-redux';
import {store} from './redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;
            return (
              <FontAwesome5
                name='plus'
                size= '25'
              />
            );
          } else if (route.name === 'Done') {
            return (
              <FontAwesome5
                name= 'plus'
                size= '25'
              />
            );
          }
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

function App(){
 
  return (
    <Provider store={store}> 
    <NavigationContainer>
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
    </NavigationContainer>
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
