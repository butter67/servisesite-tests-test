import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Flex,
  Button,
  Stack,
  Text,
  Heading,
  Image,
  Container,
  AspectRatio,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { WeSupportYou } from "../components/WeSupportYou";

import RoadMapHero from "../imgs/leaning-roadmap-page/roadMapHeroImageNew.png";
import yLeaf from "../imgs/leaning-roadmap-page/y-leaf.png";
import Study from "../imgs/leaning-roadmap-page/study.png";
import Study2 from "../imgs/leaning-roadmap-page/study2.png";

import Rails from "../imgs/leaning-roadmap-page/rails.png";
import Js from "../imgs/leaning-roadmap-page/js.png";
import Php from "../imgs/leaning-roadmap-page/php.png";
import ReactRedux from "../imgs/leaning-roadmap-page/react.png";
import HowToUseImage from "../imgs/leaning-roadmap-page/HowtoUseCustomRoadMapWidthYellowBg.png";
import Unity from "../imgs/leaning-roadmap-page/unity_logo_icon_144772.png";
import Bash from "../imgs/leaning-roadmap-page/bash.png";
import Qa from "../imgs/leaning-roadmap-page/qa-icon.png";
import Flutter from "../imgs/leaning-roadmap-page/flutter.png";
import MovieBg from "../imgs/leaning-roadmap-page/kaihatuchu-image.png";

