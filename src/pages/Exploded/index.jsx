import React, { useEffect }from "react";
import {Vibration} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Container, Logo, SucessImg, Title } from "./styles";
import ButtonComponent from "../../components/Buttons";

import logoImg from "../../assets/logoLightRed.png"
import explodedImg from "../../assets/bomba_explodiu.png"

export default function Disarmed(){
    const navigation = useNavigation();
    const handleNavToStart = () =>{
        navigation.navigate("Start")
    }
    useEffect(()=>{
        Vibration.vibrate(8000)
    },[])
    return(
        <Container>
            <Logo source={logoImg} style={{resizeMode: 'contain'}}/>
            <Title>Você falhou, a{"\n"} bomba explodiu!!!</Title>
            <SucessImg source={explodedImg} style={{resizeMode: 'contain'}}/>
            <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart}/>
        </Container>
    );
}