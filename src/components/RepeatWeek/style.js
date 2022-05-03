import styled from 'styled-components/native';

export default {
    RepeatWeek:styled.SafeAreaView`
        flex:1;
        backgroundColor:white;
        flex-direction:column;
        justifyContent:center;
        alignItems:center;
    `,

    Scroller:styled.ScrollView`
        flex:1;
    `,

    ContainerItems:styled.View`
        margin-top:35px;
        flex-direction:column;
        justifyContent:center;
    `,

    ContainerTitle:styled.View`
        flex-direction:row;
        justifyContent:center;
        marginTop:5px;
    `,

    Title:styled.Text`
        color: #006a9c;
        fontWeight: bold;
        textAlign: center;
        fontSize:20px;
        width:80%;
        textAlign:center;
    `,

    RepeatItem:styled.View`
        flex-direction:row;
        marginTop:15px;
        marginBottom:15px;
    `,

    RepeatItemCheckTouch:styled.TouchableOpacity`
        width:30px;
        height:30px;
        marginRight:15px;
    `,

    RepeatItemCheckImage:styled.Image`
        width:30px;
        height:30px;
    `,

    RepeatText:styled.Text`
        color: #006a9c;
        font-size: 20px;
        font-weight: bold;
    `,

    Footer:styled.View``,

    ButtonSave:styled.TouchableOpacity`
        width:120px;
        height:30px;
        backgroundColor:#006a9c;
        margin:10px;
    `,

    ButtonSaveText:styled.Text`
        color:white;
        fontSize:20px;
        textAlign:center;
    `,

    ActionButtonClose:styled.TouchableOpacity`
        position:absolute;
        top:0px;
        right:5px;
    `,

    ActionButtonText:styled.Text`
        font-size:25px;
        font-weight:bold;
        color:#006a9c;

    `,

}