import React,{useState,useEffect} from 'react';
import Style from './style';
import { useStateValue } from '../../contexts/StateContext';
import Objective from '../../components/Objective';
import api from '../../services/Api';

export default ()=>{
    const [context,dispatch]=useStateValue();
    const [objectives,setObjectives]=useState([]);
    const [loading,setLoading]=useState(true);
    const [addObjective,setAddObjective]=useState(false);
    
    useEffect(()=>{
        getAllObjectives();
    },[]);

    const getAllObjectives=async ()=>{
        setObjectives([]);
        setLoading(true);
        let json=await api.getObjectives(context.user.user.id);
        if(json.error===''){
            setObjectives(json.data);
            setLoading(false);
        }else{
            alert(json.error);
        }
        
    }
    
    return (
        <Style.Container>
            <Style.Title>Objetivos</Style.Title>

            {addObjective &&
                <Objective addMode={true} setAddMode={setAddObjective} refreshFunction={getAllObjectives}/>
            }

            <Style.List
                data={objectives}
                onRefresh={getAllObjectives}
                refreshing={loading}
                renderItem={({item})=><Objective data={item} setAddMode={setAddObjective} refreshFunction={getAllObjectives} 
                    addMode={false}
                />}
                keyExtractor={((item)=>item.id.toString())}
                
            />
            <Style.Footer>
                {addObjective===false &&
                    <Style.AddButton onPress={()=>{setAddObjective(true)}}>
                        <Style.TextButton>Adicionar</Style.TextButton>
                    </Style.AddButton>
                }

                {addObjective &&
                    <Style.AddButton onPress={()=>{setAddObjective(false)}}>
                        <Style.TextButton>Cancelar</Style.TextButton>
                    </Style.AddButton>
                }
            </Style.Footer>

            
        </Style.Container>

        
        
    );
}