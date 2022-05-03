import React,{useState} from 'react';
import Style from './style';
import { useStateValue } from '../../contexts/StateContext';
import { useNavigation } from "@react-navigation/core";
import api from '../../services/Api';
import AwesomeAlert from 'react-native-awesome-alerts';
import ImagePicker from "react-native-image-crop-picker";


export default ()=>{
    const [context,dispatch]=useStateValue();
    const navigation=useNavigation();
    const [edit,setEdit]=useState(false);
    const [name,setName]=useState(context.user.user.name);
    const [lastname,setLastName]=useState(context.user.user.lastName);
    const [login,setLogin]=useState(context.user.user.login);
    const [email,setEmail]=useState(context.user.user.email);
    const [profileFile,setProfileFile]=useState(null);
    const [password,setPassword]=useState("");
    const [showAlert,setShowAlert]=useState(false);

    const imgProfileDefault=require("../../assets/Images/profile.png");
    const [imgProfile,setImageProfile]=useState({uri:context.user.user.profileImg});

    const openFileViewer=()=>{
        ImagePicker.openPicker({
            cropping: true,
            mediaType: 'photo',
        })
        .then((image) =>{ 
            setImageProfile({uri:image.path});
            let file = { 
                uri: Platform.OS === 'ios' ? `file:///${image.path}` : image.path,
                type:image.mime,
                name: 'photo.jpg', 
            }
            setProfileFile(file);
        })
        .catch((error) => {
        });
    }
   

    const updateUser=async ()=>{
        if(name,lastname,login,email){
            let response=await api.updateUser(name,lastname,login,email,password,profileFile);
            if(response.error === ''){
                dispatch({type:'SET_USER',payload:{user:response.user}});
                setName(response.user.name);
                setEmail(response.user.email);
                setLogin(response.user.login);
                setShowAlert(true);
                setEdit(false);
            }else{
                alert(response.error);
            }
        }
    }

    return (
        <Style.Container>
            <Style.Scroller>
                <Style.ProfileArea>
                    <Style.ProfileTouchable onPress={()=>{openFileViewer()}} >
                        <Style.ProfileUser source={context.user.user.profileImg!==''?imgProfile:imgProfileDefault} 
                            resizeMode='contain'/>
                    </Style.ProfileTouchable>
                </Style.ProfileArea>

                <Style.Field>
                    <Style.FieldLabel>Nome</Style.FieldLabel>
                        <Style.FieldInput
                            editable={edit}
                            value={name}
                            onChangeText={(value)=>{setName(value)}}
                        />
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Sobrenome</Style.FieldLabel>
                        <Style.FieldInput
                            editable={edit}
                            value={lastname}
                            onChangeText={(value)=>{setLastName(value)}}
                        />
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Login</Style.FieldLabel>
                        <Style.FieldInput
                            editable={edit}
                            value={login}
                            onChangeText={(value)=>{setLogin(value)}}
                        />
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Email</Style.FieldLabel>
                    <Style.FieldInput
                        editable={edit}
                        value={email}
                        onChangeText={(value)=>{setEmail(value)}}
                    />
                </Style.Field>
                
                {edit &&
                    <Style.Field>
                        <Style.FieldLabel>Senha</Style.FieldLabel>
                        <Style.FieldInput
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(value)=>{setPassword(value)}}
                        />
                    </Style.Field>
                }
                <Style.Field>
                    <Style.FieldLabel>Conquistas Recebidas</Style.FieldLabel>
                    <Style.FieldStaticInput>
                        {context.user.totalConquest}
                    </Style.FieldStaticInput>
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Tarefas Concluidas</Style.FieldLabel>
                    <Style.FieldStaticInput>
                        {context.user.totalSuccessTask}
                    </Style.FieldStaticInput>
                </Style.Field>

                <Style.Footer>
                    {edit &&
                        <>
                            <Style.Button onPress={()=>{updateUser()}}>
                                <Style.ButtonText>
                                    Salvar
                                </Style.ButtonText>
                            </Style.Button>
                            
                            <Style.Button onPress={()=>{setEdit(false)}}>
                                <Style.ButtonText>
                                    Desabilitar Edição
                                </Style.ButtonText>
                            </Style.Button>
                        </>
                    }

                    {!edit &&
                        <Style.Button onPress={()=>{setEdit(true)}}>
                            <Style.ButtonText>
                                Editar
                            </Style.ButtonText>
                        </Style.Button>
                    }
                    
                </Style.Footer>

            </Style.Scroller>  

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Atualizado com sucesso!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor="#006a9c"
                onConfirmPressed={() => {
                    setShowAlert(false);
                }}
            />  
        </Style.Container>
    )
}
