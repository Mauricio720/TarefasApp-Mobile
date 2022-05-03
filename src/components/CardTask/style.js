import styled from 'styled-components/native';

export default {
    Card:styled.View`
        width: 220px;
        height: 250px;
        borderWidth: 2px;
        borderColor:#006a9c;
        margin: 5px;
        align-items: center;
        flex-direction: column;
        color: #006a9c;
    `,

    Header:styled.View`
        margin-top:5px;
        position:relative;
        width:100%;
        flex-direction:row;
        align-items: center;
        justify-content:center;
    `,

    HeaderButtonsContainer:styled.View`
        position: absolute;
        top: -5px;
        right: 10px;
        width: 20px;
        
    `,

    HeaderButton:styled.TouchableOpacity`
        width:25px;
        height:25px;
        margin-top:10px;
        opacity:${(props)=>!props.disabled?1:0.6}

    `,

    ButtonIcon:styled.Image`
        width:25px;
        height:25px;
       
    `,

    CardIcon:styled.Image`
        width:80px;
        height:80px;
    `,

    CardTitle:styled.View`
        flex-direction:row;
        justify-content:center;
        align-items:center;
    `,

    Title:styled.Text`
        textAlign:center;
        margin-top:5px;
        font-size:18px;
        color: #006a9c;
    `,

    CardInfoArea:styled.View`
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top: 10px;
        text-align: center;
        position:relative;
    `,

    CardInfoSlot:styled.View`
        flex-direction:row;
    `,

    CardInfoLabel:styled.Text`
        margin-right: 5px;
        color: #006a9c;
        
        font-size:15px;
    `,

    CardInfo:styled.Text`
        color: #006a9c;
        font-size:16px;
    `,

    CardSeeMoreBtn:styled.TouchableOpacity``,

    SeeMoreBtnText:styled.Text`
         margin-top: 10px;
        text-align: center;
        font-weight: bold;
        padding: 2px;
        color: #006a9c;
    `

}