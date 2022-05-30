import {
  Box,
  Flex,
  Button,
  Stack,
  Text,
  Heading,
  Image,
  Container,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import StudyPlanning from "../imgs/basicfunctions-page/study-organize.png";
import StudyTimeCounting from "../imgs/basicfunctions-page/timerImage.png";
import MakeANote from "../imgs/basicfunctions-page/makeANote.png";
import Reminder from "../imgs/basicfunctions-page/reminder-mail.png";
import Report from "../imgs/basicfunctions-page/make-a-report.png";

export const LearningManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box py={{ base: "10", md: "20" }} px="5">
      <Container maxW="980px" p={0}>
        <Text
          mb="30px"
          fontSize={{ base: "24px", md: "36px" }}
          fontFamily="pop"
          fontWeight="600"
        >
          学習管理のための
          <br className="brDisplay" />
          便利な機能
        </Text>
        {/* <Heading
          fontSize={{ base: "xl", md: "grande" }}
          mb="15px"
          color="#252525"
          textAlign="center"
        >
          学習管理のための
          <br className="brDisplay" />
          便利な機能
        </Heading> */}
        <Text
          mt={"14px"}
          fontWeight={"medium"}
          fontSize={{ base: "s", md: "md" }}
          mb={{ base: "60px", md: "100px" }}
        >
          便利機能を利用して、進捗を可視化。
          <br />
          ここではUpacityのベーシック機能をご紹介します。
        </Text>

        <Stack direction="column" spacing={{ base: "46px", md: "60px" }}>
          <Flex
            justify="space-between"
            flexDir={{ base: "column", md: "row-reverse" }}
          >
            <Image
              src={StudyPlanning}
              alt="Planning-image"
              display="box"
              w={{ base: "100%", md: "48%" }}
            />

            <Flex
              flexDir="column"
              alignItems="center"
              w={{ base: "100%", md: "48%" }}
              mt={{ base: "25px", md: "50px" }}
            >
              <Heading
                fontSize={{ base: "19px", md: "24px" }}
                fontFamily="noto"
                fontWeight="600"
              >
                学習の管理
              </Heading>
              <Text
                w={{ base: "100%", md: "70%" }}
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="500"
                textAlign="left"
              >
                各タスクを登録でき、進捗状態が一目瞭然。
                <br />
                TODOリストの登録なども可能になっており、学習の進み状況が管理しやすくなっています。
              </Text>
            </Flex>
          </Flex>

          <Flex justify="space-between" flexDir={{ base: "column", md: "row" }}>
            <Image
              src={StudyTimeCounting}
              alt="Planning-image"
              display="box"
              w={{ base: "100%", md: "48%" }}
            />

            <Flex
              flexDir="column"
              alignItems="center"
              w={{ base: "100%", md: "48%" }}
              mt={{ base: "25px", md: "50px" }}
            >
              <Heading
                fontSize={{ base: "19px", md: "24px" }}
                fontFamily="noto"
                fontWeight="600"
              >
                学習時間の測定
              </Heading>
              <Text
                w={{ base: "100%", md: "70%" }}
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="500"
                textAlign="left"
              >
                タイマー機能で、学習の開始から終了までの時間を計測。
                <br />
                それらが集計されることによって、1週間、1月でどのくらい学習したのか、学習時間の把握に役立ちます。
              </Text>
            </Flex>
          </Flex>

          <Flex
            justify="space-between"
            flexDir={{ base: "column", md: "row-reverse" }}
          >
            <Image
              src={MakeANote}
              alt="Planning-image"
              display="box"
              w={{ base: "100%", md: "48%" }}
            />

            <Flex
              flexDir="column"
              alignItems="center"
              w={{ base: "100%", md: "48%" }}
              mt={{ base: "25px", md: "50px" }}
            >
              <Heading
                fontSize={{ base: "19px", md: "24px" }}
                fontFamily="noto"
                fontWeight="600"
              >
                ノートの作成
              </Heading>
              <Text
                w={{ base: "100%", md: "70%" }}
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="500"
                textAlign="left"
              >
                その日行った学習内容を、ノートに残すことができます。
                {/* <br /> */}
                高度なエディタでコードブロックや画像などの編集も可能。
                <br />
                書き残すことによって覚えたり、復習の際にノートの利用が役に立ちます。
              </Text>
            </Flex>
          </Flex>

          <Flex justify="space-between" flexDir={{ base: "column", md: "row" }}>
            <Image
              src={Reminder}
              alt="Planning-image"
              display="box"
              w={{ base: "100%", md: "48%" }}
            />

            <Flex
              flexDir="column"
              alignItems="center"
              w={{ base: "100%", md: "48%" }}
              mt={{ base: "25px", md: "50px" }}
            >
              <Heading
                fontSize={{ base: "19px", md: "24px" }}
                fontFamily="noto"
                fontWeight="600"
              >
                復習リマインダー
              </Heading>
              <Text
                w={{ base: "100%", md: "70%" }}
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="500"
                textAlign="left"
              >
                学習内容をリマインダー設定すると、指定した期間にあなたのメールに復習リマインダーが届くようになります。
                <br />
                繰り返し復習することによって、学習内容の定着を促します。
              </Text>
            </Flex>
          </Flex>

          <Flex
            justify="space-between"
            flexDir={{ base: "column", md: "row-reverse" }}
          >
            <Image
              src={Report}
              alt="Planning-image"
              display="box"
              w={{ base: "100%", md: "48%" }}
            />

            <Flex
              flexDir="column"
              alignItems="center"
              w={{ base: "100%", md: "48%" }}
              mt={{ base: "25px", md: "50px" }}
            >
              <Heading
                fontSize={{ base: "19px", md: "24px" }}
                fontFamily="noto"
                fontWeight="600"
              >
                レポートの作成
              </Heading>
              <Text
                w={{ base: "100%", md: "70%" }}
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="500"
                textAlign="left"
              >
                日々の学習状況、累計学習時間や、持っているポイントなどがレポートとして作成され、マイレポートからか確認できます。
                <br />
                学習状況を可視化することで、目標に向かうモチベーションの維持にも役に立ちます。
              </Text>
            </Flex>
          </Flex>
        </Stack>

        {/* If you don't know how */}
        <Box pt={{ base: "16", md: "24" }}>
          <Container p={0}>
            <Flex
              bg="#FC7E7C"
              color="white"
              borderRadius="30px"
              maxW="1100px"
              textAlign="left"
              px={{ base: "2.5rem", md: "5rem" }}
              py={14}
              flexDir={{ base: "column-reverse", md: "row" }}
              justifyContent="space-between"
            >
              <Box w={{ base: "100%", md: "48%" }}>
                <Text fontSize="17px" fontWeight={"medium"} mb={5}>
                  学習の順序を決めるのって、最初は難しいですよね？
                  <br />
                  大丈夫です。私たちのカスタムプラン機能で、おすすめの学習プランを提案します。
                </Text>

                <Link to="/learning-roadmap">
                  <Button
                    w={{ base: "220px", md: "260px" }}
                    fontSize={{ base: "13px", md: "15px" }}
                  >
                    学習ロードマッププランとは
                  </Button>
                </Link>
              </Box>

              <Flex
                w={{ base: "100%", md: "48%" }}
                justifyContent={{ base: "left", md: "center" }}
                alignItems="center"
              >
                <Heading
                  // className="wesupportyou"
                  fontSize={{ base: "36px", md: "42px" }}
                  fontFamily={"Poppins"}
                  fontWeight="800"
                  color="white"
                  textAlign="left"
                  letterSpacing={1.5}
                >
                  If you
                  <br />
                  don't know
                  <br />
                  How.
                </Heading>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};
