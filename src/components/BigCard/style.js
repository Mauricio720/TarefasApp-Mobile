import styled from 'styled-components/native';

export default {
  BigCard: styled.SafeAreaView`
    background-color: white;
    flex: 1;
    border-width: 2px;
    border-color: #006a9c;
    margin: 5px;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    color: #006a9c;
  `,

  Scroller: styled.ScrollView`
    width: 100%;
    padding: 10px;
  `,

  Header: styled.View`
    margin-top: 5px;
    position: relative;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,

  HeaderButtonsContainer: styled.View`
    position: absolute;
    top: -5px;
    right: 10px;
    width: 20px;
  `,

  HeaderButton: styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    margin-top: 10px;
  `,

  ButtonIcon: styled.Image`
    width: 25px;
    height: 25px;
  `,

  CardIconTouchable: styled.TouchableOpacity`
    width: 180px;
    height: 180px;
  `,

  CardIcon: styled.Image`
    width: 160px;
    height: 160px;
  `,

  CardTitle: styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  Title: styled.Text`
    text-align: center;
    margin-top: 25px;
    font-size: 25px;
    color: #006a9c;
    border-bottom-color: #006a9c;
    border-bottom-width: 2px;
    width: 60%;
  `,

  CardInfoArea: styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    text-align: center;
    position: relative;
  `,

  CardInfoSlot: styled.View`
    margin-top: 10px;
    width: 100%;
    flex-direction: column;
  `,

  CardInfoLabel: styled.Text`
    margin-right: 5px;
    color: #006a9c;
    font-size: 22px;
    font-weight: bold;
  `,

  CardInfo: styled.Text`
    color: #006a9c;
    font-size: 22px;
    font-weight: bold;
    border-bottom-color: #006a9c;
    border-bottom-width: 2px;
  `,

  CardInfoInput: styled.TextInput`
    color: #006a9c;
    font-size: 28px;
    font-weight: bold;
    border-bottom-color: #006a9c;
    border-bottom-width: 2px;
    text-align: center;
  `,

  CardInfoDescription: styled.Text`
    color: #006a9c;
    font-size: 22px;
    font-weight: bold;
    border-color: #006a9c;
    border-width: 2px;
    height: 80px;
    padding: 5px;
  `,

  CardInfoDescriptionInput: styled.TextInput`
    color: #006a9c;
    font-size: 22px;
    border-color: #006a9c;
    border-width: 2px;
    height: 80px;
    padding: 5px;
    font-weight: bold;
  `,

  InputGroup: styled.View`
    color: #006a9c;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
  `,

  Label: styled.Text`
    color: #006a9c;
    font-size: 22px;
    font-weight: bold;
    margin: 0px;
    padding: 0px;
  `,

  Input: styled.TextInput`
    width: 80%;
    height: 40px;
    color: #006a9c;
    border-width: 2px;
    border-color: #006a9c;
    background-color: white;
    padding-left: 15px;
    font-size: 22px;
  `,

  InputDescription: styled.TextInput`
    width: 80%;
    height: 80px;
    font-size: 22px;
    color: #006a9c;
    border-width: 2px;
    border-color: #006a9c;
    background-color: white;
  `,

  InputDate: styled.View`
    height: 40px;
    color: #006a9c;
    flex-direction: row;
    align-items: center;
    border-bottom-color: #006a9c;
    border-bottom-width: 2px;
  `,

  InputValue: styled.TextInput`
    flex: 1;
    color: #006a9c;
    font-size: 20px;
    font-weight: bold;
    height: 45px;
  `,

  InputTouchable: styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
  `,

  InputIcon: styled.Image`
    width: 30px;
    height: 30px;
  `,

  Footer: styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
  `,

  ActionButton: styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    margin: 10px;
  `,

  ActionButtonIcon: styled.Image`
    width: 40px;
    height: 40px;
  `,

  ActionButtonClose: styled.TouchableOpacity`
    position: absolute;
    top: 0px;
    right: 5px;
  `,

  ActionButtonText: styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #006a9c;
  `,

  ContainerLoading: styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  LoadingIcon: styled.ActivityIndicator``,
};
