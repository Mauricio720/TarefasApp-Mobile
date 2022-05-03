import styled from 'styled-components/native';

export default {
    Container:styled.View`
        margin:5px;
        flex-direction:row;
        justifyContent:center;
        alignItems:center;
        flexWrap:wrap;
        marginTop:15px;
        marginBottom:15px;
        borderWidth:2px;
        borderColor:#006a9c;
        padding:5px;
    `,

    WeekendItem:styled.TouchableOpacity`
        height:40px;
        width:100px;
        backgroundColor:${props => props.selected ? 'blue' : '#006a9c'};
        margin:5px;
    `,

    WeekendItemText:styled.Text`
        color:white;
        textAlign:center;
        lineHeight:40px;
    `
}


