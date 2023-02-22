import React, {useState, useEffect, useRef} from 'react';
import Api from '../../services/Api';
import Style from './style';
import {useStateValue} from '../../contexts/StateContext';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useNavigation} from '@react-navigation/core';
import {verifyDateInPast} from '../../services/DateTime';

export default props => {
  const id = props.data.id;
  const importanceTitle = ['', 'Importante', 'Muito Importante', 'Razoavel'];
  const [selected, setSelected] = useState(props.data.selected);
  const [showAlert, setShowAlert] = useState(false);
  const [context, dispatch] = useStateValue();
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigation = useNavigation();
  let idUser = context.user.user.id;
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      changeSelected();
    }
  }, [selected]);

  const changeSelected = async () => {
    let response = await Api.changeSelectedTask(id, idUser);
    props.data.selected = selected;

    if (response.error) {
      alert(response.error);
    }

    if (response.successToday) {
      setShowAlertSuccess(true);
      setSuccessMessage(response.msg);
    }
  };

  const deleteTask = async () => {
    let response = await Api.deleteTask(id, idUser);
    if (response.error) {
      alert(response.error);
    } else {
      props.refreshFunction();
    }
  };

  const changeScreen = () => {
    navigation.navigate('BigCard', {cardInfo: props.data});
  };

  return (
    <Style.Card>
      <Style.Header>
        <Style.CardIcon
          source={
            props.data.task_path
              ? {uri: `${props.data.task_path}`}
              : require('../../assets/Images/typeTask.png')
          }
          resizeMode="cover"
        />
        <Style.HeaderButtonsContainer>
          <Style.HeaderButton
            disabled={verifyDateInPast(props.data.date) ? false : true}
            onPress={() => {
              setSelected(!selected);
            }}>
            {selected ? (
              <Style.ButtonIcon
                source={require('../../assets/Images/check.png')}
              />
            ) : (
              <Style.ButtonIcon
                source={require('../../assets/Images/checkEmpty.jpg')}
              />
            )}
          </Style.HeaderButton>

          <Style.HeaderButton
            disabled={verifyDateInPast(props.data.date) ? false : true}
            onPress={() => {
              setShowAlert(true);
            }}>
            <Style.ButtonIcon
              source={require('../../assets/Images/trash.png')}
            />
          </Style.HeaderButton>
        </Style.HeaderButtonsContainer>
      </Style.Header>

      <Style.CardTitle>
        <Style.Title>{props.data.title}</Style.Title>
      </Style.CardTitle>

      <Style.CardInfoArea>
        <Style.CardInfoSlot>
          <Style.CardInfoLabel>Hora:</Style.CardInfoLabel>
          <Style.CardInfo>{props.data.start}</Style.CardInfo>
        </Style.CardInfoSlot>

        <Style.CardInfoSlot>
          <Style.CardInfoLabel>Até</Style.CardInfoLabel>
          <Style.CardInfo>{props.data.end}</Style.CardInfo>
        </Style.CardInfoSlot>

        <Style.CardInfoSlot>
          <Style.CardInfo>
            {importanceTitle[props.data.importance]}
          </Style.CardInfo>
        </Style.CardInfoSlot>
      </Style.CardInfoArea>

      <Style.CardSeeMoreBtn onPress={changeScreen}>
        <Style.SeeMoreBtnText>toque para ver mais</Style.SeeMoreBtnText>
      </Style.CardSeeMoreBtn>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Tem certeza que deseja excluir essa tarefa?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Não"
        confirmText="Sim"
        confirmButtonColor="#006a9c"
        cancelButtonColor="red"
        onConfirmPressed={() => {
          deleteTask();
        }}
        onCancelPressed={() => {
          setShowAlert(false);
        }}
      />

      <AwesomeAlert
        show={showAlertSuccess}
        showProgress={false}
        title="Parabens"
        message={successMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#006a9c"
        cancelButtonColor="red"
        onConfirmPressed={() => {
          setShowAlertSuccess(false);
        }}
      />
    </Style.Card>
  );
};
