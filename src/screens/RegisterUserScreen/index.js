import React,{useState} from 'react';
import Style from './style';
import { useNavigation } from "@react-navigation/core";
import api from '../../services/Api';
import AwesomeAlert from 'react-native-awesome-alerts';
import ImagePicker from "react-native-image-crop-picker";

export default ()=>{
    const navigation=useNavigation();
    const [name,setName]=useState('');
    const [lastname,setLastName]=useState('');
    const [login,setLogin]=useState('');
    const [email,setEmail]=useState('');
    const [profileFile,setProfileFile]=useState(null);
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [showAlert,setShowAlert]=useState(false);
    const [alertTitle,setAlertTitle]=useState('');

    const imgProfileDefault=require("../../assets/Images/profile.png");
    const [imgProfile,setImageProfile]=useState('');

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
   

    const addUser=async ()=>{
        if(name,lastname,login,email,password,confirmPassword){
            if(password===confirmPassword){
                let response=await api.addUser(name,lastname,login,email,password,profileFile);

                if(response.error === ''){
                    navigation.navigate('LoginScreen');
                }else{
                    setShowAlert(true);
                    setAlertTitle(response.error);
                }
            }else{
                setShowAlert(true);
                setAlertTitle('Senha e confirmar senha estão diferentes');
            }
        }else{
            setShowAlert(true);
            setAlertTitle('Preencha os campos obrigatórios!');
        }
    }

    return (
        <Style.Container>
            <Style.Scroller>
                <Style.Title>
                    Cadastre seu usuário!
                </Style.Title>

                <Style.ProfileArea>
                    <Style.ProfileTouchable onPress={()=>{openFileViewer()}} >
                        <Style.ProfileUser source={imgProfile!==''?imgProfile:imgProfileDefault} 
                            resizeMode='contain'/>
                    </Style.ProfileTouchable>
                </Style.ProfileArea>

                <Style.Field>
                    <Style.FieldLabel>Nome*</Style.FieldLabel>
                        <Style.FieldInput
                            value={name}
                            onChangeText={(value)=>{setName(value)}}
                        />
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Sobrenome*</Style.FieldLabel>
                        <Style.FieldInput
                            value={lastname}
                            onChangeText={(value)=>{setLastName(value)}}
                        />
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Login*</Style.FieldLabel>
                        <Style.FieldInput
                            value={login}
                            onChangeText={(value)=>{setLogin(value)}}
                        />
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Email*</Style.FieldLabel>
                    <Style.FieldInput
                        value={email}
                        onChangeText={(value)=>{setEmail(value)}}
                    />
                </Style.Field>
                
             
                <Style.Field>
                    <Style.FieldLabel>Senha*</Style.FieldLabel>
                    <Style.FieldInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(value)=>{setPassword(value)}}
                    />
                </Style.Field>

                <Style.Field>
                    <Style.FieldLabel>Confirme a Senha*</Style.FieldLabel>
                    <Style.FieldInput
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(value)=>{setConfirmPassword(value)}}
                    />
                </Style.Field>
                
                <Style.Footer>
                    <Style.Button onPress={()=>{addUser()}}>
                        <Style.ButtonText>
                            Salvar
                        </Style.ButtonText>
                    </Style.Button>
                </Style.Footer>

            </Style.Scroller>  

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title={alertTitle}
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
