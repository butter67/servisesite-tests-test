import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

import personImage from "../imgs/lady-circle.png";
import TimeIcon from "../icons/time.png";

import { WeSupportYou } from "../components/WeSupportYou";

export const UserInterviewContent = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  console.log(location.pathname);

  const postsData = props.posts;

  const parse = require("html-react-parser");

  return (
    <Box pt={{ base: "10", md: "20" }} pb={0} px="5">
      <Heading
        mb="30px"
        fontSize={{ base: "24px", md: "36px" }}
        fontFamily="pop"
        fontWeight="600"
        color="#252525"
        textAlign="center"
      >
        ユーザーインタビュー
      </Heading>
      <Text
        mt={"14px"}
        fontWeight={"medium"}
        fontSize={{ base: "s", md: "md" }}
        mb={{ base: "60px", md: "100px" }}
      >
        Upacityを利用して、就職に成果を出してきた方達の
        <br />
        事例をご紹介します。
      </Text>

      <VStack
        maxW="980px"
        p={0}
        mx="auto"
        spacing={{ base: "50px", md: "100px" }}
      >
        {postsData &&
          postsData.map((post, index) => {
            if (index % 2 === 0) {
              return (
                <Box className="interviewBox" key={index} w="100%">
                  <Flex
                    mx="auto"
                    w="50%"
                    justifyContent="space-around"
                    alignItems="center"
                    mb={{ base: "30px", md: "50px" }}
                    flexDir={{ base: "column-reverse", md: "row" }}
                  >
                    <Box
                      w={{ base: "70px", md: "100px" }}
                      h={{ base: "70px", md: "100px" }}
                      mt={{ base: "30px", md: "0px" }}
                      pb="20%"
                      bgImage={post.image.src}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      bgSize="cover"
                      borderRadius="50%"
                    ></Box>

                    <VStack
                      spacing="2px"
                      flexDir="column"
                      alignItems="flex-start"
                    >
                      <Text fontSize={{ base: "s", md: "m" }}>
                        {post.company}
                      </Text>
                      <Text fontSize={{ base: "12px", md: "s" }}>
                        {post.name}様
                      </Text>
                      <HStack alignItems="center" spacing="4px">
                        <Image
                          src={TimeIcon}
                          alt="clockIcon"
                          w={{ base: "18px", md: "20px" }}
                          h={{ base: "18px", md: "20px" }}
                          mt="5px"
                        />

                        <Text
                          fontSize={{ base: "19px", md: "24px" }}
                          mt="-4px"
                          fontWeight="600"
                          fontFamily="Cabin, sans-serif"
                        >
                          {post.playtime}
                        </Text>
                        <span>hours</span>
                      </HStack>
                      {/* <Text
                        fontSize={{ base: "11px", md: "12px" }}
                        fontWeight="500"
                        color="gray.700"
                      >
                        Ruby / PHP / Javascript
                      </Text> */}
                      <Text fontSize={{ base: "12px", md: "s" }}>
                        前職 : {post.lastjob}
                      </Text>
                    </VStack>
                  </Flex>

                  <VStack
                    spacing={{ base: "15px", md: "30px" }}
                    alignItems="start"
                    className="interviewTexts"
                    bg="interviewPurple"
                    borderRadius="20px"
                    py={{ base: "10", md: "20" }}
                    px={{ base: "6", md: "28" }}
                  >
                    <Flex
                      textAlign="left"
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "15px", md: "m" }}
                        mr={{ base: "0px", md: "20px" }}
                      >
                        Upacityの利用期間 :
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "15px", md: "m" }}
                        mt={{ base: "4px", md: "0px" }}
                      >
                        {post.term}
                      </Text>
                    </Flex>
                    <Flex
                      textAlign="left"
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "15px", md: "m" }}
                        mr={{ base: "0px", md: "20px" }}
                      >
                        目的・ゴール :
                      </Text>
                      <Text
                        fontSize={{ base: "15px", md: "m" }}
                        fontWeight="500"
                        mt={{ base: "4px", md: "0px" }}
                      >
                        {post.purpose}
                      </Text>
                    </Flex>
                    <VStack alignItems="start" spacing="10px" textAlign="left">
                      <Text
                        fontSize={{ base: "15px", md: "m" }}
                        fontWeight="600"
                      >
                        Upacityの良かったこと、役に立ったこと :
                      </Text>
                      <Box
                        fontSize={{ base: "15px", md: "m" }}
                        fontWeight="500"
                        textAlign="left"
                      >
                        {parse(post.usersvoice)}
                      </Box>
                    </VStack>
                  </VStack>
                </Box>
              );
            } else {
              return (
                <Box className="interviewBox" key={index} w="100%">
                  <Flex
                    mx="auto"
                    w="50%"
                    justifyContent="space-around"
                    alignItems="center"
                    mb={{ base: "30px", md: "50px" }}
                    flexDir={{ base: "column-reverse", md: "row" }}
                  >
                    <Box
                      w={{ base: "70px", md: "100px" }}
                      h={{ base: "70px", md: "100px" }}
                      mt={{ base: "30px", md: "0px" }}
                      pb="20%"
                      bgImage={post.image.src}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      bgSize="cover"
                      borderRadius="50%"
                    ></Box>

                    <VStack
                      spacing="2px"
                      flexDir="column"
                      alignItems="flex-start"
                    >
                      <Text fontSize={{ base: "s", md: "m" }}>
                        {post.company}
                      </Text>
                      <Text fontSize={{ base: "12px", md: "s" }}>
                        {post.name}様
                      </Text>
                      <HStack alignItems="center" spacing="4px">
                        <Image
                          src={TimeIcon}
                          alt="clockIcon"
                          w={{ base: "18px", md: "20px" }}
                          h={{ base: "18px", md: "20px" }}
                          mt="5px"
                        />

                        <Text
                          fontSize={{ base: "19px", md: "24px" }}
                          mt="-4px"
                          fontWeight="600"
                          fontFamily="Cabin, sans-serif"
                        >
                          {post.playtime}
                        </Text>
                        <span>hours</span>
                      </HStack>
                      {/* <Text
                        fontSize={{ base: "11px", md: "12px" }}
                        fontWeight="500"
                        color="gray.700"
                      >
                        Ruby / PHP / Javascript
                      </Text> */}
                      <Text fontSize={{ base: "12px", md: "s" }}>
                        前職 : {post.lastjob}
                      </Text>
                    </VStack>
                  </Flex>

                  <VStack
                    spacing={{ base: "15px", md: "30px" }}
                    alignItems="start"
                    className="interviewTexts"
                    bg="interviewBeige"
                    borderRadius="20px"
                    py={{ base: "10", md: "20" }}
                    px={{ base: "6", md: "28" }}
                  >
                    <Flex
                      textAlign="left"
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "15px", md: "m" }}
                        mr={{ base: "0px", md: "20px" }}
                      >
                        Upacityの利用期間 :
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{ base: "15px", md: "m" }}
                        mt={{ base: "4px", md: "0px" }}
                      >
                        {post.term}
                      </Text>
                    </Flex>
                    <Flex
                      textAlign="left"
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "15px", md: "m" }}
                        mr={{ base: "0px", md: "20px" }}
                      >
                        目的・ゴール :
                      </Text>
                      <Text
                        fontSize={{ base: "15px", md: "m" }}
                        fontWeight="500"
                        mt={{ base: "4px", md: "0px" }}
                      >
                        {post.purpose}
                      </Text>
                    </Flex>
                    <VStack alignItems="start" spacing="10px" textAlign="left">
                      <Text
                        fontSize={{ base: "15px", md: "m" }}
                        fontWeight="600"
                      >
                        Upacityの良かったこと、役に立ったこと :
                      </Text>
                      <Box
                        fontSize={{ base: "15px", md: "m" }}
                        fontWeight="500"
                        textAlign="left"
                      >
                        {parse(post.usersvoice)}
                      </Box>
                    </VStack>
                  </VStack>
                </Box>
              );
            }
          })}
      </VStack>

      <WeSupportYou />
    </Box>
  );
};
