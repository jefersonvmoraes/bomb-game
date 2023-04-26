import React from "react";
import ButtonComponent from "../../components/Buttons";
import InputPassword from "../../components/PlayTogether/InputPassword";
import InputTimer from "../../components/PlayTogether/InputTimer";
// import { BombMessage } from "../../components/PlayTogether/InputTimer/styles";
import TipInput from "../../components/PlayTogether/TipInput";
import { Container, Title, BombMessage, ScrollContainer } from "./styles";
import {useNavigation} from "@react-navigation/native";

export default function PlayTogether(){
    const navigation = useNavigation();
    const handleStartGame = ()=>{}
    const handleNavToStart = ()=>{navigation.navigate("Start")}
    return(
        <ScrollContainer>
            <Container>
                <Title>Bomb Game Dupla</Title>
                <InputTimer/>
                {/* <BombMessage>Menssagem de erro temporaria</BombMessage> */}
                <TipInput/>
                <InputPassword/>
                <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame}/>
                <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart}/>
            </Container>
        </ScrollContainer>
    );
}