import React, {useEffect, useCallback} from 'react';
import { View } from "react-native";
import { StatusBar } from "react-native";
import theme from './src/global/styles/theme';
import * as SplashScreen from "expo-splash-screen";
import Routes from './src/routes';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ThemeProvider } from 'styled-components';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])

  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return(
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <StatusBar barStyle="light-content"/>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </View>
  );
}

