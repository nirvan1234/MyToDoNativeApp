import React, {useState,useEffect, useContext} from 'react'
import { Alert, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { setTasks} from '../redux/action';
import CustomButton from '../utils/CustomButton'
import {useSelector,useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { AuthContext } from './context';

export default function Task({navigation}) {

    const {tasks , taskID} = useSelector(state => state.taskReducer);

    const {signOut}  = useContext(AuthContext);

    const dispatch = useDispatch();
    useEffect(() => {
        getTasks();
     }, [])


     const [title, setTitle] = useState('');
    const [desc , setDesc] = useState('');
    const [done, setDone] = useState(false);
    const [showModals, setShowModals] = useState(false);
    const [color,setColor] = useState('white');
    const [bellTime,setBellTime] = useState('1');
 
     const getTasks = () => {
        const Task = tasks.find(task => task.ID === taskID )
        if(Task){
            setTitle(Task.Title);
            setDesc(Task.Desc)
            setDone(Task.Done)
            setColor(Task.Color)
        }
     }

    const setTaskbro = () => {
        if (title.length == 0){
           Alert.alert("Warning!" , "Please Write Title of the Task.")
        }else{
            try {
                var Task = {
                    ID: taskID,
                    Title: title,
                    Desc: desc,
                    Done: done,
                    Color: color
                }
            const index = tasks.findIndex(task => task.ID === taskID);
            let newTasks = [];
            if(index > -1){
                newTasks = [...tasks]
                newTasks[index] = Task
            }else{
                newTasks = [...tasks, Task];
            }
            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks)).
            then( () => {
               dispatch(setTasks(newTasks));
               Alert.alert('Success!', 'You have successfully added the task');
               navigation.goBack();
            })
            .catch(err => console.log(error))
            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <View style={styles.body}>
            <Modal
            visible={showModals}
            transparent
            onRequestClose={() => setShowModals(false)}
            animationType='slide'
            hardwareAccelerated
            >
<View style={styles.centered_view}>
                        <View style={styles.bell_modal}>
                            <View style={styles.bell_body}>
                            
                                <Text style={styles.text}>Remind me After</Text>
                                <TextInput
                                    style={styles.bell_input}
                                    keyboardType='numeric'
                                    value={bellTime}
                                    onChangeText={(value) => setBellTime(value)}
                                />
                            
                                <Text style={styles.text}>minute(s)</Text> 
                            </View>
                            <View style={styles.bell_buttons}>
                                
                                <TouchableOpacity
                                    style={styles.bell_cancel_button}
                                    onPress={() => {
                                        setShowModals(false)
                                    }}
                                >
                                    <Text style={styles.text}>          Cancel         </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.bell_ok_button}
                                    onPress={() => {
                                        setShowModals(false)
                                    }}
                                >
                                    <Text style={styles.text}>           OK           </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



            </Modal>
            <TextInput  
            style={styles.input}
            value={title}
            placeholder='Title'
            onChangeText={(value) => setTitle(value)}/>
            <TextInput  
            style={styles.input}
            value={desc}
            placeholder='Description'
            onChangeText={(value) => setDesc(value)}
            multiline/>
            <View style={styles.color_bar}>
              <TouchableOpacity 
              style={styles.color_white}
              onPress={() => setColor('white')}>
                  {
                      color === "white" && 
                      <FontAwesome5
                      name={'check'}
                      size={25}
                      color={"#000000"}
                       />
                  }


              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.color_red}
              onPress={() => setColor('red')}>
                {
                      color === "red" && 
                      <FontAwesome5
                      name={'check'}
                      size={25}
                      color={"#000000"}
                       />
                  }

              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.color_blue}
              onPress={() => setColor('blue')}>
               {
                      color === "blue" && 
                      <FontAwesome5
                      name={'check'}
                      size={25}
                      color={"#000000"}
                       />
                  }

              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.color_green}
              onPress={() => setColor('green')}>

                    { 
                      color === "green" && 
                      <FontAwesome5
                      name={'check'}
                      size={25}
                      color={"#000000"}
                       />
                  }
              </TouchableOpacity>
            </View>
            <View style={styles.extra_row}>
                <TouchableOpacity 
                style={styles.extra_button}
                onPress={() => { setShowModals(true) }}
                >
                <FontAwesome5
                      name={'bell'}
                      size={25}
                      color={"#ffffff"}
                       />

                </TouchableOpacity>
            </View>
            <View style={styles.checkbox}>
                <CheckBox 
                 value={done}
                onValueChange={(newValue) =>setDone(newValue)}/>
                <Text  style={styles.text}>Completed</Text>
            </View>
            <CustomButton 
            title='Save Task'
            color="#1eb900"
            style={{ width: '60%'}}
            onPressFunction={setTaskbro} />


           <CustomButton 
            title='Log Out'
            color="#1eb900"
            style={{ width: '60%'}}
            onPressFunction={() => {signOut()}} />

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    checkbox:{
        flexDirection: 'row',
        margin: 10
    },
    input: {
     width: '100%',
     borderWidth: 1,
     borderColor: "#ff00ff",
     borderRadius: 10,
     backgroundColor: "#f0fc",
     textAlign: 'left',
     fontSize: 20,
     margin: 10,
     paddingHorizontal:10,
    },
    text:{
        fontSize:20,
        color: "#000000"
    },
    color_bar: {
        flexDirection: 'row',
        height: 50,
        // flex:1,
        // width: 350,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#555555',
        marginVertical: 10,
    },
    color_white: {
        flex: 1,
        width: 90,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    color_red: {
        flex: 1,
        width: 90,
        backgroundColor: '#DC143C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    color_blue: {
        flex: 1,
        width: 90,
        backgroundColor: '#00FFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    color_green: {
        flex: 1,
        width: 90,
        backgroundColor: '#A9A9A9',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    extra_row: {
        flexDirection: 'row',
        marginVertical: 10,
         height: 50
    },
    extra_button: {
        flex: 1,
        height: 50,
        width: 350,
        backgroundColor: '#00FFFF',
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered_view: {
        flex: 1,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell_modal: {
        width: 300,
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000000',
    },
    bell_body: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell_buttons: {
        flexDirection: 'row',
        height: 50,
    },
    bell_input: {
        width: 50,
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
    },
    bell_cancel_button: {
       flex:1,
        borderWidth: 1,
        borderColor: '#000000',
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell_ok_button: {
        flex:1,
        borderWidth: 1,
        borderColor: '#000000',
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
