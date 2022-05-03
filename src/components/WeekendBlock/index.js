import React,{useState} from 'react';
import Style from './style';
import {weekDayToday,dateByDays,convertToDateObject} from './../../services/DateTime';

export default (props)=>{
    const getDatesOfWeek=()=>{
        let datesWeek=[];
        let todayWeek=weekDayToday();
        let restWeek=7-todayWeek;

        for (let index = 0; index <= todayWeek; index++){
            datesWeek.push(dateByDays(index,false));
        }

        for (let index2 = 1; index2 < restWeek; index2++){
            datesWeek.push(dateByDays(index2));
        }
        
        let newDatesWeek = datesWeek.filter(function(elem, pos, self) {
            return self.indexOf(elem) == pos;
        })

        return newDatesWeek.sort();
    }
    
    const [dateWeek,setDatesWeek]=useState(getDatesOfWeek());
    const [selectedDay,setSelectedDay]=useState(weekDayToday());
   
    const changeDateOnClick=(dayWeek)=>{
        props.getDate(convertToDateObject(dateWeek[dayWeek]));
        props.getWeekNumber(dayWeek);
        setSelectedDay(dayWeek);
    }
    
    return (
        <Style.Container>
            <Style.WeekendItem selected={selectedDay===0 ? true : false} onPress={()=>{changeDateOnClick(0)}}>
                <Style.WeekendItemText>Dom</Style.WeekendItemText>
            </Style.WeekendItem>
            
            <Style.WeekendItem selected={selectedDay===1 ? true : false} onPress={()=>{changeDateOnClick(1)}}>
                <Style.WeekendItemText>Seg</Style.WeekendItemText>
            </Style.WeekendItem>
            
            <Style.WeekendItem selected={selectedDay===2 ? true : false} onPress={()=>{changeDateOnClick(2)}}>
                <Style.WeekendItemText>Terc</Style.WeekendItemText>
            </Style.WeekendItem>
            
            <Style.WeekendItem selected={selectedDay===3 ? true : false} onPress={()=>{changeDateOnClick(3)}}>
                <Style.WeekendItemText>Qua</Style.WeekendItemText>
            </Style.WeekendItem>

            <Style.WeekendItem selected={selectedDay===4 ? true : false}  onPress={()=>{changeDateOnClick(4)}}>
                <Style.WeekendItemText>Qui</Style.WeekendItemText>
            </Style.WeekendItem>

            <Style.WeekendItem selected={selectedDay===5 ? true : false} onPress={()=>{changeDateOnClick(5)}}>
                <Style.WeekendItemText>Sex</Style.WeekendItemText>
            </Style.WeekendItem>

            <Style.WeekendItem selected={selectedDay===6 ? true : false} onPress={()=>{changeDateOnClick(6)}}>
                <Style.WeekendItemText>Sab</Style.WeekendItemText>
            </Style.WeekendItem>
        </Style.Container>
    )
}