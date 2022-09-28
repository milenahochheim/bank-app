import React from "react";
import {
  Box,
  Text,
  FlatList,
  Heading,
  VStack,
  Avatar,
  HStack,
  Spacer,
} from "native-base";

export default function Home() {
  const data = [
    {
      id: "1",
      fullName: "Dinheiro guardado",
      timeStamp: "Hoje",
      recentText: "R$ 650,00",
    },
    {
      id: "2",
      fullName: "Depósito recebido",
      timeStamp: "03 JUN",
      recentText: "R$ 600,00",
    },
    {
      id: "3",
      fullName: "Transferência enviada",
      timeStamp: "02 JUN",
      recentText: "Vinicius Premero",
      addText: "R$ 120,00",
    },
    {
      id: "4",
      fullName: "Compra no débito",
      timeStamp: "01 JUN",
      recentText: "Jua Sucos",
      addText: "R$ 12,00",
    },
    {
      id: "5",
      fullName: "Dinheiro resgatado",
      timeStamp: "27 MAI",
      recentText: "R$ 150,00",
    },
    {
      id: "6",
      fullName: "Compra no crédito",
      timeStamp: "26 MAI",
      recentText: "Mc Donalds",
      addText: "R$ 50,00",
    },
  ];
  return (
    <Box paddingTop="30px" paddingLeft="15px">
      <Box>
        <Heading fontSize="xl" p="4" pb="3" paddingLeft="7px">
          Histórico
        </Heading>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.addText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
}
