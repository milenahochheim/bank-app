import React from "react";
import { Box, Text, Button } from "native-base";
import { User } from "phosphor-react-native";

export default function Header({ name }) {
  return (
    <Box backgroundColor="purple.150" height="150px">
      <Box
        flex={1}
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        padding="15px"
      >
        <Text fontSize="20px" color="gray.50">
          Olá, {name}
        </Text>
        <Button
          onPress={() => console.log("profile")}
          backgroundColor="rgba(255, 255, 255, 0.5)"
          width="44px"
          height="44px"
          justifyContent="center"
          alignItems="center"
          borderRadius={40}
        >
          <User size="27px" color="#FFFFFF" />
        </Button>
      </Box>
    </Box>
  );
}
