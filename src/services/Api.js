import AsyncStorage from "@react-native-async-storage/async-storage";
import qs from 'qs';
import {date_default,time} from '../services/DateTime';


const BASEAPI='http://apitarefas.mauridesenvolvedor.com/api/';

const verifyToken=async (body,fetchFile=false,token='')=>{
    if(token){
        if(fetchFile){
            body.append('token',token);
        }else{
            body.token=token;
        }
    }
    return token;
}


const apiFetchFile= async (endpoint,body)=>{
    let token=await AsyncStorage.getItem('token');

    verifyToken(body,true,token);

    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        body        
    });

    const json= await res.json();

    return json;
    
}

const apiFetchPost=async (endpoint,body)=>{
    let token=await AsyncStorage.getItem('token');
    verifyToken(body,false,token);
    
    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify(body)
    });

    const json= await res.json();
    return json;
}

const apiFetchGet=async (endpoint,body=[])=>{
    let token=await AsyncStorage.getItem('token');

    verifyToken(body,false,token);
    const res=await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`,
    {
        headers: {
            'Accept': 'application/json',
        }
    });

    const json= await res.json();

    return json;
}

export default {
    login: async (login=null,password=null,responseFacebook=null,responseGoogle=null)=>{
        let json= await apiFetchPost('auth/login',{login,password,responseFacebook,responseGoogle});
        return json;
    },

    addUser: async (name,lastname,login,email,password,profileFile=null)=>{
        const formData=new FormData();
        formData.append('name',name);
        formData.append('lastName',lastname);
        formData.append('login',login);
        formData.append('email',email);
        formData.append('password',password);
        if(profileFile!==null){
            formData.append('profileImg',profileFile);
        }
        
        let json= await apiFetchFile('auth/add_user',formData);
        
        return json;
    },


    getUser:async (token='')=>{
        let json=await apiFetchPost('auth/get_user',{token});
        return json;
    },

    updateUser: async (name,lastname,login,email,password,profileFile=null)=>{
        const formData=new FormData();
        formData.append('name',name);
        formData.append('lastName',lastname);
        formData.append('login',login);
        formData.append('email',email);
        formData.append('password',password);
        
        if(profileFile!=null){
            formData.append('profileImg',profileFile);
        }
        

        let json= await apiFetchFile('update_user',formData);
        return json;
    },

    verifyTokenRememberPass:async (tokenPassword)=>{
        let json=await apiFetchPost('verifyTokenRememberPass',{tokenPassword});
        return json;
    },

    forgotPassword:async (email)=>{
        let json=await apiFetchPost('forgot_password',{email});
        return json;
    },

    changePass:async (newPass,tokenPassword)=>{
        let json=await apiFetchPost('changePass',{newPass,tokenPassword});
        return json;
    },

    getTasks:async (filterTitle,filterType,filterDate,idUser)=>{
        let json=await apiFetchGet('get_task/'+idUser,{filterTitle,filterType,filterDate});
        return json;
    },

    addTask:async (title,start,end,date,importance,description,imageIcon,idUser)=>{
        const formData=new FormData();
        formData.append('title',title);
        formData.append('start',time(start));
        formData.append('end',time(end));
        formData.append('date',date_default(date));
        formData.append('importance',importance);
        formData.append('description',description);
        formData.append('taskImgFile',imageIcon);

        let json=await apiFetchFile('add_task/'+idUser,formData);
        
        return json;
    },

    updateTask:async (id,title,start,end,importance,description,imageIcon,idUser)=>{
        const formData=new FormData();
        formData.append('id',id);
        formData.append('title',title);
        formData.append('start',start);
        formData.append('end',end);
        formData.append('importance',importance);
        formData.append('description',description);
        formData.append('taskImgFile',imageIcon);

        let json=await apiFetchFile('update_task/'+idUser,formData);
        
        return json;
    },

    changeSelectedTask:async (id,idUser)=>{
        let json=await apiFetchPost('change_selected_task/'+id+"/"+idUser,{});
        return json;
    },

    deleteTask:async (id,idUser)=>{
        let json=await apiFetchPost('delete_task/'+id+"/"+idUser,{});
        return json;
    },

    getConquest:async (idUser)=>{
        let json=await apiFetchGet('getConquest/'+idUser,{});
        return json;
    },

    sendRepeatDays:async (id,daysRepeat,idUser)=>{
        let json=await apiFetchPost('send_daysRepeat/'+idUser,{id,daysRepeat});
        return json;
    },

    getObjectives:async (idUser)=>{
        let json=await apiFetchGet('get_objective/'+idUser);
        return json;
    },

    addObjective:async (objective)=>{

        let json=await apiFetchPost('add_objective/'+objective.idUser,objective);
        return json;
    },

    updateObjective:async (objective)=>{
        let json=await apiFetchPost('update_objective/'+objective.idUser,objective);
        return json;
    },

    deleteObjective:async (id)=>{
        let json=await apiFetchPost('delete_objective/',{id});
        return json;
    },
    
    changeSelectedObjective:async (id,idUser)=>{
        let json=await apiFetchPost('change_selected_objective/'+id+"/"+idUser,{});
        return json;
    },

}