export const LeaningRoadMap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gsap function
  gsap.registerPlugin(ScrollTrigger);

  const target = useRef();
  const targets = gsap.utils.selector(target);
  useEffect(() => {
    gsap.fromTo(
      targets(".shape"),
      {
        opacity: 0,
        y: 0,
        scale: 0.2,
        duration: 1.3,
        stagger: 0.4,
        ease: "Power1.easeInOut",
      },
      {
        opacity: 1,
        y: 10,
        scale: 1.1,
        stagger: 0.4,
        duration: 1.3,
        ease: "Power1.easeInOut",
      }
    );
  }, []);

  useEffect(() => {
    gsap.from(targets(".ProgramingSubjectCard"), {
      duration: 1,
      y: 10,
      opacity: 0,
      ease: "power1.out",
      stagger: {
        from: "start",
        amount: 1.3, // 0.8秒おきに
      },
      scrollTrigger: {
        trigger: ".ProgramingSubjectSection",
      },
    });
  }, []);

  return (
    <Box ref={target}>
      <Box
        className="roadMapHero"
        overflow="hidden"
        mx="auto"
        pt={{ base: "35px", md: "70px" }}
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          display={{ base: "block", md: "flex" }}
        >
          <Box
            w={{ base: "100%", md: "46%" }}
            pl={{ base: "20px", md: "30px", lg: "7%" }}
            pt={{ base: "15px", md: "100px" }}
            pb={{ base: "15px", md: "156px" }}
            textAlign="left"
            pos="relative"
          >
            <Box w={{ base: "90%", md: "70%" }} mx="auto">
              <Heading
                fontFamily={"pop"}
                fontSize={{ base: "36px", md: "54px" }}
                color={"headingNavy"}
                textAlign="left"
              >
                Road Map
                <br />
                Functions
              </Heading>
              <Text color={"headingNavy"}>ロードマップ作成機能</Text>
              <Text mt="30px" fontSize={{ base: "14px", md: "16px" }}>
                学習したいものを選ぶだけで、
                <br />
                Upacityがロードマップを作成します。
              </Text>
            </Box>

            <Box
              display={{ base: "none", md: "block" }}
              w={{ base: "6%", md: "10%" }}
              pos="absolute"
              top="0"
              left="0"
              className="shape"
            >
              <Image
                w="100%"
                h="auto"
                src={yLeaf}
                pos="absolute"
                top={{ base: "5", md: "10" }}
                left={{ base: "5", md: "20" }}
                objectFit="cover"
              />
            </Box>

            <Box
              display={{ base: "block", md: "none" }}
              w={{ base: "6%", md: "10%" }}
              pos="absolute"
              top="0"
              right="0"
              className="shape"
            >
              <Image
                w="100%"
                h="auto"
                src={yLeaf}
                pos="absolute"
                top="5"
                right="6"
                objectFit="cover"
                transform="rotate(-90deg)"
              />
            </Box>

            <Box
              display={{ base: "none", md: "block" }}
              w={{ base: "10%", md: "15%" }}
              pos="absolute"
              bottom="0"
              left="0"
              className="shape"
            >
              <Image
                w="100%"
                h="auto"
                src={Study}
                pos="absolute"
                bottom={{ base: "0", md: "6" }}
                left={{ base: "5", md: "10" }}
                objectFit="cover"
              />
            </Box>

            <Box
              display={{ base: "block", md: "none" }}
              w={{ base: "10%", md: "15%" }}
              pos="absolute"
              bottom="0"
              right="0"
              className="shape"
            >
              <Image
                w="100%"
                h="auto"
                src={Study2}
                pos="absolute"
                bottom="-2"
                right="5"
                objectFit="cover"
              />
            </Box>
          </Box>

          <Box
            className="roadMapHero"
            // ref={heroRef}
            w={{ base: "100%", md: "64%" }}
            pt={{ base: "20px", md: "0px" }}
          >
            <Image src={RoadMapHero} mb={{ base: "-80px", md: "-190px" }} />
          </Box>
        </Flex>
      </Box>

      <Box
        py={{ base: "10", md: "20" }}
        px="5"
        bg="grayBg"
        className="ProgramingSubjectSection"
      >
        <Container maxW={"1280px"} px={"0"}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontFamily={"pop"} mb="0px">
            学習したいコースを選びます
          </Text>
          {/* <Text>Courses</Text> */}
          <Text
            mt={"14px"}
            fontWeight={"medium"}
            fontSize={{ base: "s", md: "m" }}
            mb={"100px"}
          >
            コースを選択すると、
            <br className="brDisplay" />
            最適なオリジナルロードマップが自動生成されます。
          </Text>

          <Flex justify="space-around" alignItems="center" flexWrap="wrap">
            <Box
              className="ProgramingSubjectCard"
              mb={{
                base: "50px",
                md: "70px",
              }}
            >
              <Flex
                w={{ base: "140px", md: "200px" }}
                h={{ base: "96px", md: "160px" }}
                boxShadow="xl"
                borderRadius={{ base: "10px", md: "20px" }}
                bg="white"
                mb="20px"
                pos="relative"
                border="1px solid #f0f0f0"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={Rails} alt="RubyOnRails" w="40%" />
              </Flex>

              <Text
                fontWeight="500"
                fontSize={{ base: "10px", md: "s" }}
                color="gray.600"
              >
                バックエンドエンジニア
              </Text>
            </Box>

            <Box
              className="ProgramingSubjectCard"
              mb={{
                base: "50px",
                md: "70px",
              }}
            >
              <Flex
                w={{ base: "140px", md: "200px" }}
                h={{ base: "96px", md: "160px" }}
                boxShadow="xl"
                borderRadius={{ base: "10px", md: "20px" }}
                bg="white"
                mb="20px"
                pos="relative"
                border="1px solid #f0f0f0"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={ReactRedux} alt="RubyOnRails" w="40%" />
              </Flex>

              <Text
                fontWeight="500"
                fontSize={{ base: "10px", md: "s" }}
                color="gray.600"
              >
                フロントエンドエンジニア
              </Text>
            </Box>

            <Box
              className="ProgramingSubjectCard"
              mb={{
                base: "50px",
                md: "70px",
              }}
            >
              <Flex
                w={{ base: "140px", md: "200px" }}
                h={{ base: "96px", md: "160px" }}
                boxShadow="xl"
                borderRadius={{ base: "10px", md: "20px" }}
                bg="white"
                mb="20px"
                pos="relative"
                border="1px solid #f0f0f0"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={Bash} alt="RubyOnRails" w="40%" />
              </Flex>

              <Text
                fontWeight="500"
                fontSize={{ base: "10px", md: "s" }}
                color="gray.600"
              >
                インフラエンジニア
              </Text>
            </Box>

            <Box
              className="ProgramingSubjectCard"
              mb={{
                base: "50px",
                md: "70px",
              }}
            >
              <Flex
                w={{ base: "140px", md: "200px" }}
                h={{ base: "96px", md: "160px" }}
                boxShadow="xl"
                borderRadius={{ base: "10px", md: "20px" }}
                bg="white"
                mb="20px"
                pos="relative"
                border="1px solid #f0f0f0"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={Qa} alt="RubyOnRails" w="40%" />
              </Flex>

              <Text
                fontWeight="500"
                fontSize={{ base: "10px", md: "s" }}
                color="gray.600"
              >
                QAエンジニア
              </Text>
            </Box>

            <Box
              className="ProgramingSubjectCard"
              mb={{
                base: "50px",
                md: "70px",
              }}
            >
              <Flex
                w={{ base: "140px", md: "200px" }}
                h={{ base: "96px", md: "160px" }}
                boxShadow="xl"
                borderRadius={{ base: "10px", md: "20px" }}
                bg="white"
                mb="20px"
                pos="relative"
                border="1px solid #f0f0f0"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={Flutter} alt="RubyOnRails" w="30%" />
              </Flex>

              <Text
                fontWeight="500"
                fontSize={{ base: "10px", md: "s" }}
                color="gray.600"
              >
                ネイティブアプリエンジニア
              </Text>
            </Box>

            <Box
              className="ProgramingSubjectCard"
              mb={{
                base: "50px",
                md: "70px",
              }}
            >
              <Flex
                w={{ base: "140px", md: "200px" }}
                h={{ base: "96px", md: "160px" }}
                boxShadow="xl"
                borderRadius={{ base: "10px", md: "20px" }}
                bg="white"
                mb="20px"
                pos="relative"
                border="1px solid #f0f0f0"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={Unity} alt="RubyOnRails" w="40%" />
              </Flex>

              <Text
                fontWeight="500"
                fontSize={{ base: "10px", md: "s" }}
                color="gray.600"
              >
                ゲームエンジニア
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={{ base: "10", md: "20" }} px="5" bg="mainGray">
        <Container maxW={"980px"} px={"0"}>
          <Heading
            fontSize={{ base: "lg", md: "xl" }}
            mb="15px"
            color="#252525"
            textAlign="center"
          >
            選択された言語の
            <br diaplay={{ base: "block", md: "none" }} />
            学習ロードマップが
            <br className="brDisplay" />
            自動生成されます
          </Heading>
          <Text
            mt={"14px"}
            fontWeight={"medium"}
            fontSize={{ base: "s", md: "m" }}
            mb={"70px"}
          >
            学習したいコースを選択すると
            <br />
            最適なオリジナルロードマップが
            <br diaplay={{ base: "block", md: "none" }} />
            自動生成されます。
          </Text>

          {/* Photo by Sergey Zolkin on Unsplash */}
          <Box maxW="780px" mx="auto">
            <Box
              className="roadmap-movie-container"
              pos="relative"
              w="100%"
              mx="auto"
              h="100%"
              pb="76%"
              bgImage={MovieBg}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize="cover"
            >
              {/* <Box> */}
              {/* <AspectRatio maxW="700px" ratio={4 / 3} mx="auto">
              <iframe
                src="https://www.youtube.com/embed/n61ULEU7CO0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio> */}
              {/* </Box> */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 開発中　非表示 */}
      {/* <Box
        py={{ base: "10", md: "20" }}
        px="5"
        bg="grayBg"
        className="howToUseSection"
      >
        <Container maxW={"1180px"} px={"0"}>
          <Flex
            justify="space-between"
            flexDir={{ base: "column", md: "row" }}
            className="planCard"
          >
            <Image
              src={HowToUseImage}
              alt="mentorplan"
              w={{ base: "100%", md: "590px" }}
            />
            <Box
              w={{ base: "100%", md: "44%" }}
              py={{ base: "8", md: "10" }}
              textAlign="left"
            >
              <h3 fontSize={{ bese: "20px", md: "26px" }}>
                ロードマップ作成
                <br className="brDisplay" />
                プランのやり方
              </h3>
              <Text
                fontSize={{ bese: "s", md: "m" }}
                fontWeight="500"
                mt={{ base: "15px", md: "30px" }}
                // textAlign="left"
              ></Text>
              ロードマップは以下の順で作成できます。
              <br />
              <List textAlign="left" mt="20px" fontSize="15px">
                <ListItem>① サイドバーの関心タグの「+」を押す</ListItem>
                <ListItem>
                  ②
                  カリキュラム作成になったら、適当なタイトルや備考を入れて作成。
                </ListItem>
                <ListItem>
                  ③
                  タイトル横の3点リーダーをクリックして、「学習テンプレートを使う」をクリックするだけ。
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Container>
      </Box> */}

      <WeSupportYou />
    </Box>
  );
};
