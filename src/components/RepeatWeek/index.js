import React, {useState, useEffect} from 'react';
import Style from './style';
import {useNavigation, useRoute} from '@react-navigation/core';
import Api from '../../services/Api';
import {useStateValue} from '../../contexts/StateContext';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const [context, dispatch] = useStateValue();

  const [repeatWeek, setRepeatWeek] = useState({});
  const [allDaysSelected, setAllDaysSelected] = useState([]);
  const [idTask, setIdTask] = useState(params.id);

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log(params.infoRepeat);
      initialInformation();
      setRepeatDays();
    });

    return () => {
      navigation.removeListener('focus', () => {
        setRepeatDays();
      });
    };
  }, [navigation]);

  const initialInformation = () => {
    var weekSelected = {};

    if (params.infoRepeat !== null) {
      weekSelected = {
        everyDay: params.infoRepeat.everyday === 0 ? false : true,
        mon: params.infoRepeat.monday === 0 ? false : true,
        tue: params.infoRepeat.tuesday === 0 ? false : true,
        wed: params.infoRepeat.wednesday === 0 ? false : true,
        thu: params.infoRepeat.thursday === 0 ? false : true,
        fri: params.infoRepeat.friday === 0 ? false : true,
        sat: params.infoRepeat.saturday === 0 ? false : true,
        sun: params.infoRepeat.sunday === 0 ? false : true,
      };
    } else {
      weekSelected = {
        everyDay: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      };
    }
    setRepeatWeek(weekSelected);
  };

  const setRepeatDays = () => {
    let weekSelected = {...repeatWeek};
    let newDays = [...allDaysSelected];

    if (weekSelected.sun) {
      newDays.push('0');
    }
    if (weekSelected.mon) {
      newDays.push('1');
    }
    if (weekSelected.tue) {
      newDays.push('2');
    }
    if (weekSelected.wed) {
      newDays.push('3');
    }
    if (weekSelected.thu) {
      newDays.push('4');
    }

    if (weekSelected.fri) {
      newDays.push('5');
    }

    if (weekSelected.sat) {
      newDays.push('6');
    }
    if (weekSelected.everyDay) {
      newDays.push('7');
    }

    setAllDaysSelected(newDays);
  };

  const setWeekSelected = (index, status) => {
    let weekSelected = {...repeatWeek};
    let weekDay = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'everyDay'];
    eval('weekSelected.' + weekDay[index] + '=!weekSelected.' + weekDay[index]);
    setRepeatWeek(weekSelected);

    let newIndex = index.toString();
    let newDays = [...allDaysSelected];

    if (status === false) {
      newDays.push(newIndex);
      setAllDaysSelected(newDays);
    } else {
      let index = newDays.findIndex(item => {
        if (item == newIndex) {
          return true;
        } else {
          return false;
        }
      });

      newDays.splice(index, 1);
      setAllDaysSelected(newDays);
    }
  };

  const sendRepeatDays = async () => {
    let daysSelected = allDaysSelected.join(',');
    let json = await Api.sendRepeatDays(idTask, daysSelected);
    if (json.error) {
      alert(json.error);
    } else {
      navigation.goBack();
    }
  };

  return (
    <Style.RepeatWeek>
      <Style.ActionButtonClose
        onPress={() => navigation.navigate('HomeScreen')}>
        <Style.ActionButtonText>X</Style.ActionButtonText>
      </Style.ActionButtonClose>
      <Style.Scroller>
        <Style.ContainerTitle>
          <Style.Title>Escolha os dias em que vai repetir a tarefa</Style.Title>
        </Style.ContainerTitle>

        <Style.ContainerItems>
          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(7, repeatWeek.everyDay);
              }}>
              {repeatWeek.everyDay && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.everyDay === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Todos os dias</Style.RepeatText>
          </Style.RepeatItem>

          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(1, repeatWeek.mon);
              }}>
              {repeatWeek.mon && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.mon === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Segunda</Style.RepeatText>
          </Style.RepeatItem>

          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(2, repeatWeek.tue);
              }}>
              {repeatWeek.tue && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.tue === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Terça</Style.RepeatText>
          </Style.RepeatItem>

          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(3, repeatWeek.wed);
              }}>
              {repeatWeek.wed && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.wed === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Quarta</Style.RepeatText>
          </Style.RepeatItem>

          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(4, repeatWeek.thu);
              }}>
              {repeatWeek.thu && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.thu === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Quinta</Style.RepeatText>
          </Style.RepeatItem>

          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(5, repeatWeek.fri);
              }}>
              {repeatWeek.fri && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.fri === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Sexta</Style.RepeatText>
          </Style.RepeatItem>

          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(6, repeatWeek.sat);
              }}>
              {repeatWeek.sat && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.sat === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Sábado</Style.RepeatText>
          </Style.RepeatItem>

          <Style.RepeatItem>
            <Style.RepeatItemCheckTouch
              onPress={() => {
                setWeekSelected(0, repeatWeek.sun);
              }}>
              {repeatWeek.sun && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/check.png')}
                />
              )}

              {repeatWeek.sun === false && (
                <Style.RepeatItemCheckImage
                  source={require('../../assets/Images/checkEmpty.jpg')}
                />
              )}
            </Style.RepeatItemCheckTouch>
            <Style.RepeatText>Domingo</Style.RepeatText>
          </Style.RepeatItem>
        </Style.ContainerItems>
      </Style.Scroller>

      <Style.Footer>
        <Style.ButtonSave
          onPress={() => {
            sendRepeatDays();
          }}>
          <Style.ButtonSaveText>Salvar</Style.ButtonSaveText>
        </Style.ButtonSave>
      </Style.Footer>
    </Style.RepeatWeek>
  );
};
