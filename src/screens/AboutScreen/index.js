import React from 'react';
import Style from './style';

export default ()=>{
    return (
        <Style.ContainerScroll>
            <Style.Container>
                <Style.AboutBlock>
                    <Style.AboutBlockContent>
                        <Style.AboutBlockTitle>Desenvolvedor</Style.AboutBlockTitle>

                        <Style.AboutBlockInfo>
                            <Style.AboutBlockInfoLabel>Nome:</Style.AboutBlockInfoLabel>
                            <Style.AboutBlockInfoContent>Mauricio Ferreira</Style.AboutBlockInfoContent>
                        </Style.AboutBlockInfo>

                        <Style.AboutBlockInfo>
                            <Style.AboutBlockInfoLabel>Email:</Style.AboutBlockInfoLabel>
                            <Style.AboutBlockInfoContent>mauricio-ferreira2015@outlook.com</Style.AboutBlockInfoContent>
                        </Style.AboutBlockInfo>
                    </Style.AboutBlockContent>

                    <Style.AboutBlockContent>
                        <Style.AboutBlockTitle>Design</Style.AboutBlockTitle>

                        <Style.AboutBlockInfo>
                            <Style.AboutBlockInfoLabel>Nome</Style.AboutBlockInfoLabel>
                            <Style.AboutBlockInfoContent>Samuel Santos de Souza</Style.AboutBlockInfoContent>
                        </Style.AboutBlockInfo>

                        <Style.AboutBlockInfo>
                            <Style.AboutBlockInfoLabel>Email:</Style.AboutBlockInfoLabel>
                            <Style.AboutBlockInfoContent>santo.samu.samuel@gmail.com</Style.AboutBlockInfoContent>
                        </Style.AboutBlockInfo>
                    </Style.AboutBlockContent>

                    
                    <Style.AboutBlockContent>
                        <Style.AboutBlockTitle>Icones</Style.AboutBlockTitle>

                        <Style.AboutBlockInfo>
                           <Style.AboutBlockInfoContent>Icons made by Freepik from www.flaticon.com</Style.AboutBlockInfoContent>
                        </Style.AboutBlockInfo>

                        <Style.AboutBlockInfo>
                            <Style.AboutBlockInfoContent>Icons made by Those Icons from www.flaticon.com</Style.AboutBlockInfoContent>
                        </Style.AboutBlockInfo>
                    </Style.AboutBlockContent>

                </Style.AboutBlock>
            </Style.Container>
        </Style.ContainerScroll>
    );
}