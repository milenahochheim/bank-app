import React from "react";
import { Box, Text, Button, ScrollView } from "native-base";
import {
  FolderNotchPlus,
  Wallet,
  Barcode,
  Gear,
  Bag,
  CurrencyDollar,
} from "phosphor-react-native";

export default function Options() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Box height="95px">
        <Box
          backgroundColor="gray.50"
          flex={1}
          alignItems="center"
          flexDirection="row"
          padding="18px"
          justifyContent="space-between"
        >
          <Box>
            <Button
              onPress={() => console.log("depósito")}
              backgroundColor="gray.150"
              width="55px"
              height="55px"
              justifyContent="center"
              alignItems="center"
              borderRadius="30px"
              marginRight="20px"
            >
              <FolderNotchPlus size="35px" color="#000" />
            </Button>
            <Text
              paddingTop="5px"
              fontSize="15px"
              textAlign="center"
              paddingRight="15px"
            >
              Depósito
            </Text>
          </Box>
          <Box>
            <Button
              onPress={() => console.log("pix")}
              backgroundColor="gray.150"
              width="55px"
              height="55px"
              justifyContent="center"
              alignItems="center"
              borderRadius="30px"
              marginRight="20px"
            >
              <CurrencyDollar size="35px" color="#000" />
            </Button>
            <Text paddingTop="5px" paddingRight="15px" textAlign="center">
              Pix
            </Text>
          </Box>
          <Box>
            <Button
              onPress={() => console.log("carteira")}
              backgroundColor="gray.150"
              width="55px"
              height="55px"
              justifyContent="center"
              alignItems="center"
              borderRadius="30px"
              marginRight="20px"
            >
              <Wallet size="35px" color="#000" />
            </Button>
            <Text paddingTop="5px" paddingRight="17px" textAlign="center">
              Carteira
            </Text>
          </Box>
          <Box>
            <Button
              onPress={() => console.log("boleto")}
              backgroundColor="gray.150"
              width="55px"
              height="55px"
              justifyContent="center"
              alignItems="center"
              borderRadius="30px"
              marginRight="20px"
            >
              <Barcode size="35px" color="#000" />
            </Button>
            <Text paddingTop="5px" paddingRight="17px" textAlign="center">
              Boleto
            </Text>
          </Box>
          <Box>
            <Button
              onPress={() => console.log("shop")}
              backgroundColor="gray.150"
              width="55px"
              height="55px"
              justifyContent="center"
              alignItems="center"
              borderRadius="30px"
              marginRight="20px"
            >
              <Bag size="35px" color="#000" />
            </Button>
            <Text paddingTop="5px" paddingRight="17px" textAlign="center">
              Compras
            </Text>
          </Box>
          <Box>
            <Button
              onPress={() => console.log("config")}
              backgroundColor="gray.150"
              width="55px"
              height="55px"
              justifyContent="center"
              alignItems="center"
              borderRadius="30px"
              marginRight="20px"
            >
              <Gear size="35px" color="#000" />
            </Button>
            <Text paddingTop="5px" paddingRight="17px" textAlign="center">
              Conta
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
