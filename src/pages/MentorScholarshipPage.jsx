import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  Image,
  Container,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import MentorHero from "../imgs/mentor-scholarship-page/mentor-hero-image.png";
import LeafObj from "../imgs/mentor-scholarship-page/Rectangle-124.png";
import IpadImage from "../imgs/mentor-scholarship-page/ipadwidthDots.png";
import Logos from "../imgs/mentor-scholarship-page/logos.png";
import CommunityImage from "../imgs/mentor-scholarship-page/community-image.png";
import DoubleCircleIcon from "../icons/DoubleCircle.svg";

import { MentorPlanUserInterview } from "../components/MentorPlanUserInterview";
import { StudentsRecruitment } from "../components/StudentsRecruitment";

export const MentorScholarshipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gsap function
  gsap.registerPlugin(ScrollTrigger);

  const leafTarget = useRef();
  useEffect(() => {
    gsap.from(leafTarget.current, {
      y: "20px",
      ease: "Power1.easeInOut",
      duration: 1.3,
      opacity: 0,
    });
  });

  // const targetSections = useRef();
  // const targetSection = gsap.utils.selector(targetSections);

  // useEffect(() => {
  //   gsap.from(targetSection(".detailSection"), {
  //     y: "20px",
  //     ease: "Power1.easeInOut",
  //     duration: 1.3,
  //     opacity: 0,
  //     // 複数要素を扱うプロパティ
  //     stagger: {
  //       from: "top", //左側から
  //       amount: 1.8, // 0.8秒おきに
  //     },
  //     scrollTrigger: {
  //       trigger: ".wrapSection",
  //       start: "top center",
  //     },
  //   });
  // });

  return (
    <>
      <Box
        className="mentorHero"
        mx="auto"
        py={{ base: "20px", md: "40px" }}
        w={{ base: "96%", md: "80%" }}
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          display={{ base: "block", md: "flex" }}
          flexDir="row-reverse"
        >
          <Box
            w={{ base: "100%", md: "46%" }}
            p={{ base: "15px", md: "30px" }}
            textAlign="left"
            pos="relative"
          >
            <Heading
              fontFamily={"pop"}
              fontSize={{ base: "36px", md: "54px" }}
              color={"headingNavy"}
              textAlign="left"
            >
              Mentor・
              <br />
              Scholarship
            </Heading>
            <Text color={"headingNavy"}>メンター・スカラーシッププラン</Text>
            <Text mt="30px" fontSize={{ base: "14px", md: "16px" }}>
              未経験からエンジニアを多数輩出したカリキュラムで、
              <br />
              現場で実際に活躍できるエンジニアを育てます。
            </Text>

            <Box
              w="14%"
              pos="absolute"
              top="0%"
              right="0%"
              className="LeafObject image"
              ref={leafTarget}
            >
              <Image
                w="100%"
                h="auto"
                src={LeafObj}
                pos="absolute"
                top="0"
                left="0"
                objectFit="cover"
              />
            </Box>
          </Box>

          <Box w={{ base: "90%", md: "46%" }} mx="auto">
            <Image src={MentorHero} maxH="500px" className="heroImage" />
          </Box>
        </Flex>
      </Box>

      <Box bg="grayBg">
        <Container>
          <Box className="serviceSection" py={{ base: "30px", md: "60px" }}>
            <Text
              fontSize={{ base: "32px", md: "52px" }}
              fontFamily={"pop"}
              mb="0px"
            >
              Service
            </Text>
            <Text>サービス</Text>
            <Text mt="26px">
              未経験から現場で活躍するエンジニアを多数輩出した実績で、
              <br />
              あなたのキャリアをサポートします。
            </Text>

            <Box
              textAlign="left"
              color="white"
              py={12}
              px={10}
              bg="navy"
              borderRadius="30px"
              mt={{ base: "20px", md: "40px" }}
            >
              <Text mb="20px">こんな方におすすめ</Text>
              <UnorderedList spacing={2}>
                <ListItem>
                  学習を進めていく上で、第一線で活躍するメンターからのフィードバックが欲しい
                </ListItem>
                <ListItem>
                  高いレベルで実際の現場に通用する、本物の力を身につけたい
                </ListItem>
                <ListItem>
                  コミュニティに属して、仲間と切磋琢磨していきたい
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Container>

        <Flex
          className="supportSystem detailSection wrapSection"
          py={{ base: "30px", md: "60px" }}
          justifyContent="right"
          alignItems="center"
          display={{ base: "box", md: "flex" }}
        >
          <Box
            className="support-left"
            textAlign="left"
            w={{ base: "100%", md: "48%" }}
          >
            <Box
              w={{ base: "100%", md: "71%" }}
              mx="auto"
              px={{ base: "4", md: "0" }}
            >
              <Text
                fontSize={{ base: "32px", md: "52px" }}
                fontFamily={"pop"}
                mb="0px"
                textAlign="left"
                wordBreak="break-all"
              >
                Support System
              </Text>
              <Text>サポートシステム</Text>
              <Text mt="26px" fontSize="20px">
                ロードマップで学習、
                <br />
                プロからのフィードバック。
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color="gray.700"
                mt="20px"
              >
                新しい技術の習得は、自身での学習の管理
                <br />
                またエンジニアとして活躍するために
                <br />
                プロからのフィードバックが欠かせません。
                <br />
                ここでは各クラスごとにメンターが付いて、受講生をサポートします。
                <br />
                何を学習するかは、それぞれ自由に選択できます。
                <br />
                <br />
                Upacityの自分で学習管理が簡単にできる仕組みを利用して、各自学習を進めていきます。
              </Text>
            </Box>
          </Box>

          <Box
            className="support-right"
            w={{ base: "100%", md: "48%" }}
            py={{ base: "20px", md: "0px" }}
          >
            <Image
              src={IpadImage}
              maxH="697px"
              mt="0"
              mb="0"
              mr="0"
              ml="auto"
            />
          </Box>
        </Flex>

        <Flex
          className="Community detailSection"
          pb={{ base: "30px", md: "60px" }}
          justifyContent="right"
          flexDir="row-reverse"
          alignItems="center"
          display={{ base: "box", md: "flex" }}
        >
          <Box
            className="community-right"
            textAlign="left"
            w={{ base: "100%", md: "48%" }}
            px={{ base: "4", md: "0" }}
          >
            <Box w={{ base: "100%", md: "74%" }} mx="auto">
              <Text
                fontSize={{ base: "32px", md: "52px" }}
                fontFamily={"pop"}
                mb="0px"
                textAlign="left"
                wordBreak="break-all"
              >
                Community
              </Text>
              <Text>コミュニティー</Text>
              <Image src={Logos} mt="40px" mb="25px" />
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color="gray.700"
                mt="20px"
              >
                メンター・スカラーシッププランに参加後、slackへご招待致します。
                <br />
                ここではメンターとフォローアップのやり取りをしたり、他参加者と交流していただくことが可能です。
              </Text>
            </Box>
          </Box>

          <Box
            className="community-left"
            w={{ base: "100%", md: "48%" }}
            py={{ base: "20px", md: "0px" }}
            px={{ base: "2", md: "0" }}
          >
            <Image src={CommunityImage} maxH="697px" maxW="667px" w="100%" />
          </Box>
        </Flex>
      </Box>

      <MentorPlanUserInterview />

      <Box
        className="PriceAndRulesSection"
        py={{ base: "10", md: "20" }}
        px="5"
        bg="grayBg"
      >
        <Container px="0" maxW="1180">
          <Flex
            bg="interviewBeige"
            py={{ base: "40px", md: "80px" }}
            borderRadius="30px"
            justifyContent="flex-end"
            display={{ base: "block", md: "flex" }}
            px={{ base: "4", md: "0" }}
          >
            <Box
              className="rules-left"
              textAlign="left"
              w={{ base: "100%", md: "48%" }}
            >
              <Box w={{ base: "100%", md: "87%" }}>
                <Text
                  fontSize={{ base: "32px", md: "48px" }}
                  fontFamily={"pop"}
                  mb="0px"
                  textAlign="left"
                  wordBreak="break-all"
                >
                  Price & Rules
                </Text>
                <Text>料金・規則</Text>
                <Text
                  fontWeight="400"
                  mt={{ base: "15px", md: "30px" }}
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  メンタープランの受講料は月額29,800円。
                  <br />
                  このうちスカラーシップをお申し込み頂き、入学審査に合格された方は無料で受講できます。
                  <br />
                  いずれも受講の確定後、専用のslackにご招待いたします。
                  <br />
                  うち、希望者にはキャリア相談・就職斡旋を行います。
                  <br />
                  <br />
                  また受講生には基本ルールを順守していただくようお願いしております。
                </Text>
                <Button variant={"orange"} fontSize="16px" mt="30px">
                  審査を申請する
                </Button>
              </Box>
            </Box>

            <Box
              className="rules-right"
              w={{ base: "100%", md: "48%" }}
              mr={{ base: "0px", md: "-40px" }}
            >
              <Box
                bg="#DDD2E1"
                borderRadius="30px"
                textAlign="left"
                py={{ base: "40px", md: "70px" }}
                px={{ base: "20px", md: "70px" }}
                w={{ base: "100%", md: "98%" }}
                my={{ base: "20px", md: "0px" }}
                mr={{ base: "0px", md: "-40px" }}
              >
                <Text mb="30px">プラン利用ルール</Text>
                <Wrap
                  fontWeight="500"
                  color="gray.800"
                  spacing={4}
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  <WrapItem alignItems={"center"}>
                    <Image src={DoubleCircleIcon} mt="2px" mr="14px" />
                    <Text>週1のクラス会に参加する</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={DoubleCircleIcon} mt="2px" mr="14px" />
                    <Text>期限内に設定された学習タスクをこなすこと</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={DoubleCircleIcon} mt="2px" mr="14px" />
                    <Text>他受講生が困っていたら助けること</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={DoubleCircleIcon} mt="2px" mr="14px" />
                    <Text>学習報告はTwitterで行うこと(Upacityに機能あり)</Text>
                  </WrapItem>
                  <WrapItem alignItems={"center"}>
                    <Image src={DoubleCircleIcon} mt="2px" mr="14px" />
                    <Text>上記守れない場合は退学をすること</Text>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
      <StudentsRecruitment />
    </>
  );
};
