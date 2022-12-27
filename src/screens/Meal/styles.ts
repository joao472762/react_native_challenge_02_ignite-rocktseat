import styled from "styled-components/native";

interface MealStyledProps  {
    isInDiet: boolean;
}

export const MealContainer = styled.View<MealStyledProps>`
    flex: 1;
    background-color: ${({theme:{colors},isInDiet}) => 
        isInDiet ? colors.green[100] : colors.red[100]
    };
`

export const MealContent = styled.View`
    flex: 1;
    align-items: flex-start;
  
    padding: 32px 24px;
    padding-bottom: 24px;
    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    background-color: ${({theme:{colors}}) => colors.gray[100]};
`

export const DietStatus = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;

    padding: 0 16px;
    margin-top: 24px;
    border-radius: 16px;

    width: 144px;
    height:  34px;

    background-color: ${({theme:{colors}}) => colors.gray[200]};
`




export const DietIndicator = styled.View<MealStyledProps>`
    height:  8px;
    width:  8px;
    border-radius: 4px;
    margin-right:  8px;

    background-color: ${({theme:{colors}, isInDiet}) => 
        isInDiet? colors.green[500] : colors.red[500]
    };
`

export const Footer = styled.View`
    margin-top:  auto;
    width:  100%;
`