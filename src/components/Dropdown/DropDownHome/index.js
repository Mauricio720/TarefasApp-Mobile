import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';

const styles={
    borderWidth:2,
    borderColor:'#006a9c',
    width:'70%',
    height:35,
    color:'#006a9c',
    backgroundColor:'white'
};

const styleText={
    color:'#006a9c',
};

export const Dropdown = (props) => {
    return (
        <SelectDropdown
            data={props.data}
            buttonStyle={styles}
            buttonTextStyle={styleText}
            defaultButtonText={props.defaultButtonText}
            defaultValueByIndex={props.defaultValueByIndex}
            onSelect={(selectedItem, index) => {
                if(props.setFilterType !== undefined){
                    props.setFilterType(index);
                }

                if(props.setFilterTask !== undefined){
                    props.setFilterTask(index);
                }
        }}
        />
    );
};

