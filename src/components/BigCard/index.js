import React, {useState, useEffect, useRef} from 'react';
import Api from '../../services/Api';
import Style from './style';
import {useStateValue} from '../../contexts/StateContext';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useNavigation, useRoute} from '@react-navigation/core';
import {
  weekDayToday,
  convertToDateObject,
  convertDate_ptBR,
  time,
} from '../../services/DateTime';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from '../../components/Dropdown/DropDownAddTask';
import ImagePicker from 'react-native-image-crop-picker';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const importanceTitle = ['', 'Importante', 'Muito Importante', 'Razoavel'];

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [importance, setImportance] = useState(0);
  const [start, setStart] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [end, setEnd] = useState('');
  const [showEndDatePicker, setShowEndPicker] = useState(false);
  const [date, setDate] = useState('');
  const weekList = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const [week, setWeek] = useState(weekList[weekDayToday()]);
  const [imageIcon, setImageIcon] = useState('');
  const [showAlertError, setShowAlertError] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(false);
  const [cardInfo, setCardInfo] = useState(route.params.cardInfo);
  const [context, dispatch] = useStateValue();
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  var idUser = context.user.user.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fillInformationCard();
    });

    return unsubscribe;
  }, [navigation]);

  const fillInformationCard = () => {
    setEdit(false);
    setId(cardInfo.id);
    setTitle(cardInfo.title);
    setDescription(cardInfo.description);
    setImportance(cardInfo.importance);
    setDate(cardInfo.date);
    setStart(cardInfo.start);
    setEnd(cardInfo.end);
    if (cardInfo.task_path !== '') {
      setImageIcon({uri: cardInfo.task_path});
    }

    setSelected(cardInfo.selected ? true : false);

    setWeek(weekList[convertToDateObject(cardInfo.date).getDay()]);
  };

  const openFileViewer = () => {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
    })
      .then(image => {
        setImageIcon({uri: image.path});
        let file = {
          uri: Platform.OS === 'ios' ? `file:///${image.path}` : image.path,
          type: image.mime,
          name: 'photo.jpg',
        };
        setImageIcon(file);
      })
      .catch(error => {});
  };

  const editMode = () => {
    setEdit(!edit);
    if (edit) {
      setStart(new Date());
      setEnd(new Date());
    } else {
      setStart(cardInfo.start);
      setEnd(cardInfo.end);
    }
  };

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      changeSelected();
    }
  }, [selected]);

  const updateTask = async () => {
    let response = await Api.updateTask(
      id,
      title,
      start,
      end,
      importance,
      description,
      imageIcon,
    );

    if (response.error) {
      setError(response.error);
      setShowAlertError(true);
    } else {
      navigation.navigate('HomeScreen');
    }
  };

  const changeSelected = async () => {
    let response = await Api.changeSelectedTask(id, idUser);
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
      navigation.navigate('HomeScreen');
    }
  };

  const onChangeTimeStart = (event, selectedDate) => {
    const currentDate = selectedDate || start;
    setShowStartDatePicker(Platform.OS === 'ios');
    setStart(time(currentDate));
  };

  const onChangeTimeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || start;
    setShowEndPicker(Platform.OS === 'ios');
    setEnd(time(currentDate));
  };

  return (
    <Style.BigCard>
      <Style.Scroller>
        <Style.ActionButtonClose
          onPress={() =>
            navigation.reset({
              index: 1,
              routes: [{name: 'HomeScreen'}],
            })
          }>
          <Style.ActionButtonText>X</Style.ActionButtonText>
        </Style.ActionButtonClose>

        <Style.Header>
          <Style.CardIconTouchable
            onPress={() => (edit ? openFileViewer() : null)}>
            <Style.CardIcon
              source={
                imageIcon === ''
                  ? require('../../assets/Images/typeTask.png')
                  : imageIcon
              }
              resizeMode="cover"
            />
          </Style.CardIconTouchable>
        </Style.Header>

        <Style.CardTitle>
          {!edit && <Style.Title>{title}</Style.Title>}
          {edit && (
            <Style.CardInfoSlot>
              <Style.CardInfoInput
                autoFocus={true}
                value={title}
                onChangeText={t => setTitle(t)}
              />
            </Style.CardInfoSlot>
          )}
        </Style.CardTitle>

        <Style.CardInfoArea>
          <Style.CardInfoSlot>
            {!edit && (
              <>
                <Style.CardInfoLabel>Hora Inicio:</Style.CardInfoLabel>
                <Style.CardInfo>{start}</Style.CardInfo>
              </>
            )}

            {edit && (
              <Style.InputGroup>
                <Style.Label>Hora Inicio:</Style.Label>

                <Style.InputDate>
                  <Style.InputValue>{start}</Style.InputValue>

                  <Style.InputTouchable
                    onPress={() => {
                      setShowStartDatePicker(true);
                    }}>
                    <Style.InputIcon
                      source={require('../../assets/Images/clock.png')}
                      resizeMode="cover"
                    />
                  </Style.InputTouchable>
                </Style.InputDate>

                {showStartDatePicker && (
                  <DateTimePicker
                    testID="timeTask"
                    value={new Date()}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTimeStart}
                  />
                )}
              </Style.InputGroup>
            )}
          </Style.CardInfoSlot>

          <Style.CardInfoSlot>
            {!edit && (
              <>
                <Style.CardInfoLabel>Hora Termino:</Style.CardInfoLabel>
                <Style.CardInfo>{end}</Style.CardInfo>
              </>
            )}

            {edit && (
              <Style.InputGroup>
                <Style.Label>Hora Inicio:</Style.Label>
                <Style.InputDate>
                  <Style.InputValue value={end} />

                  <Style.InputTouchable
                    onPress={() => {
                      setShowEndPicker(true);
                    }}>
                    <Style.InputIcon
                      source={require('../../assets/Images/clock.png')}
                      resizeMode="cover"
                    />
                  </Style.InputTouchable>
                </Style.InputDate>

                {showEndDatePicker && (
                  <DateTimePicker
                    testID="timeTask2"
                    value={new Date()}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTimeEnd}
                  />
                )}
              </Style.InputGroup>
            )}
          </Style.CardInfoSlot>

          <Style.CardInfoSlot>
            <Style.CardInfoLabel>Data:</Style.CardInfoLabel>
            <Style.CardInfo>{convertDate_ptBR(date)}</Style.CardInfo>
          </Style.CardInfoSlot>

          <Style.CardInfoSlot>
            <Style.CardInfoLabel>Dia Semana:</Style.CardInfoLabel>
            <Style.CardInfo>{week}</Style.CardInfo>
          </Style.CardInfoSlot>

          <Style.CardInfoSlot>
            {!edit && (
              <>
                <Style.CardInfoLabel>Importância:</Style.CardInfoLabel>
                <Style.CardInfo>{importanceTitle[importance]}</Style.CardInfo>
              </>
            )}

            {edit && (
              <Style.InputGroup>
                <Style.Label>Importância</Style.Label>
                <Dropdown
                  data={['', 'Importante', 'Muito Importante', 'Razoavel']}
                  setImportance={setImportance}
                  defaultValueByIndex={importance}
                  updateStyle={true}
                />
              </Style.InputGroup>
            )}
          </Style.CardInfoSlot>

          <Style.CardInfoSlot>
            {!edit && (
              <>
                <Style.CardInfoLabel>Descrição:</Style.CardInfoLabel>
                <Style.CardInfoDescription>
                  {description}
                </Style.CardInfoDescription>
              </>
            )}

            {edit && (
              <Style.InputGroup>
                <Style.Label>Descrição:</Style.Label>
                <Style.CardInfoDescriptionInput
                  value={description}
                  onChangeText={t => setDescription(t)}
                />
              </Style.InputGroup>
            )}
          </Style.CardInfoSlot>
        </Style.CardInfoArea>

        <Style.Footer>
          <Style.ActionButton
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'RepeatWeek',
                    params: {
                      id: cardInfo.id,
                      infoRepeat: cardInfo.infoRepeat,
                    },
                  },
                ],
              })
            }>
            <Style.ActionButtonIcon
              source={require('../../assets/Images/repeat.png')}
              resizeMode="contain"
            />
          </Style.ActionButton>

          <Style.ActionButton
            onPress={() => {
              setSelected(!selected);
            }}>
            {selected && (
              <Style.ActionButtonIcon
                source={require('../../assets/Images/check.png')}
                resizeMode="contain"
              />
            )}

            {!selected && (
              <Style.ActionButtonIcon
                source={require('../../assets/Images/checkEmpty.jpg')}
                resizeMode="contain"
              />
            )}
          </Style.ActionButton>

          {edit && (
            <Style.ActionButton
              onPress={() => {
                updateTask();
              }}>
              <Style.ActionButtonIcon
                source={require('../../assets/Images/save.png')}
                resizeMode="contain"
              />
            </Style.ActionButton>
          )}
          <Style.ActionButton onPress={editMode}>
            <Style.ActionButtonIcon
              source={require('../../assets/Images/edit.png')}
              resizeMode="contain"
            />
          </Style.ActionButton>

          <Style.ActionButton
            onPress={() => {
              setShowAlertError(true);
            }}>
            <Style.ActionButtonIcon
              source={require('../../assets/Images/trash.png')}
              resizeMode="contain"
            />
          </Style.ActionButton>
        </Style.Footer>
      </Style.Scroller>

      <AwesomeAlert
        show={showAlertError}
        showProgress={false}
        title={error}
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
    </Style.BigCard>
  );
};
