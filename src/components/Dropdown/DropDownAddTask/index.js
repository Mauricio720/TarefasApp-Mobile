import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';

const styles = {
  borderWidth: 2,
  borderColor: '#006a9c',
  width: '80%',
  height: 50,
  color: '#006a9c',
  backgroundColor: 'white',
};

const styles2 = {
  width: '100%',
  borderBottomColor: '#006a9c',
  borderBottomWidth: 2,
  height: 40,
  color: '#006a9c',
  backgroundColor: 'white',
};

const styleText = {
  color: '#006a9c',
  fontSize: 20,
  fontWeight: 'bold',
};

export const Dropdown = props => {
  return (
    <SelectDropdown
      data={props.data}
      buttonStyle={props.updateStyle === undefined ? styles : styles2}
      buttonTextStyle={styleText}
      defaultButtonText={props.defaultButtonText}
      defaultValueByIndex={props.defaultValueByIndex}
      onSelect={(selectedItem, index) => {
        if (props.setImportance !== undefined) {
          props.setImportance(index);
        }
      }}
    />
  );
};
