import { useState } from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Input,
  Table,
  Text,
  Tbody,
  Tr,
  Td,
  TableContainer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const borderNone = {
    borderBottom: "none",
  };
  const w5 = {
    fontSize: "15px",
    fontWeight: "500",
    borderBottom: "none",
  };

  const moveToCompanySite = () => {
    window.open("https://upacity.jp/", "_blank");
  };

  return (
    <Box py={{ base: "10", md: "20" }} px="5" bg="mainGray">
      <Container maxW={"1080px"} px={"0"}>
        <Heading
          mb="30px"
          fontSize={{ base: "24px", md: "36px" }}
          fontFamily="pop"
          fontWeight="600"
          color="#252525"
          textAlign="center"
        >
          会社概要
        </Heading>

        <TableContainer my={{ base: "30px", md: "60px" }}>
          <Table bg="white" borderRadius="20px" p={{ base: "5", md: "10" }}>
            <Tbody>
              <Tr>
                <Td sx={borderNone} color="gray.700">
                  会社名
                </Td>
                <Td sx={w5}>株式会社Upa</Td>
              </Tr>
              <Tr>
                <Td sx={borderNone}>住所</Td>
                <Td sx={w5}>
                  〒164-0013 東京都中野区弥生町2-41-17
                  東京コンテンツインキュベーションセンター No15
                </Td>
              </Tr>
              <Tr>
                <Td sx={borderNone}>資本金</Td>
                <Td sx={w5}>300万円</Td>
              </Tr>
              <Tr>
                <Td sx={borderNone}>代表取締役</Td>
                <Td sx={w5}>白井 智也</Td>
              </Tr>
              <Tr>
                <Td sx={borderNone}>事業内容</Td>
                <Td sx={w5} pos="relative">
                  教育サービスの開発・運営　教育コンテンツの企画・提供　Webサービス開発{" "}
                  <Text
                    fontSize="12px"
                    color="pointBlue"
                    onClick={moveToCompanySite}
                    pos="absolute"
                    bottom="-6px"
                    left="24px"
                    _hover={{
                      cursor: "pointer",
                    }}
                  >
                    詳しくはこちら
                  </Text>
                </Td>
              </Tr>
              {/* </Box> */}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
