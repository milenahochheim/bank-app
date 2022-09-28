import React from "react";
import { Box, Text } from "native-base";

export default function Balance({ valeu }) {
    return (
        <Box
            backgroundColor="gray.50"
            flexDirection="row"
            justifyContent="space-between"
            padding="18px"
            paddingTop="22px"
            paddingBottom="22px"
            margin="14px"
            marginTop="-24px"
            zIndex="99px"
            borderRadius="4px"
        >
            <Box>
                <Text
                    color="gray.500"
                    fontSize="20px"
                    paddingBottom="5px"
                >
                    Conta
                </Text>
                <Box
                    flexDirection="row"
                    justifyContent="center"

                >
                    <Text
                        color="gray.300"
                        fontSize="20px"
                        marginRight="6px"
                    >
                        R$
                    </Text>
                    <Text
                        fontSize="27px"
                    >
                        {valeu}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}