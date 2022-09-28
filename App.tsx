import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";

import Home from "./src/screens/Home";
import { customTheme } from "./src/theme";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider theme={customTheme}>
      <Box>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
