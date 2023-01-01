import { ModalProps  } from "react-native";

import { useMeals } from "@hooks/useMeals";
import { Heading } from "@components/Heading";

import {ModalContainer, Overlay, ModalContent, Button, Footer} from './styles'

interface Props extends ModalProps {
    closeModal: () => void;
    mealId: string,
    navigateToHomeScreen: () => void
}

export function Modal({mealId,navigateToHomeScreen, closeModal,...rest}: Props){
    const {deleteOneMeal} = useMeals()


    function handleCloseModal(){
        closeModal()
    }

    function handleDeleteOneMeal(){
        deleteOneMeal(mealId)
        navigateToHomeScreen()
    }

    

    return (
        <ModalContainer
            transparent
            animationType="fade"
            statusBarTranslucent
            {...rest}>
            <Overlay>
                <ModalContent>
                    <Heading size="lg">
                        Deseja realmente excluir o
                        {'/n'} registro da refeição?
                    </Heading>
                    <Footer>
                        <Button
                            type="secundary"
                            title="Cancelar"
                            onPress={handleCloseModal}
                        />
                        <Button
                            title="Sim, excluir"
                            onPress={handleDeleteOneMeal}
                        />
                    </Footer>
                </ModalContent>
            </Overlay>
        </ModalContainer>
    )
}