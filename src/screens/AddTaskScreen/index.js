import React,{useState} from 'react';
import Style from './style';
import { Dropdown } from '../../components/Dropdown/DropDownAddTask';
import DateTimePicker from '@react-native-community/datetimepicker';
import {time,weekDayToday, date_ptBR} from '../../services/DateTime';
import ImagePicker from "react-native-image-crop-picker";
import api from '../../services/Api';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useStateValue } from '../../contexts/StateContext';
import { useNavigation } from "@react-navigation/core";

export default (props)=>{
    const [loading,setLoading]=useState(false);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [importance,setImportance]=useState(1);
    const [start, setStart] = useState(new Date());
    const [showStartDatePicker,setShowStartDatePicker]=useState(false);
    const [end, setEnd] = useState(new Date());
    const [showEndDatePicker,setShowEndPicker]=useState(false);
    const [date,setDate]=useState(new Date());
    const [showDateTaskDatePicker,setShowDateTaskDatePicker]=useState(false);
    const weekList=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    const [week,setWeek]=useState(weekList[weekDayToday()]);
    const [imageIcon,setImageIcon]=useState('');
    const [error,setError]=useState('');
    const [showAlertError,setShowAlertError]=useState(false);
    const [context,dispatch]=useStateValue();
    const navigation=useNavigation();

    let idUser=context.user.user.id;

    const onChangeTimeStart = (event, selectedDate) => {
        const currentDate = selectedDate || start;
        setShowStartDatePicker(Platform.OS === 'ios');
        setStart(currentDate);
    };

    const onChangeTimeEnd = (event, selectedDate) => {
        const currentDate = selectedDate || start;
        setShowEndPicker(Platform.OS === 'ios');
        
        setEnd(currentDate);
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || start;
        setShowDateTaskDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
        setWeek(weekList[selectedDate.getDay()]);
    };

    const openFileViewer=()=>{
        ImagePicker.openPicker({
            cropping: true,
            mediaType: 'photo',
        })
        .then((image) =>{ 
            setImageIcon({uri:image.path});
            let file = { 
                uri: Platform.OS === 'ios' ? `file:///${image.path}` : image.path,
                type:image.mime,
                name: 'photo.jpg', 
            }
            setImageIcon(file);
        })
        .catch((error) => {
            alert(error);
        });
    }

    const addTask=async ()=>{
        setLoading(true);
        let response=await api.addTask(title,start,end,date,importance,description,imageIcon,idUser);
        
        if(response.error){
            setError(response.error);
            setShowAlertError(true);
            setLoading(false);
        }else{
            setLoading(false);
            resetInputs();
            navigation.navigate('HomeScreen');
        }
    }

    const resetInputs=()=>{
        setTitle('');
        setDescription('');
        setImportance(0);
        setStart(new Date());
        setEnd(new Date());
        setImageIcon('');
    }

    return (
        <Style.Container>
            {!loading &&
            <Style.Scroller>
                <Style.ActionButtonClose onPress={()=>navigation.navigate('HomeScreen')}>
                    <Style.ActionButtonText>X</Style.ActionButtonText>
                </Style.ActionButtonClose>

                <Style.TitleContainer>
                    <Style.Title>Adicionar Tarefa</Style.Title>
                </Style.TitleContainer>
                
                <Style.InputGroup>
                    <Style.Label>Selecionar Icone</Style.Label>
                    <Style.IconTouchable onPress={()=>{openFileViewer()}}>
                        <Style.Icon 
                            source={imageIcon===''?require('../../assets/Images/typeTask.png'):imageIcon}
                            resizeMode='cover'
                        />
                    </Style.IconTouchable>
                </Style.InputGroup>
                
                <Style.ContainerInput>
                    <Style.InputGroup>
                        <Style.Label>Titulo:</Style.Label>
                        <Style.Input
                            placeholder='Digite o titulo da tarefa'
                            placeholderTextColor="#006a9c"
                            value={title}
                            onChangeText={(t)=>{setTitle(t)}}
                        />
                    </Style.InputGroup>

                    <Style.InputGroup>
                        <Style.Label>Inicio:</Style.Label>
                        <Style.InputDate>
                            <Style.InputValue>{time(start)}</Style.InputValue>

                            <Style.InputTouchable 
                                onPress={()=>{setShowStartDatePicker(true)}}>
                                <Style.InputIcon 
                                    source={require('../../assets/Images/clock.png')}
                                    resizeMode='cover'
                                />
                            </Style.InputTouchable>
                        </Style.InputDate>
                       
                        {showStartDatePicker && (
                            <DateTimePicker
                                testID="timeTask"
                                value={start}
                                mode={'time'}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeTimeStart}
                            />
                        )}
                    
                    </Style.InputGroup>

                    <Style.InputGroup>
                        <Style.Label>Termino:</Style.Label>
                        <Style.InputDate>
                            <Style.InputValue 
                                value={time(end)}
                            />

                            <Style.InputTouchable 
                                onPress={()=>{setShowEndPicker(true)}}>
                                <Style.InputIcon 
                                    source={require('../../assets/Images/clock.png')}
                                    resizeMode='cover'
                                />
                            </Style.InputTouchable>
                        </Style.InputDate>
                       
                        {showEndDatePicker && (
                            <DateTimePicker
                                testID="timeTask2"
                                value={end}
                                mode={'time'}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeTimeEnd}
                            />
                        )}
                    
                    </Style.InputGroup>

                    <Style.InputGroup>
                        <Style.Label>Importância:</Style.Label>
                        <Dropdown
                            data={['','Importante','Muito Importante','Razoavel']}
                            setImportance={setImportance}
                            defaultValueByIndex={importance}
                        />
                    </Style.InputGroup>

                    <Style.InputGroup>
                        <Style.Label>Descrição:</Style.Label>
                        <Style.InputDescription
                            multiline={true}
                            numberOfLines={4}
                            value={description}
                            onChangeText={(t)=>{setDescription(t)}}
                        />
                    </Style.InputGroup>

                    <Style.InputGroup>
                        <Style.Label>Data:</Style.Label>
                        <Style.InputDate>
                            <Style.InputValue>{date_ptBR(date)}</Style.InputValue>

                            <Style.InputTouchable 
                                onPress={()=>{setShowDateTaskDatePicker(true)}}>
                                <Style.InputIcon 
                                    source={require('../../assets/Images/calendarIcon.png')}
                                    resizeMode='cover'
                            />
                            </Style.InputTouchable>
                        </Style.InputDate>
                        
                        {showDateTaskDatePicker && (
                            <DateTimePicker
                                testID="dateTask"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeDate}
                            />
                        )}
                    </Style.InputGroup>

                    <Style.InputGroup>
                        <Style.Label>Dia Semana:</Style.Label>
                        <Style.InputDate>
                            <Style.InputValue>{week}</Style.InputValue>
                        </Style.InputDate>
                    </Style.InputGroup>
                </Style.ContainerInput>
            </Style.Scroller>
            }

            {!loading &&
                <Style.Footer>
                    <Style.ButtonAdd onPress={()=>{addTask()}}>
                        <Style.ButtonAddText>Cadastrar</Style.ButtonAddText>
                    </Style.ButtonAdd>
                </Style.Footer>
            }

            {loading &&
                <Style.ContainerLoading>
                    <Style.LoadingIcon color="#006a9c" size="large"/>
                </Style.ContainerLoading>
            }

            <AwesomeAlert
                show={showAlertError}
                showProgress={false}
                title={error}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText="Não"
                confirmText="Ok"
                confirmButtonColor="#006a9c"
                onConfirmPressed={() => {
                    setShowAlertError(false);
                }}
               
            />  

        </Style.Container>
    )   
}