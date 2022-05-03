import React,{useState} from 'react';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/Api';
import Style from './style';
import { useNavigation } from "@react-navigation/core";

export default LoginScreen=()=>{
    const [login,setLogin]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const [context,dispatch]=useStateValue();
    const navigation=useNavigation();

    const doLogin=async ()=>{
        const result= await api.login(login,password);
        
        if(result.error===''){
            dispatch({type:'SET_TOKEN',payload:{token:result.token}});

            let userInfo=await api.getUser(result.token);
            if(userInfo.error){
                alert(userInfo.error)
                setLoading(false);
            }else{
                dispatch({type:'SET_USER',payload:{user:userInfo.user}});
                dispatch({type:'SET_TOTAL_CONQUESTS',payload:{totalConquest:userInfo.totalConquest}});
                dispatch({type:'SET_TOTAL_SUCCESS_TASK',payload:{totalSuccessTask:userInfo.taskSuccess}});
                
                navigation.reset({
                    index:1,
                    routes:[{name:'DrawerStack'}]
                });
                
            }
        }else{
            alert(result.error);
        }
    }

   
    return (
        <Style.Container>
            {!loading &&
            <Style.Scroller>
                <Style.LoginArea>
                    <Style.Logo source={require('../../assets/Images/Logo.jpg')} resizeMode='contain'/>
                    
                    <Style.ContainerInfo>
                        <Style.InputGroup>
                            <Style.InputIcon source={require('../../assets/Images/user.png')} resizeMode='contain'/>
                            <Style.Field
                                placeholder='Digite seu login'
                                value={login}
                                onChangeText={t=>setLogin(t)}
                            />
                        </Style.InputGroup>

                        <Style.InputGroup>
                            <Style.InputIcon source={require('../../assets/Images/key.png')} resizeMode='contain'/>
                            <Style.Field
                                secureTextEntry={true}
                                placeholder='Digite sua senha'
                                value={password}
                                onChangeText={t=>setPassword(t)}
                            />
                        </Style.InputGroup>

                        <Style.Button>
                            <Style.ButtonText color='white'>Esqueci a senha</Style.ButtonText>
                        </Style.Button>

                        <Style.Button normalButton={true} onPress={doLogin}>
                            <Style.ButtonText backgroundButton='white' normalButton={true}>Entrar</Style.ButtonText>
                        </Style.Button>
                    </Style.ContainerInfo>
                    
                    <Style.Footer>
                        <Style.Button>
                            <Style.ButtonContainer>
                                <Style.ButtonIcon source={require('../../assets/Images/google.png')} resizeMode='contain'/>
                                <Style.ButtonText>Login com Google</Style.ButtonText>
                            </Style.ButtonContainer>
                        </Style.Button>
                        
                        <Style.Button >
                            <Style.ButtonContainer>
                                <Style.ButtonIcon source={require('../../assets/Images/facebook.png')} resizeMode='contain'/>
                                <Style.ButtonText>Login com Facebook</Style.ButtonText>
                            </Style.ButtonContainer>
                        </Style.Button>

                        <Style.Button top={25} onPress={()=>{navigation.navigate('RegisterUserScreen')}}>
                            <Style.ButtonText color='white' backgroundButton='#006a9c'>Não tem uma conta? Cadastre-se</Style.ButtonText>
                        </Style.Button>
                    </Style.Footer>
                </Style.LoginArea>
           </Style.Scroller>
            }
            {loading &&
                <Style.ContainerLoading>
                    <Style.LoadingIcon color="#FFFFFF" size="large"/>
                </Style.ContainerLoading>
            }
        </Style.Container>
    )
}
