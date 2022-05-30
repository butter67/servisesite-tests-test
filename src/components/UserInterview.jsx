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

import personIconS from "../icons/user-icon.svg";

export const UserInterview = (props) => {
  const postsData = props.props;

  let postsDatas = [];
  if (postsData) {
    postsDatas = [postsData[0], postsData[1], postsData[2]];
  }
  // console.log(postsDatas);

  return (
    <Box py={20} px={5} bg="mainGray" className="mainTarget">
      <Container maxW={"1180px"} px={"0"}>
        <Heading
          fontSize={{ base: "lg", md: "xl" }}
          mb="15px"
          color="#252525"
          textAlign="center"
        >
          ユーザーインタビュー
        </Heading>
        <Text
          mt={"14px"}
          fontWeight="500"
          fontSize={{ base: "s", md: "m" }}
          mb={"100px"}
        >
          Upacityを利用して、就職に成果を出した方達の
          <br className="brDisplay" />
          事例をご紹介します。
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "60px", sm: "20px", lg: "50px" }}
          justify="space-around"
        >
          {postsDatas.map((post, index) => {
            return (
              <Flex
                className="interviewExcerptCard"
                key={index}
                direction="column"
                textAlign="left"
                justify="center"
                align="center"
                pt={{ base: "60px", md: "80px" }}
                pb={{ base: "30px", md: "40px" }}
                w={{ base: "100%", md: "30%" }}
                bg="white"
                borderRadius="20px"
                boxShadow="md"
                pos="relative"
                transition="all 0.4s"
                _hover={{
                  transition: "all 0.4s",
                  boxShadow: "xl",
                }}
              >
                <Box
                  w={{ base: "80px", md: "100px" }}
                  h={{ base: "80px", md: "100px" }}
                  pb="16%"
                  bgImage={post.image.src}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  bgSize="cover"
                  borderRadius="50%"
                  pos="absolute"
                  top="-10"
                  left="10"
                ></Box>

                <VStack
                  maxW="260px"
                  spacing={"14px"}
                  alignItems="left"
                  px={{ base: "10px", md: "0px" }}
                >
                  <Text fontWeight="600" fontSize={{ base: "s", md: "m" }}>
                    {post.excerpt}
                  </Text>
                  <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
                    {post.name}様
                  </Text>
                  <Divider />
                  <Flex align="center">
                    <Image src={personIconS} alt="personIcon" mr="10px" />
                    <Text fontSize={{ base: "s", md: "m" }}>
                      {post.company}
                    </Text>
                  </Flex>
                </VStack>
              </Flex>
            );
          })}
        </Stack>

        <Link to="/userinterview">
          <Button mt={16}>事例を見る</Button>
        </Link>
      </Container>
    </Box>
  );
};
