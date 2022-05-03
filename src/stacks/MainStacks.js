import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import PreloadScreen from "../screens/PreloadScreen";
import DrawerStack from '../stacks/DrawerStack';
import RegisterUserScreen from "../screens/RegisterUserScreen";

const Stack=createNativeStackNavigator();

export default ()=>{
    return (
        <Stack.Navigator>
             <Stack.Screen
                name="PreloadScreen"
                component={PreloadScreen}
                options={{headerShown:false}}
            >
            </Stack.Screen>
            
            <Stack.Screen 
                name='LoginScreen' 
                component={LoginScreen} 
                options={{headerShown:false}}  
            >
            </Stack.Screen> 

            <Stack.Screen 
                name='RegisterUserScreen' 
                component={RegisterUserScreen} 
                options={{headerShown:false}}  
            >
            </Stack.Screen>

            <Stack.Screen 
                name='DrawerStack' 
                component={DrawerStack} 
                options={{headerShown:false}}  
            >
            </Stack.Screen> 
        </Stack.Navigator>
    )
}