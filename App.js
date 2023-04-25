import React from 'react';
import {StatusBar} from "react-native";
import Rules from './src/pages/Rules';
import Start from './src/pages/Start';

export default function App() {
  return(
    <>
      <StatusBar color="light"/>
      <Rules/>
    </>
  );
}

