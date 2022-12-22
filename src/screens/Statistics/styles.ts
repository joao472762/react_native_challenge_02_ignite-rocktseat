import styled from "styled-components/native";

export const StatisticsContainer = styled.View`
    flex: 1;

   
    background-color: ${({theme:{colors}}) => colors.gray[200]};
`

export const StatisticsContent = styled.View`
    flex: 1;
    align-items: center;

    padding: 0 24px;
    padding-top: 32px;
    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    background-color: ${({theme:{colors}}) => colors.gray[100]};
`


export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`