import styled from 'styled-components/native';

export default {
    Container:styled.SafeAreaView`
        flex:1;
        padding:10px;
    `,

    Title:styled.Text`
        border-bottom-color: #006a9c;
        border-bottom-width: 2px;
        color:#006a9c;
        font-weight:bold;
        textAlign:center;
        font-size:20px;
        margin-top:10px;
        margin:15px;
    `,

    List:styled.FlatList`
        flex: 1;
        margin-top:15px
    `,

    Footer:styled.View`
        height:40px;
        flex-direction:row;
        justify-content:center;
    `,

    AddButton:styled.TouchableOpacity`
        width:150px;
        height:40px;
        backgroundColor:#006a9c;
        border:1px solid #006a9c;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        margin-top:8px;
    `,

    TextButton:styled.Text`
        color:white;
        font-weight:bold;
        font-size:20px;
    `
}