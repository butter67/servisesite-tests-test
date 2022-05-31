import {
  Box,
  Flex,
  Text,
  Container,
  Wrap,
  WrapItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import check from "../icons/check-circle.svg";

import { WeSupportYou } from "../components/WeSupportYou";

export const PricePlanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moveToUpacity = () => {
    window.open("https://app.upacity.jp/", "_blank");
  };

  return (
    <Box py={{ base: "10", md: "20" }} px="5" bg="mainGray">
      <Container maxW={"980px"} px={"0"} pb={{ base: "40px", md: "100px" }}>
        <Text
          mb="30px"
          fontSize={{ base: "24px", md: "36px" }}
          fontFamily="pop"
          fontWeight="600"
        >
          料金プラン
        </Text>

        <Text
          mt={"14px"}
          fontWeight="500"
          fontSize={{ base: "s", md: "md" }}
          mb={{ base: "60px", md: "100px" }}
        >
          決済には各種クレジットカードを
          <br diaplay={{ base: "block", md: "none" }} />
          ご利用いただけます。
        </Text>

        <Box
          bg="white"
          borderRadius="20px"
          boxShadow={"lg"}
          mt={{ base: "30px", md: "65px" }}
        >
          <Flex justify="center" p={5} display={{ base: "block", md: "flex" }}>
            <Box
              className="area1"
              borderRight="1px"
              borderColor={{ base: "white", md: "border" }}
              w={{ base: "100%", md: "33.3%" }}
              pt={{ base: "20px", md: "30px" }}
              pb={{ base: "20px", md: "40px" }}
            >
              <Box>
                <Flex flexDir="column" alignItems="center" py={5} px={5}>
                  <h3>Basic</h3>
                  <Flex alignItems="baseline">
                    <Text fontSize="xl">￥０ </Text>
                    <Text fontSize="md" fontWeight="semibold">
                      /month
                    </Text>
                  </Flex>
                  <Text
                    mt={{ base: "10px", md: "20px" }}
                    fontSize={{ base: "12px", md: "s" }}
                    fontWeight="500"
                  >
                    技術学習のカリキュラム作成や管理を
                    <br />
                    無料で実施していただけます。
                  </Text>
                </Flex>
              </Box>
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                py={5}
                px={5}
                borderTop="1px"
                borderColor={{ base: "white", md: "border" }}
              >
                <Wrap
                  maxW={{ base: "198px", md: "210px" }}
                  minH={{ base: "280px", md: "420px" }}
                  mt={6}
                  fontSize={{ base: "s", md: "m" }}
                >
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
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>タイムトラッキング</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>月次レポート</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>SNSシェア</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>カリキュラム作成機能</Text>
                  </WrapItem>
                </Wrap>
              </Flex>
              <Button size={"sm"} onClick={moveToUpacity}>
                無料で始める
              </Button>
            </Box>

            <Box
              className="area1"
              borderRight="1px"
              borderColor={{ base: "white", md: "border" }}
              w={{ base: "100%", md: "33.3%" }}
              pt={{ base: "20px", md: "30px" }}
              pb={{ base: "20px", md: "40px" }}

              // py="30px"
            >
              <Box
                borderTop="1px"
                borderColor={{ base: "border", md: "white" }}
              >
                <Flex flexDir="column" alignItems="center" py={5} px={5}>
                  <h3 mb={0}>Mentor</h3>
                  <Flex alignItems="baseline">
                    <Text fontSize="xl" fontWeight="bold">
                      ￥29,800
                    </Text>
                    <Text fontSize="md" fontWeight="semibold">
                      /month
                    </Text>
                  </Flex>
                  <Text
                    mt={{ base: "10px", md: "20px" }}
                    fontSize={{ base: "12px", md: "s" }}
                    fontWeight="500"
                  >
                    現役エンジニアのメンターがついて
                    <br />
                    あなたをサポートします。
                  </Text>
                </Flex>
              </Box>

              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                py={5}
                px={5}
                borderTop="1px"
                borderColor={{ base: "white", md: "border" }}
                pos="relative"
              >
                <Wrap
                  maxW={{ base: "198px", md: "210px" }}
                  minH={{ base: "360px", md: "400px" }}
                  mt={6}
                  fontSize={{ base: "s", md: "m" }}
                >
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
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>タイムトラッキング</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>月次レポート</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>SNSシェア</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>カリキュラム作成機能</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>担当による就活サポート</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>オンライン質問対応</Text>
                  </WrapItem>
                </Wrap>
                <Link to="/mentor-scholarship" w="100%">
                  <Text fontSize="s" color="red">
                    メンタープランについて
                  </Text>
                </Link>
              </Flex>
              <Button
                size={"sm"}
                bg={"pointCoral"}
                fontSize="m"
                onClick={moveToUpacity}
              >
                利用する
              </Button>
            </Box>

            <Box
              w={{ base: "100%", md: "33.3%" }}
              pt={{ base: "20px", md: "30px" }}
              pb={{ base: "20px", md: "40px" }}
              // borderTop={{ base: "1px", md: "non" }}
              borderColor={"border"}
            >
              <Box
                borderTop="1px"
                borderColor={{ base: "border", md: "white" }}
              >
                <Flex flexDir="column" alignItems="center" py={5} px={5}>
                  <h3 mb={0} className="blueImportant">
                    Scholarship
                  </h3>
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
                  <Text
                    mt={{ base: "10px", md: "20px" }}
                    fontSize={{ base: "12px", md: "s" }}
                    fontWeight="500"
                  >
                    就職を目指す方の学習を
                    <br />
                    その結果までサポートします。
                  </Text>
                </Flex>
              </Box>

              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                py={5}
                px={5}
                borderTop="1px"
                borderColor={{ base: "white", md: "border" }}
                pos="relative"
              >
                <Wrap
                  maxW={{ base: "198px", md: "210px" }}
                  minH={{ base: "360px", md: "400px" }}
                  mt={6}
                  fontSize={{ base: "s", md: "m" }}
                >
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
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>タイムトラッキング</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>月次レポート</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>SNSシェア</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>カリキュラム作成機能</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>担当による就活サポート</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={check} alt="check" mr="10px" mb="-1" />
                    <Text>奨学金制度</Text>
                  </WrapItem>
                </Wrap>

                <Link to="/mentor-scholarship" w="100%">
                  <Text fontSize="s" color="red">
                    スカラーシップについて
                  </Text>
                </Link>
              </Flex>

              <Button size={"sm"} bg={"pointBlue"} fontSize="m">
                審査を申請する
              </Button>
            </Box>
          </Flex>
        </Box>
      </Container>

      <WeSupportYou />
    </Box>
  );
};
