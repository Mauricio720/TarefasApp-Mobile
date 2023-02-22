import styled from 'styled-components/native';

export default {
  ContainerScroll: styled.ScrollView`
    flex: 1;
    background-color: white;
  `,

  Title: styled.Text`
    border-bottom-color: #006a9c;
    border-bottom-width: 2px;
    color: #006a9c;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin: 15px;
  `,

  Container: styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    background-color: white;
  `,

  Conquest: styled.View`
    width: 150px;
    flex-direction: column;
    align-items: center;
    border: 3px solid #006a9c;
    padding: 5px;
    margin: 5px;
    overflow: hidden;
    border-radius: 5px;
  `,

  ConquestImg: styled.Image`
    width: 80px;
    height: 80px;
  `,

  ConquestDescription: styled.Text`
    color: white;
    margin-top: 10px;
    background-color: #006a9c;
    width: 100%;
    height: 30px;
    text-align: center;
    padding: 5px;
    font-size: 15px;
  `,

  ConquestValue: styled.Text`
    font-size: 25px;
    text-align: center;
    color: #006a9c;
    font-weight: bold;
  `,
};
