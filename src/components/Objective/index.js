import React,{useState} from 'react';
import Style from './style';
import api from '../../services/Api';
import { useStateValue } from '../../contexts/StateContext';
import { Dropdown } from '../Dropdown/DropDownObjective';
import AwesomeAlert from 'react-native-awesome-alerts';


export default (props)=>{
    const typeArray=['','Importante','Muito Importante','Razoavel'];
    const levelArray=['','Diario','Semanal','Mensal','Anual'];
    const addMode=props.addMode;

    const [showAlert,setShowAlert]=useState(false);
    const [context,dispatch]=useStateValue();
    const [idObjective,setIdObjective]=useState(props.data !== undefined ? props.data.id:'');
    const [title,setTitle]=useState(props.data !== undefined ? props.data.title:'');
    const [type,setType]=useState(props.data !== undefined ? props.data.type:1);
    const [level,setLevel]=useState(props.data !== undefined ? props.data.level:1);
    const [editMode,setEditMode]=useState(false);
    const [check,setCheck]=useState(props.data.done===1 ? true:false);
    let idUser=context.user.user.id;

    const addUpdateObjective=async ()=>{
        if(title && type && level){
            let response="";
            if(addMode){
                response=await api.addObjective({title,type,level,idUser});
            }else if(editMode){
                if(idObjective){
                    response=await api.updateObjective({id:idObjective,title,type,level,idUser});
                }else{
                    alert('erro ao atualizar objetivo');
                }
            }
            
            if(response.error){
                alert(response.error);
            }else{
                if(addMode){
                    alert('Objetivo adicionado com sucesso!');
                }else if(editMode){
                    alert('Objetivo atualizado com sucesso!');
                }
                props.refreshFunction();
                props.setAddMode(false);
            }
        }else{
            if(title===''){
                alert('Digite um titulo');
            }else if(level===''){
                alert('Selecione um nivel');
            }else if(type===''){
                alert('Selecione um tipo');
            }
        }
    }

    const updateCheck=async ()=>{
        setCheck(!check);
        let response=await api.changeSelectedObjective(idObjective,idUser);
        
        if(response.error !== ''){
            alert(response.error);
        }
    }

    const deleteObjective=async ()=>{
        let response=await api.deleteObjective(idObjective);
        if(response.error !== ''){
            alert(response.error);
        }else{
            props.refreshFunction();
            props.setAddMode(false);
        }
    }

    return (
        <Style.Container>
            <Style.Content>
                <Style.Item>
                    <Style.Label>Objetivo:</Style.Label>
                    {(!addMode && !editMode)  &&
                        <Style.ItemText>{title}</Style.ItemText>
                    }

                    {(addMode || editMode) &&
                        <Style.ItemInput 
                            autoFocus={(addMode || editMode)?true:false}
                            onChangeText={(t)=>setTitle(t)}
                            value={title}
                        />
                    }
                </Style.Item>

                <Style.Item>
                    <Style.Label>Tipo:</Style.Label>
                    {(!addMode && !editMode) &&
                        <Style.ItemText>{typeArray[type]}</Style.ItemText>
                    }

                    {(addMode || editMode) &&
                        <Dropdown 
                            defaultButtonText='Selecione o tipo'
                            data={['','Importante','Muito Importante','Razoavel']}
                            setType={setType}
                            defaultValueByIndex={type}
                        />
                    }
                </Style.Item>

                <Style.Item>
                    <Style.Label>Nivel:</Style.Label>
                    {(!addMode && !editMode) &&
                        <Style.ItemText>{levelArray[level]}</Style.ItemText>
                    }

                    {(addMode || editMode) &&
                        <Dropdown 
                            defaultButtonText='Selecione o nivel'
                            data={['','Diario','Semanal','Mensal','Anual']}
                            setLevel={setLevel}
                            defaultValueByIndex={level}
                        />
                    }

                </Style.Item>

                <Style.ActionsContainer>
                    {(!addMode && !editMode) &&
                        <>
                            {check &&
                                <Style.Action onPress={updateCheck}>
                                    <Style.ActionIcon source={require("../../assets/Images/check.png")} 
                                        resizeMode='cover'/>
                                </Style.Action>
                            }
                            
                            {!check &&
                                <Style.Action onPress={updateCheck}>
                                    <Style.ActionIcon source={require("../../assets/Images/checkEmpty.jpg")} 
                                        resizeMode='cover'/>
                                </Style.Action>
                            }
                        </>
                    }

                    {!editMode &&
                        <Style.Action onPress={()=>{setEditMode(true)}}>
                            <Style.ActionIcon source={require("../../assets/Images/edit.png")} 
                                resizeMode='cover'/>
                        </Style.Action>
                    }

                    {editMode &&
                        <Style.Action onPress={()=>{setEditMode(false)}}>
                            <Style.ItemTextAction>X</Style.ItemTextAction>
                        </Style.Action>
                    }

                    {(addMode || editMode) &&
                        <Style.Action onPress={()=>{addUpdateObjective()}}>
                            <Style.ActionIcon source={require("../../assets/Images/save.png")} 
                                resizeMode='cover'/>
                        </Style.Action>
                    }

                    {(!addMode || !editMode) &&
                        <Style.Action onPress={()=>{setShowAlert(true)}}>
                            <Style.ActionIcon source={require("../../assets/Images/trash.png")} 
                                resizeMode='cover'/>
                        </Style.Action>
                    }
                </Style.ActionsContainer>
            </Style.Content>
                    
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title='Tem certeza que deseja excluir esse objetivo?'
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Não"
                confirmText="Sim"
                confirmButtonColor="#006a9c"
                cancelButtonColor="red"
                onConfirmPressed={() => {
                    deleteObjective()
                }}
                onCancelPressed={() => {
                    setShowAlert(false);
                }}
            />  

        </Style.Container>
    )

}