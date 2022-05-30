import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  Image,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Planning from "../imgs/stydy-schedule.png";
import TimeCounting from "../imgs/time-count.png";
import MakeANote from "../imgs/study-note.png";
import Reminder from "../imgs/reminder.png";
import Report from "../imgs/custom-grath.png";

import Idea from "../imgs/Idea-icon.png";
import Clock from "../imgs/Clock-icon.png";
import Book from "../imgs/Book-icon.png";
import Bell from "../imgs/Bell-icon.png";
import Grafh from "../imgs/Grafh-icon.png";

export const BasicFunctions = () => {
  const windows = useRef();
  const window = gsap.utils.selector(windows);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(window(".target"), {
      duration: 1,
      y: 10, // 少し上に移動させる
      opacity: 0,
      ease: "power1.out",
      // 複数要素を扱うプロパティ
      stagger: {
        from: "start", //左側から
        amount: 1.3, // 0.8秒おきに
      },
      scrollTrigger: {
        // markers: true,
        trigger: ".windowsWrap",
      },
    });
  }, []);

  return (
    <Box py="20" px="5" bg="grayBg" className="mainTarget">
      <Container maxW="1200px" p={0}>
        <Heading
          fontSize={{ base: "lg", md: "xl" }}
          mb="15px"
          color="#252525"
          textAlign="center"
        >
          学習管理のための
          <br className="brDisplay" />
          便利な機能
        </Heading>
        <Text
          mt={"14px"}
          fontWeight={"medium"}
          fontSize={{ base: "s", md: "m" }}
          mb={"100px"}
        >
          便利機能を利用して、進捗を可視化。
          <br />
          企業等へのアピール材料を作ります。
        </Text>

        <Flex
          justify="space-around"
          alignItems="center"
          flexWrap="wrap"
          ref={windows}
          className="windowsWrap"
        >
          <Box
            className="subjectCard target"
            mb={{
              base: "50px",
              md: "70px",
            }}
          >
            <Box
              w={{ base: "140px", md: "200px" }}
              h={{ base: "96px", md: "160px" }}
              boxShadow="xl"
              borderRadius={{ base: "10px", md: "20px" }}
              bgImage={Planning}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize="cover"
              mb="20px"
              pos="relative"
            >
              <Image
                src={Idea}
                w={{ base: "14", md: "16" }}
                h={{ base: "14", md: "16" }}
                pos="absolute"
                top="-30px"
                left="15px"
              />
            </Box>

            <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
              学習の管理
            </Text>
          </Box>

          <Box
            className="subjectCard target"
            mb={{
              base: "50px",
              md: "70px",
            }}
          >
            <Box
              w={{ base: "140px", md: "200px" }}
              h={{ base: "96px", md: "160px" }}
              boxShadow="xl"
              borderRadius={{ base: "10px", md: "20px" }}
              bgImage={TimeCounting}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize="cover"
              mb="20px"
              pos="relative"
            >
              <Image
                src={Clock}
                w={{ base: "14", md: "16" }}
                h={{ base: "14", md: "16" }}
                pos="absolute"
                top="-30px"
                left="15px"
              />
            </Box>

            <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
              学習時間の測定
            </Text>
          </Box>

          <Box
            className="subjectCard target"
            mb={{
              base: "50px",
              md: "70px",
            }}
          >
            <Box
              w={{ base: "140px", md: "200px" }}
              h={{ base: "96px", md: "160px" }}
              boxShadow="xl"
              borderRadius={{ base: "10px", md: "20px" }}
              bgImage={MakeANote}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize="cover"
              mb="20px"
              pos="relative"
            >
              <Image
                src={Book}
                w={{ base: "14", md: "16" }}
                h={{ base: "14", md: "16" }}
                pos="absolute"
                top="-30px"
                left="15px"
              />
            </Box>

            <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
              ノートの作成
            </Text>
          </Box>

          <Box
            className="subjectCard target"
            mb={{
              base: "50px",
              md: "70px",
            }}
          >
            <Box
              w={{ base: "140px", md: "200px" }}
              h={{ base: "96px", md: "160px" }}
              boxShadow="xl"
              borderRadius={{ base: "10px", md: "20px" }}
              bgImage={Reminder}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize="cover"
              mb="20px"
              pos="relative"
            >
              <Image
                src={Bell}
                w={{ base: "14", md: "16" }}
                h={{ base: "14", md: "16" }}
                pos="absolute"
                top="-30px"
                left="15px"
              />
            </Box>

            <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
              復習リマインダー
            </Text>
          </Box>

          <Box
            className="subjectCard target"
            mb={{
              base: "50px",
              md: "70px",
            }}
          >
            <Box
              w={{ base: "140px", md: "200px" }}
              h={{ base: "96px", md: "160px" }}
              boxShadow="xl"
              borderRadius={{ base: "10px", md: "20px" }}
              bgImage={Report}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              bgSize="cover"
              mb="20px"
              pos="relative"
            >
              <Image
                src={Grafh}
                w={{ base: "14", md: "16" }}
                h={{ base: "14", md: "16" }}
                pos="absolute"
                top="-30px"
                left="15px"
              />
            </Box>

            <Text fontWeight="500" fontSize={{ base: "s", md: "m" }}>
              レポートの作成
            </Text>
          </Box>
        </Flex>

        <Link to="/learning-management">
          <Button>学習管理機能とは</Button>
        </Link>
      </Container>
    </Box>
  );
};
