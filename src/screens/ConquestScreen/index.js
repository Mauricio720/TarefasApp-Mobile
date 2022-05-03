import React,{useState,useEffect} from 'react';
import Style from './style';
import api from '../../services/Api';
import { useStateValue } from '../../contexts/StateContext';

export default ()=>{
    const [allConquest,setAllConquest]=useState([]);
    const [context,dispatch]=useStateValue();


    useEffect(()=>{
        const getAllConquest=async ()=>{
            const json= await api.getConquest(context.user.user.id);
            setAllConquest(json.data[0]);
        }
        
        getAllConquest();
        
    },[]);

    return (
        <Style.ContainerScroll>
            <Style.Title>Conquistas</Style.Title>
            
            <Style.Container>
                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>1 Dia</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.one_day}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>2 Dias</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.two_day}</Style.ConquestValue>
                </Style.Conquest>
                
                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>3 Dias</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.three_day}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>4 Dias</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.four_day}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>5 Dias</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.five_day}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>6 Dias</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.six_day}</Style.ConquestValue>
                </Style.Conquest>
                
               <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>1 Semana</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.one_week}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>2 Semanas</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.two_week}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>3 Semanas</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.three_week}</Style.ConquestValue>
                </Style.Conquest>
                
                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>1 Mês</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.one_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>2 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.two_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>3 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.three_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>4 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.four_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>5 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.five_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>6 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.six_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>7 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.seven_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>8 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.eigth_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>9 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.nine_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>10 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.ten_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>11 Meses</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.eleven_month}</Style.ConquestValue>
                </Style.Conquest>

                <Style.Conquest>
                    <Style.ConquestImg source={require("../../assets/Images/trophy.png")} resizeMode='contain'/>
                    <Style.ConquestDescription>1 Ano</Style.ConquestDescription>
                    <Style.ConquestValue>{allConquest.one_year}</Style.ConquestValue>
                </Style.Conquest>

            </Style.Container>
        </Style.ContainerScroll>
    )
}