import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: white;
  `,

  Scroller: styled.ScrollView`
    flex: 1;
  `,

  ProfileArea: styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  `,

  ProfileTouchable: styled.TouchableOpacity`
    width: 160px;
    height: 160px;
  `,

  ProfileUser: styled.Image`
    width: 160px;
    height: 160px;
    margin-top: 5px;
  `,

  Field: styled.View`
    margin: 10px;
    height: 65px;
    flex-direction: column;
    margin-top: 10px;
  `,

  FieldLabel: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #006a9c;
  `,

  FieldInput: styled.TextInput`
    border: 2px solid #006a9c;
    height: 40px;
    text-align: center;
    font-size: 18px;
    color: #006a9c;
  `,

  FieldStaticInput: styled.Text`
    border: 2px solid #006a9c;
    height: 40px;
    text-align: center;
    font-size: 18px;
    color: #006a9c;
    padding: 5px;
  `,

  Footer: styled.View`
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: column;
    align-items: center;
  `,

  Button: styled.TouchableOpacity`
    width: 140px;
    height: 40px;
    background-color: #006a9c;
    border: 1px solid #006a9c;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    padding: 5px;
  `,

  ButtonText: styled.Text`
    text-align: center;
    color: white;
  `,
};
