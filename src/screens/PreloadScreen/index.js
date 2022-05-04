import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React,{useEffect} from "react";
import { useStateValue } from "../../contexts/StateContext";
import api from '../../services/Api';
import C from './style';

export default ()=>{
    const navigation=useNavigation();
    const [context,dispatch]=useStateValue();

    
    useEffect(()=>{
        const checkLogin=async ()=>{
            let token=await AsyncStorage.getItem('token');
            if(token){
                let userInfo=await api.getUser(token);

                if(userInfo.error === ""){
                    dispatch({type:'SET_USER',payload:{user:userInfo.user}});
                    dispatch({type:'SET_TOTAL_CONQUESTS',payload:{totalConquest:userInfo.totalConquest}});
                    dispatch({type:'SET_TOTAL_SUCCESS_TASK',payload:{totalSuccessTask:userInfo.taskSuccess}});
                    navigation.reset({
                        index:1,
                        routes:[{name:'DrawerStack'}]
                    });
                    
                }else{
                    navigation.reset({
                        index:1,
                        routes:[{name:'LoginScreen'}]
                    });
                }
            }else{
                navigation.reset({
                    index:1,
                    routes:[{name:'LoginScreen'}]
                });
            }
        }

        checkLogin();
    },[]);

    
    return (
        <C.Container>
            <C.LoadingIcon color="#006a9c" size="large"/>
        </C.Container>
    );
}