import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';

const styles={
    borderBottomWidth:1,
    borderBottomColor:'#006a9c',
    width:'70%',
    height:25,
    color:'#006a9c'
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
                if(props.setType !== undefined){
                    props.setType(index);
                }

                if(props.setLevel !== undefined){
                    props.setLevel(index);
                }
        }}
        />
    );
};

