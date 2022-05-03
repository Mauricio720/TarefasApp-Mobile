import React,{useState,useEffect} from 'react';
import Style from './style';
import { useStateValue } from '../../contexts/StateContext';
import { Dropdown } from '../../components/Dropdown/DropDownHome';
import api from '../../services/Api';
import {date_default,weekDayToday,convertDate_ptBR} from '../../services/DateTime';
import CardTask from '../../components/CardTask';
import { useNavigation } from "@react-navigation/core";
import WeekendBlock from '../../components/WeekendBlock';
import DateTimePicker from '@react-native-community/datetimepicker';

export default ()=>{
    const [context,dispatch]=useStateValue();
    const [tasks,setTasks]=useState([]);
    const [loading,setLoading]=useState(false);
    const [filterTask,setFilterTask]=useState(1);
    const [filterType,setFilterType]=useState(0);
    const [showDateTaskDatePicker,setShowDateTaskDatePicker]=useState(false);
    const weekNames=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    const [weekNumber,setWeekNumber]=useState(weekDayToday());
    const [generalDate,setGeneralDate]=useState(new Date());
    const [searchText,setSearchText]=useState("");
    const navigation=useNavigation();
    let idUser=context.user.user.id;
    
    useEffect(()=>{
        const unsubscribe=navigation.addListener('focus',()=>{
            setLoading(true);
            setFilterTask(0);
            setFilterType(0);
            getAllTasks();
        });

        return unsubscribe;
    },[navigation]);

    useEffect(()=>{
        setGeneralDate(new Date());
        setWeekNumber(weekDayToday()); 
     },[filterTask]);

    useEffect(()=>{ 
       getAllTasks();
    },[searchText,filterType,generalDate])


    const getAllTasks=async ()=>{
        let response=await api.getTasks(searchText,filterType,date_default(generalDate),idUser);
        
        if(response.error ===''){
            setTasks(response.data);
            setLoading(false);
        }else{
            alert(response.error);
        }
    }

    const setDateByCalendar=(event, selectedDate)=>{
        const currentDate = selectedDate || generalDate;
        setShowDateTaskDatePicker(false);
        setGeneralDate(currentDate);
        setWeekNumber(currentDate.getDay());
    }

    const styles={
        alignItems:'center',
        marginTop:20
    };;

    return (
        <Style.Container>
            {loading &&
                <Style.ContainerLoading>
                    <Style.LoadingIcon/>
                </Style.ContainerLoading>
            }
            <Style.Scroller>
                {!loading && 
                <>
                <Style.SearchTaskInput placeholder='Pesquisar...' onChangeText={(t)=>{setSearchText(t)}}/>
                
                <Style.ActionsFilterContainer>
                    <Style.FilterSelectContainer>
                        <Style.FilterSelectLabel>Filtrar Tarefas Por:</Style.FilterSelectLabel>  

                        <Dropdown 
                            defaultButtonText='Selecione o tipo'
                            data={['Todas','Importante','Muito Importante','Razoavel','Concluido','Sem Concluir']}
                            defaultValueByIndex={0}
                            setFilterType={setFilterType}
                        />
                    </Style.FilterSelectContainer>
                    
                    <Style.FilterSelectContainer>  
                        <Style.FilterSelectLabel>Filtrar Tarefas Por:</Style.FilterSelectLabel>  
                            
                        <Dropdown 
                            defaultButtonText='Selecione o tipo'
                            data={['Dia Atual','Semana Atual','Mês']}
                            defaultValueByIndex={0}
                            setFilterTask={setFilterTask}
                        />
                    </Style.FilterSelectContainer>

                    {(filterTask===1 || filterTask===2)  &&
                    <>
                        <Style.FilterSelectContainer>  
                            <Style.FilterSelectLabel>Data:</Style.FilterSelectLabel>  
                            <Style.InputText editable={false} value={convertDate_ptBR(date_default(generalDate))}/> 
                        </Style.FilterSelectContainer>

                        <Style.FilterSelectContainer>  
                            <Style.FilterSelectLabel>Dia Semana:</Style.FilterSelectLabel>  
                            <Style.InputText editable={false} value={weekNames[weekNumber]}/> 
                        </Style.FilterSelectContainer>
                    </>
                }
                </Style.ActionsFilterContainer>
                
                {filterTask===1 &&
                    <>
                        <WeekendBlock getDate={setGeneralDate} getWeekNumber={setWeekNumber}/>
                    </>
                }
                <Style.HomeTitleContainer>
                    <Style.Title>Tarefas de Hoje</Style.Title>
                </Style.HomeTitleContainer>
                
                <Style.ContainerTasks>
                    {tasks.length > 0 &&
                        tasks.map((item)=>(
                            <CardTask key={item.id} data={item} refreshFunction={getAllTasks}/>
                        ))
                    }
                </Style.ContainerTasks>

                {tasks.length===0 &&
                    <Style.HomeTitleContainer>
                        {!loading &&
                            <Style.EmptyTaskTitle>Nenhuma tarefa para Hoje</Style.EmptyTaskTitle>
                        }
                    </Style.HomeTitleContainer>
                }
                
               

                {showDateTaskDatePicker && (
                    <DateTimePicker
                        testID="dateTaskFilterHome"
                        value={generalDate}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={setDateByCalendar}
                    />
                )}
                </>
            }
            </Style.Scroller>
            
            <Style.AddTaskButton 
                onPress={()=>navigation.navigate('AddTaskScreen')}>
                <Style.ActionIcon 
                    source={require("../../assets/Images/addTask.png")} 
                    resizeMode='cover'
                />
            </Style.AddTaskButton>

            {filterTask===2 &&
                <Style.CalendarButton
                    onPress={()=>setShowDateTaskDatePicker(true)}>
                    <Style.ActionIcon 
                        source={require("../../assets/Images/calendar.png")} 
                        resizeMode='cover'
                    />
                </Style.CalendarButton>
            }
        </Style.Container>
    )
}
