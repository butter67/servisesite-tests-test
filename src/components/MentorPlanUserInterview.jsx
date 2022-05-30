import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Container,
  Stack,
  VStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import personImage from "../imgs/thinking.png";
import personIconS from "../icons/user-icon.svg";

export const MentorPlanUserInterview = () => {
  return (
    <Box py={20} px={5} bg="mainGray" className="mainTarget">
      <Container maxW={"1180px"} px={"0"}>
        <Heading
          fontSize={{ base: "32", md: "48" }}
          mb="15px"
          color="#252525"
          textAlign="center"
        >
          Interview
        </Heading>
        <Text
          mt={"14px"}
          fontWeight="500"
          fontSize={{ base: "s", md: "m" }}
          mb={"100px"}
        >
          利用者インタビュー
          {/* <br className="brDisplay" />
          事例をご紹介します。 */}
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "60px", sm: "20px", lg: "50px" }}
          justify="space-around"
        >
          <Flex
            direction="column"
            textAlign="left"
            justify="center"
            align="center"
            pt="80px"
            pb="40px"
            w={{ base: "100%", md: "30%" }}
            bg="white"
            borderRadius="20px"
            boxShadow="md"
            pos="relative"
            transition="all 0.4s"
            _hover={{
              cursor: "pointer",
              transition: "all 0.4s",
              boxShadow: "xl",
            }}
          >
            <Image
              src={personImage}
              alt="person"
              pos="absolute"
              w="80px"
              top="-10"
              left="10"
            />
            <VStack maxW="260px" spacing={"14px"} alignItems="left">
              <Text fontWeight="600" fontSize={{ base: "s", md: "m" }}>
                独学での学習だったが、進捗が可視化されていたのが就職の際に役に立った。
              </Text>
              <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
                k.n様
              </Text>
            </VStack>
          </Flex>

          <Flex
            direction="column"
            textAlign="left"
            justify="center"
            align="center"
            pt="80px"
            pb="40px"
            w={{ base: "100%", md: "30%" }}
            bg="white"
            borderRadius="20px"
            boxShadow="md"
            pos="relative"
            transition="all 0.4s"
            _hover={{
              cursor: "pointer",
              transition: "all 0.4s",
              boxShadow: "xl",
            }}
          >
            <Image
              src={personImage}
              alt="person"
              pos="absolute"
              w="80px"
              top="-10"
              left="10"
            />
            <VStack maxW="260px" spacing={"14px"} alignItems="left">
              <Text fontSize={{ base: "s", md: "m" }}>
                独学での学習だったが、進捗が可視化されていたのが就職の際に役に立った。
              </Text>
              <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
                k.n様
              </Text>
            </VStack>
          </Flex>

          <Flex
            direction="column"
            textAlign="left"
            justify="center"
            align="center"
            pt="80px"
            pb="40px"
            w={{ base: "100%", md: "30%" }}
            bg="white"
            borderRadius="20px"
            boxShadow="md"
            pos="relative"
            transition="all 0.4s"
            _hover={{
              cursor: "pointer",
              transition: "all 0.4s",
              boxShadow: "xl",
            }}
          >
            <Image
              src={personImage}
              alt="person"
              pos="absolute"
              w="80px"
              top="-10"
              left="10"
            />
            <VStack maxW="260px" spacing={"14px"} alignItems="left">
              <Text fontSize={{ base: "s", md: "m" }}>
                独学での学習だったが、進捗が可視化されていたのが就職の際に役に立った。
              </Text>
              <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
                k.n様
              </Text>
            </VStack>
          </Flex>
        </Stack>

        {/* <Link to="/userinterview">
          <Button mt={16}>事例を見る</Button>
        </Link> */}
      </Container>
    </Box>
  );
};
