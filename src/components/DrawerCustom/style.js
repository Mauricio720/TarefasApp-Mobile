import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    flex-direction: column;
    background-color: white;
  `,

  ProfileArea: styled.View`
    margin-top: 10px;
    height: 150px;
    align-items: center;
    justify-content: center;
  `,

  ProfileUser: styled.Image`
    width: 160px;
    height: 160px;
    margin-top: 45px;
  `,

  ProfileName: styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #006a9c;
    margin-top: 10px;
  `,

  ContainerMenu: styled.View`
    flex: 1;
    margin-top: 60px;
    flex-direction: column;
    background-color: #006a9c;
    padding-top: 25px;
    padding-bottom: 25px;
  `,

  MenuTouch: styled.TouchableOpacity`
    height: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
    flex-direction: row;
  `,

  MenuIcon: styled.Image`
    width: 35px;
    height: 35px;
    margin-left: 20px;
  `,

  MenuText: styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-left: 20px;
  `,
};
