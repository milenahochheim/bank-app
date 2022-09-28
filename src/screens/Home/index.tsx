import React from "react";
import { Box, Text } from "native-base";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Options from "../../components/Options";
import History from "../../components/History";

export default function Home() {
  return (
    <Box>
      <Header name="Milena Hochheim" />

      <Balance valeu="50.000,00" />

      <Options />

      <History />
    </Box>
  );
}
