import React,{useEffect} from 'react';
import Style from './style';
import { useStateValue } from "../../contexts/StateContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ()=>{
    const menus=[
        {title:'Inicio',component:'HomeScreen',icon:require("../../assets/Images/home.png"),active:false},
        {title:'Meu Perfil',component:'ProfileScreen',icon:require("../../assets/Images/user.png"),active:false},
        {title:'Conquistas',component:'ConquestScreen',icon:require("../../assets/Images/medal.png"),active:false},
        {title:'Objetivos',component:'ObjectiveScreen',icon:require("../../assets/Images/target.png"),active:false},
        {title:'Sobre',component:'AboutScreen',icon:require("../../assets/Images/about.png"),active:false},
    ];

    const navigation=useNavigation();
    const [context,dispatch]=useStateValue();
    
    const imgProfileDefault=require("../../assets/Images/profile.png");
    const imgProfile={uri:context.user.user.profileImg};
   
    const logout=async ()=>{
        await AsyncStorage.removeItem('token');

        navigation.reset({
            index:1,
            routes:[{name:'LoginScreen'}]
        });
    }

    
    return (
        <Style.Container>
            <Style.ProfileArea>
                <Style.ProfileUser source={context.user.user.profileImg!==''?imgProfile:imgProfileDefault} 
                    resizeMode='contain'/>
                <Style.ProfileName>{context.user.user.name}</Style.ProfileName>
            </Style.ProfileArea>

            <Style.ContainerMenu>
                {menus.map((item,index)=>
                    <Style.MenuTouch key={index} 
                            onPress={index===0?()=> navigation.reset({index:1,routes:[{name:'HomeScreen'}]})
                            :()=>navigation.navigate(item.component)}>
                        <Style.MenuIcon source={item.icon} resizeMode='contain'/>
                        <Style.MenuText>{item.title}</Style.MenuText>
                    </Style.MenuTouch>   
                )}

                <Style.MenuTouch key={6} onPress={()=>{logout()}}>
                    <Style.MenuIcon source={require("../../assets/Images/exit.png")} resizeMode='contain'/>
                    <Style.MenuText>Sair</Style.MenuText>
                </Style.MenuTouch> 
            </Style.ContainerMenu>
        </Style.Container>
    )
}