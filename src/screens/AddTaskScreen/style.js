import styled from 'styled-components/native';

export default {
    Container:styled.SafeAreaView`
        flex:1;
        flex-direction:column;
        justify-content:center;
        backgroundColor:white;
    `,

    Scroller:styled.ScrollView`
        flex: 1;
    `,
    
    TitleContainer:styled.View`
        flex-direction:row;
        justify-content:center;
        align-items:center;
        margin-bottom:40px;
    `,

    Title:styled.Text`
        width:60%;
        border-width: 2px;
        borderBottomColor:#006a9c;
        borderTopColor:#006a9c;
        borderLeftWidth:0;
        borderRightWidth:0;
        borderTopWidth:0;
        font-size:20px;
        color:#006a9c;
        textAlign:center;
        font-weight:bold;
        padding:10px
    `,

    IconTouchable:styled.TouchableOpacity`
        width:180px;
        height:180px;
    `,

    Icon:styled.Image`
        width:180px;
        height:180px;
    `,

    ContainerInput:styled.View`
        marginTop:20px;
    `,

    InputGroup:styled.View`
        color: #006a9c;
        flex-direction: column;
        justify-content:center;
        alignItems:center;
        margin-top:15px;
    `,

    Label:styled.Text`
        color: #006a9c;
        font-size:18px;
        font-weight:bold;
    `,

    Input:styled.TextInput`
        width:80%;
        height: 50px;
        font-size: 18px;
        font-weight: bold;
        color: #006a9c;
        borderWidth: 2px;
        borderColor:#006a9c;
        background-color: white;
        padding-left:15px;
             
    `,

    InputDescription:styled.TextInput`
        width:80%;
        height: 80px;
        font-size: 18px;
        color: #006a9c;
        borderWidth: 2px;
        borderColor:#006a9c;
        background-color: white;
    `,

    InputDate:styled.View`
        width:80%;
        height: 50px;
        font-size: 19px;
        font-weight: bold;
        color: #006a9c;
        borderWidth: 2px;
        borderColor:#006a9c;
        background-color: white;
        flex-direction:row;
        align-items:center;
    `,

    InputValue:styled.TextInput`
        flex:1;
        color:#006a9c;
        font-size: 18px;
        font-weight: bold;
    `,

    InputTouchable:styled.TouchableOpacity`
        width:30px;
        height:30px;
        margin-left:5px;
        margin-right:5px;
    `,

    InputIcon:styled.Image`
        width:30px;
        height:30px;
    `,

    Footer:styled.View`
        flex-direction:row;
        justify-content:center;
        align-items:center;
    `,

    ButtonAdd:styled.TouchableOpacity`
        width:150px;
        height:40px;
        backgroundColor:#006a9c;
        borderWidth:1px;
        borderColor:#006a9c;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        margin-top:8px;
        margin-bottom:5px;
    `,

    ButtonAddText:styled.Text`
        color:white;
    `,

    ActionButtonClose:styled.TouchableOpacity`
        position:absolute;
        top:0px;
        right:15px;
    `,

    ActionButtonText:styled.Text`
        font-size:25px;
        font-weight:bold;
        color:#006a9c;

    `,

    ContainerLoading:styled.SafeAreaView`
        flex:1;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    `,

    LoadingIcon:styled.ActivityIndicator`
    `,
  

}