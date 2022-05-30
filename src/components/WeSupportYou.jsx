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

export const WeSupportYou = () => {
  const moveToUpacity = () => {
    window.open("https://app.upacity.jp/", "_blank");
  };

  return (
    <Box py={20} px={5} bg="mainGray" className="mainTarget">
      <Container p={0}>
        <Flex
          bg="navy"
          color="white"
          borderRadius="30px"
          maxW="1100px"
          textAlign="left"
          px={{ base: "2.5rem", md: "5rem" }}
          py={14}
          display={{ base: "block", md: "flex" }}
        >
          <Flex w={{ base: "100%", md: "50%" }} alignItems="center">
            <Heading
              className="wesupportyou"
              fontSize={{ base: "36px", md: "42px" }}
              fontFamily={"Poppins"}
              fontWeight="800"
              color="white"
              textAlign="left"
              letterSpacing={1.5}
            >
              We Support <br />
              you.
            </Heading>
          </Flex>
          <Box w={{ base: "100%", md: "50%" }}>
            <Text fontSize="17px" fontWeight={"medium"} mb={5}>
              Upacityは資格試験合格、技術職就労などで
              <br />
              勉強を効率的に進める必要がある人が、
              <br />
              学習計画を立て実行し
              <br />
              成果を得ることをサポートします。
            </Text>
            <Button variant={"pinkPurple"} onClick={moveToUpacity}>
              無料で始める
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
