import {
  Box,
  Flex,
  Text,
  Heading,
  Container,
  VStack,
  Wrap,
  WrapItem,
  Button,
  Image,
} from "@chakra-ui/react";
import check from "../icons/check-circle.svg";
import { Link } from "react-router-dom";

export const PricePlan = () => {
  return (
    <Box py={20} px={5} bg="grayBg" className="mainTarget">
      <Container maxW="980px" p={0}>
        <Heading fontSize={{ base: "lg", md: "xl" }}>料金プラン</Heading>

        <Box bg="white" borderRadius="20px" boxShadow={"lg"} mt="65px">
          <Flex justify="center" p={5} display={{ base: "block", md: "flex" }}>
            <Box w={{ base: "100%", md: "33.3%" }} py="30px">
              <Box>
                <VStack
                  spacing={4}
                  py={5}
                  px={5}
                  borderRight="1px"
                  borderColor={{ base: "white", md: "border" }}
                >
                  <Heading fontSize="xl">Basic</Heading>
                  <Flex alignItems="baseline">
                    <Text fontSize="xl">￥０ </Text>
                    <Text fontSize="md" fontWeight="semibold">
                      /month
                    </Text>
                  </Flex>

                  <Button size={"sm"}>無料で始める</Button>
                </VStack>
              </Box>

              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                py={5}
                px={5}
                borderTop="1px"
                borderRight="1px"
                borderColor={{ base: "white", md: "border" }}
              >
                <Text>
                  個人の方の学習スケジュールの
                  <br />
                  作成と管理を無料でサポートします。
                </Text>
                <Wrap maxW="180px" mt={6}>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>学習管理</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>ジョブボード</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>カレンダービュー</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>メモ機能</Text>
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box
              w={{ base: "100%", md: "33.3%" }}
              py="30px"
              borderTop="1px"
              borderColor={{ base: "border", md: "white" }}
            >
              <Box>
                <VStack
                  spacing={4}
                  py={5}
                  px={5}
                  // borderTop={{ base: "1px", md: "non" }}
                  borderRight="1px"
                  // borderColor={"border"}
                  borderColor={{ base: "white", md: "border" }}
                >
                  <Heading fontSize="xl">Mentor</Heading>
                  <Flex alignItems="baseline">
                    <Text fontSize="xl" fontWeight="bold">
                      ￥29,800
                    </Text>
                    <Text fontSize="md" fontWeight="semibold">
                      /month
                    </Text>
                  </Flex>
                  <Button size={"sm"} bg={"pointCoral"} fontSize="m">
                    利用する
                  </Button>
                </VStack>
              </Box>

              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                py={5}
                px={5}
                borderTop="1px"
                borderRight="1px"
                borderColor={{ base: "white", md: "border" }}
              >
                <Text>
                  技術就労を目指す方を
                  <br />
                  エンジニアがオンラインでサポート
                </Text>
                <Wrap maxW="180px" mt={6}>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>学習管理</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>ジョブボード</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>カレンダービュー</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>メモ機能</Text>
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box
              w={{ base: "100%", md: "33.3%" }}
              py="30px"
              borderTop="1px"
              borderColor={{ base: "border", md: "white" }}
            >
              <Box>
                <VStack spacing={4} py={5} px={5}>
                  <Heading fontSize="xl" color={"#1A40C6"}>
                    Scholarship
                  </Heading>
                  <Flex alignItems="baseline">
                    <Text
                      color={"gray.600"}
                      textDecor="line-through"
                      mr="8px"
                      fontSize="md"
                    >
                      29,800
                    </Text>
                    <Text fontSize="xl" color={"#1A40C6"}>
                      ￥０{" "}
                    </Text>
                    <Text fontSize="md" fontWeight="semibold" color={"#1A40C6"}>
                      /month
                    </Text>
                  </Flex>
                  <Button size={"sm"} bg={"pointBlue"} fontSize="m">
                    審査を申請する
                  </Button>
                </VStack>
              </Box>

              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                py={5}
                px={5}
                borderTop="1px"
                borderColor={{ base: "white", md: "border" }}
              >
                <Text>
                  就職を目指す方の学習を
                  <br />
                  その結果までサポートします。
                </Text>
                <Wrap maxW="180px" mt={6}>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>学習管理</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>ジョブボード</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>カレンダービュー</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>メモ機能</Text>
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Button mt={16} bg={"pointBlue"}>
          <Link to="/price-plan">料金の詳細へ</Link>
        </Button>
      </Container>
    </Box>
  );
};
