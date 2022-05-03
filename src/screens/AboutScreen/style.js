import styled from 'styled-components/native';

export default {
    ContainerScroll:styled.ScrollView`
        flex:1;
    `,

    Container:styled.View`
        flex-direction:column;
        justify-content:center;
        border:2px solid #006a9c;
        margin:5px;
        padding:20px;
        border-radius:10px;
        margin-top:25px;
        backgroundColor:white;

    `,

    AboutBlock:styled.View`
        flex-direction:column;
        justify-content:center;
       
        border-radius:15px;
    `,

    AboutBlockContent:styled.View`
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:15px;
        border:2px solid #006a9c;
        border-radius:15px;
        width:100%;
        margin-bottom:15px;
    `,

    AboutBlockTitle:styled.Text`
        width:100%;
        color:#006a9c;
        font-weight:bold;
        font-size:20px;
        textAlign:center;
        margin-bottom:15px;
    `,

    AboutBlockInfo:styled.View`
        flex-direction:row;
        border-bottom-color: #006a9c;
        border-bottom-width: 1px;
        width:100%;
        justify-content:center;
    `,

    AboutBlockInfoLabel:styled.Text`
        color:#006a9c;
        font-weight:bold;
        font-size:16px;
        margin: 5px;
    `,

    AboutBlockInfoContent:styled.Text`
        color:#006a9c;
        font-size:16px;
        margin:5px;
        text-align:center;
    `,

}