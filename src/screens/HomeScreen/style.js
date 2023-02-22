import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: white;
  `,

  Scroller: styled.ScrollView`
    flex: 1;
  `,

  SearchTaskInput: styled.TextInput`
    margin: 5px;
    height: 45px;
    border-width: 2px;
    border-color: #006a9c;
    border-radius: 15px;
    padding: 15px;
    font-size: 15px;
  `,

  HomeTitleContainer: styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  `,

  Title: styled.Text`
    width: 60%;
    border-width: 1px;
    border-bottom-color: #006a9c;
    border-top-color: #006a9c;
    border-left-width: 0;
    border-right-width: 0;
    font-size: 20px;
    color: #006a9c;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
  `,

  EmptyTaskTitle: styled.Text`
    width: 60%;
    border-width: 2px;
    border-bottom-color: #006a9c;
    border-top-color: #006a9c;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    font-size: 18px;
    color: #006a9c;
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
  `,

  ActionsFilterContainer: styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  `,

  FilterSelectContainer: styled.View`
    flex-direction: column;
    margin: 5px;
  `,

  FilterSelectLabel: styled.Text`
    color: #006a9c;
    font-size: 15px;
    font-weight: bold;
  `,

  AddTaskButton: styled.TouchableOpacity`
    position: absolute;
    width: 60px;
    height: 60px;
    bottom: 20px;
    right: 5px;
  `,

  CalendarButton: styled.TouchableOpacity`
    position: absolute;
    width: 60px;
    height: 60px;
    bottom: 20px;
    left: 5px;
  `,

  ActionIcon: styled.Image`
    width: 60px;
    height: 60px;
  `,

  InputText: styled.TextInput`
    border-width: 2px;
    width: 270px;
    border-color: #006a9c;
    height: 35px;
    color: #006a9c;
    padding: 5px;
  `,

  ContainerTasks: styled.View`
    flex: 1;
    margin-top: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  ContainerLoading: styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  LoadingIcon: styled.ActivityIndicator``,
};
