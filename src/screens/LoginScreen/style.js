import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #006a9c;
    flex-direction: column;
    justify-content: center;
  `,

  Scroller: styled.ScrollView`
    flex: 1;
  `,

  Logo: styled.Image`
    height: 60px;
    margin: 5px;
    margin-top: 25px;
  `,

  LoginArea: styled.View`
    align-items: center;
    background-color: white;
    margin-top: 80px;
    padding: 5px;
  `,

  ContainerInfo: styled.View`
    width: 95%;
    border-radius: 15px;
    background-color: #006a9c;
    align-items: center;
    margin-top: 25px;
    padding: 20px;
  `,

  InputGroup: styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  `,

  InputIcon: styled.Image`
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  `,

  Field: styled.TextInput`
    width: 90%;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;
  `,

  Button: styled.TouchableOpacity`
    margin-top: ${props => (props.top ? props.top + 'px' : '10px')};
    width: ${props => (props.normalButton ? '100px' : 'auto')};
  `,

  ButtonText: styled.Text`
    background-color: ${props =>
      props.backgroundButton ? props.backgroundButton : 'transparent'};
    font-size: 20px;
    font-weight: bold;
    color: ${props => (props.color ? props.color : '#006a9c')};
    text-align: center;
    padding: 5px;
  `,

  ButtonIcon: styled.Image`
    width: 28px;
    height: 28px;
    margin-right: 15px;
  `,

  ButtonContainer: styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,

  Footer: styled.View`
    margin-top: 25px;
    min-height: 100px;
    padding: 10px;
    flex-direction: column;
  `,

  ContainerLoading: styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  LoadingIcon: styled.ActivityIndicator``,
};
