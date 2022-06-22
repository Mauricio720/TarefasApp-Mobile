import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustom from '../components/DrawerCustom';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from "../screens/ProfileScreen";
import ConquestScreen from '../screens/ConquestScreen';
import AboutScreen from '../screens/AboutScreen';
import ObjectiveScreen from '../screens/ObjectiveScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import BigCard from '../components/BigCard';
import RepeatWeek from '../components/RepeatWeek';

const Drawer = createDrawerNavigator();

export default ()=>{
    return (
        <Drawer.Navigator   
            drawerContent={(props)=>(<DrawerCustom {...props}/>)} 
            screenOptions={{
                headerShown:true,
                headerTitle:'',
                headerTintColor: '#006a9c',
                headerStyle:{
                    backgroundColor:'white',
                },
                headerShadowVisible:false,
            }}
        >
           <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
           <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
           <Drawer.Screen name="ConquestScreen" component={ConquestScreen}/>
           <Drawer.Screen name="ObjectiveScreen" component={ObjectiveScreen}/>
           <Drawer.Screen name="AboutScreen" component={AboutScreen}/>
           <Drawer.Screen name="AddTaskScreen" component={AddTaskScreen}/>
           <Drawer.Screen name="BigCard" component={BigCard} />
           <Drawer.Screen name="RepeatWeek" component={RepeatWeek} />
        </Drawer.Navigator>
    );
}