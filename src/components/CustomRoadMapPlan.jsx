import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  Image,
  Container,
} from "@chakra-ui/react";
import cuntomFuncImage from "../imgs/roadMapPlanImageNew.png";
import thinkingPerson from "../imgs/men-thinking.png";
import { Link } from "react-router-dom";

export const CustomRoadMapPlan = () => {
  return (
    <Box
      pt={{ base: "4", md: "16" }}
      pb={20}
      px={5}
      bg="grayBg"
      className="mainTarget roadMapTarget"
    >
      <Container maxW="980px" p={0}>
        <Flex justify="space-between" flexWrap="wrap">
          <Flex justify="center" pos="relative">
            <Image
              src={cuntomFuncImage}
              alt="customfunction-image"
              maxW={{ base: "100%", lg: "480px" }}
              pos="relative"
            />
            <Image
              src={thinkingPerson}
              alt="thinking-person"
              maxW="120px"
              pos="absolute"
              top="-50px"
              left="-50px"
              display={{ base: "none", lg: "block" }}
            />
          </Flex>

          <Flex
            direction="column"
            alignItems={{ base: "center", lg: "baseline" }}
            maxW={{ base: "100%", lg: "380px" }}
            mt="24px"
            mx="auto"
          >
            <Heading
              fontSize={{ base: "20px", md: "2xl" }}
              fontWeight="600"
              color="#252525"
              textAlign="left"
            >
              学習ロードマップ作成機能
            </Heading>
            <Text
              fontSize={{ base: "s", md: "16px" }}
              fontWeight="500"
              textAlign="left"
              mt={4}
            >
              自分で学習したいけど、未知の分野ではどこからやっていいのかわからない。
              <br />
              そんな時には、Upacityが今まで培ってきた指導経験から、あなたに最適なロードマップを提案します。
              <br />
            </Text>
            <Link to="/learning-roadmap">
              <Button mt={8} size={"md"}>
                もっと詳しく
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
