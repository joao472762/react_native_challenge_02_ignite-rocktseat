import styled from "styled-components/native";

export interface DietSelectorProps  {
    isInDiet: boolean;
 
}
export const CardContainerSelector = styled.TouchableOpacity<DietSelectorProps>`
    display:  flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    height: 50px;
    width: 48%;

    border-style: solid;
    border-width: 1px;
    border-radius: 6px;



    background-color: ${({theme:{colors}}) => colors.gray[200]}

`

export const CardIndicator = styled.View<DietSelectorProps>`
    width: 8px;
    height: 8px;

    border-radius: 4px;
    background-color: ${({theme:{colors},isInDiet}) => 
        isInDiet ? colors.green[500]: colors.red[500]
    };
    margin-right: 8px;


`
