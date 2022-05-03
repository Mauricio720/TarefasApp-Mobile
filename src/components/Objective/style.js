import styled from 'styled-components/native';

export default {
    Container:styled.View`
        height:180px;
        border:2px solid #006a9c;
        align-items:center;
        margin-top:10px;
    `,

    Content:styled.View`
        width:100%;
        flex-direction:column;
        padding:15px;
    `,

    Item:styled.View`
        flex-direction:row;
        margin:5px;
    `,

    Label:styled.Text`
        width:80px;
        margin-right:5px;
        color:#006a9c;
        font-size:20px;
    `,

    ItemText:styled.Text`
        width:70%;
        color:#006a9c;
        font-size:20px;
        border-bottom-color: #006a9c;
        border-bottom-width: 1px;
        text-align:center;
    `,

    ItemInput:styled.TextInput`
        width:70%;
        height:25px;
        color:#006a9c;
        border-bottom-color: #006a9c;
        border-bottom-width: 1px;
        font-size:20px;
        paddingVertical: 1px;
        textAlign:center;
    `,

    ItemSelect:styled.SectionList`
        width:80%;
        height:25px;
        color:#006a9c;
        border-bottom-color: #006a9c;
        border-bottom-width: 1px;
        font-size:15px;
        paddingVertical: 1px;
    `,

    ActionsContainer:styled.View`
        margin-top:10px;
        flex-direction:row;
        justify-content:flex-end;
    `,

    Action:styled.TouchableOpacity`
        width: 25px;
        height: 25px;
        margin: 2px;
    `,

    ActionIcon:styled.Image`
        width: 25px;
        height: 25px;
    `,

    ItemTextAction:styled.Text`
        color:red;
        font-weight:bold;
        font-size:18px;
    `
    
    
    
}