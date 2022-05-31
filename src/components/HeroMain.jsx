import { gsap } from "gsap";
import { useCallback, useEffect, useRef, memo } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Container,
  VStack,
} from "@chakra-ui/react";
import HeroPcImage from "../imgs/macbook-pro-moc-new.png";
import HeroPhoneImage from "../imgs/Iphone-moc.png";
import SliderImage1 from "../imgs/inside-the-slider/hero-slider1-2.png";
import SliderImage2 from "../imgs/inside-the-slider/hero-slider2.png";
import SliderImage3 from "../imgs/inside-the-slider/hero-slider3.png";
import InsidePhoneContents from "../imgs/inside-the-iphone/HeroTimerIphoneInside.png";
import rectObj from "../imgs/rectObj.png";
import ellipseObj from "../icons/EllipseGr.png";
import RectObjOr from "../icons/Rectangle-or.png";
import ReminderWindow from "../imgs/Reminder-window.png";
import AddNote from "../imgs/AddNote-window.png";
import SetTheTimer from "../imgs/SetTimer-window.png";
import DotsBg from "../icons/DotsObjBg.svg";
import RectGradation from "../imgs/RectangleGrade.png";

export const HeroMain = memo(() => {
  console.log("HeroMainレンダリング！");
  // Hero Slider function
  const changeImages = () => {
    const target1 = document.querySelector(".slideImage1");
    const target2 = document.querySelector(".slideImage2");
    const target3 = document.querySelector(".slideImage3");
    if (target1 && target2 && target3) {
      if (target1.classList.contains("show")) {
        target1.classList.remove("show");
        target2.classList.add("show");
      } else if (target2.classList.contains("show")) {
        target2.classList.remove("show");
        target3.classList.add("show");
      } else if (target3.classList.contains("show")) {
        target3.classList.remove("show");
        target1.classList.add("show");
      } else {
        return;
      }
    }
    return;
  };
  const startCounting = () => {
    setInterval(changeImages, 5000);
  };
  useEffect(() => {
    startCounting();
  });

  // window.addEventListener("beforeunload", (startCounting) => {
  //   startCounting.preventDefault();
  // });

  //Count up timer function

  let totalSeconds = 0;

  function countUpTimer() {
    const timerTarget = document.getElementById("count_up_timer");
    if (timerTarget) {
      ++totalSeconds;
      // console.log(totalSeconds);
      let hour = Math.floor(totalSeconds / 3600);
      let minute = Math.floor((totalSeconds - hour * 3600) / 60);
      let seconds = totalSeconds - (hour * 3600 + minute * 60);
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (seconds < 10) seconds = "0" + seconds;
      timerTarget.innerHTML = hour + "h" + minute + "min" + seconds + "s";
    } else if (totalSeconds > 0) {
      totalSeconds = 0;
    }
  }

  useEffect(() => {
    setInterval(countUpTimer, 1000);
  });

  // Gsap function
  const obj = useRef();
  const targets = gsap.utils.selector(obj);
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
    gsap.from(targets(".texts"), {
      opacity: 0,
      y: 10,
      duration: 1.3,
      stagger: 0.4,
      ease: "Power1.easeInOut",
    });
  }, []);

  return (
    <Box pos="relative" ref={obj} className="heroSection">
      <Image
        src={DotsBg}
        maxW={{ base: "180px", md: "200px", lg: "270px" }}
        display={{ base: "none", md: "block" }}
        bottom="6px"
        left="-100px"
        pos="absolute"
        alt="DotsBg"
        zIndex="-1"
      />
      <Image
        src={RectGradation}
        display={{ base: "none", md: "block" }}
        maxW="60px"
        bottom="200px"
        right="80px"
        pos="absolute"
        alt="RectGradaObject"
        className="shape"
      />

      <Container size={"non"} maxW="1240px" px="0" py="50px" pos="relative">
        <Image
          src={RectObjOr}
          maxW={{ base: "20px", md: "40px" }}
          top={{ base: "0px", md: "40px" }}
          left={{ base: "30px", md: "190px" }}
          pos="absolute"
          alt="RectObjOrange"
          className="shape"
        />
        <Image
          src={ellipseObj}
          maxW={{ base: "30px", md: "60px" }}
          top={{ base: "80px", md: "100px" }}
          right={{ base: "10px", md: "100px" }}
          pos="absolute"
          alt="ellipseObject"
          className="shape"
        />

        <VStack
          align="center"
          justify="center"
          spacing="30px"
          pos="relative"
          mb="50px"
        >
          <Heading
            fontSize={{ base: "20px", sm: "24px", md: "34px" }}
            mb="-8px"
            lineHeight="1.5em"
            className="texts"
          >
            ロードマップ作成と
            <br className="brDisplay" />
            時間管理を助ける
            <br />
            専門職のための学習ツール
          </Heading>

          <Text
            className="TopSub texts"
            fontSize={{ base: "s", md: "m" }}
            fontWeight="medium"
          >
            Upacityは学習計画の作成と実行、
            <br diaplay={{ base: "block", md: "non" }} />
            復習をサポート。
            <br />
            スクラムボードで学習管理をしよう！
          </Text>
        </VStack>

        <Flex
          className="wrapper"
          pos="relative"
          maxW={{ base: "90%", lg: "860px" }}
          mx="auto"
        >
          {/* 装飾Object */}
          <Image
            src={rectObj}
            maxW={{ base: "40px", md: "100px", lg: "160px" }}
            top={{ base: "-120px", md: "-100px" }}
            left={{ base: "-10px", md: "-10px", lg: "-150px" }}
            pos="absolute"
            alt="RectObject"
            className="shape"
          />

          {/* Pc Moc Image */}

          <Box
            w="100%"
            h="100%"
            pb="58%"
            bgImage={HeroPcImage}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize="cover"
            className="this"
            ml={{ base: "0px", lg: "-20px" }}
            pos="relative"
          >
            <Box
              w="78%"
              pos="absolute"
              top="3.5%"
              left="11%"
              className="sliderBox"
            >
              <Image
                className="slideImage1 show"
                w="100%"
                h="auto"
                src={SliderImage1}
                pos="absolute"
                top="0"
                left="0"
                objectFit="cover"
                opacity="0"
                transition="opacity .8s ease-in-out"
              />
              <Image
                className="slideImage2"
                w="100%"
                h="auto"
                src={SliderImage2}
                pos="absolute"
                top="0"
                left="0"
                objectFit="cover"
                opacity="0"
                transition="opacity .8s ease-in-out"
              />
              <Image
                className="slideImage3"
                w="100%"
                h="auto"
                src={SliderImage3}
                pos="absolute"
                top="0"
                left="0"
                objectFit="cover"
                opacity="0"
                transition="opacity .8s ease-in-out"
              />
            </Box>
          </Box>

          <Image
            src={DotsBg}
            maxW={{ base: "140px", md: "200px", lg: "270px" }}
            top={{ base: "-30px", md: "-50px" }}
            right={{ base: "0px", md: "50px" }}
            pos="absolute"
            alt="DotsBg"
            zIndex="-1"
          />

          <Image
            src={ReminderWindow}
            className="shape"
            maxW={{ base: "60px", md: "130px" }}
            bottom={{ base: "50px", md: "120px" }}
            left={{ base: "0px", md: "0px" }}
            pos="absolute"
            alt="ReminderWIndow"
            bgSize="contain"
            zIndex="1"
          />

          <Image
            src={AddNote}
            maxW={{ base: "60px", md: "120px" }}
            top={{ base: "-26px", md: "-30px" }}
            right={{ base: "60px", md: "60px" }}
            pos="absolute"
            alt="AddNote"
            zIndex="1"
            className="shape"
          />

          <Image
            src={SetTheTimer}
            maxW={{ base: "60px", md: "85px" }}
            bottom="100px"
            right="-60px"
            pos="absolute"
            alt="SetTheTimer"
            zIndex="1"
            className="shape"
            display={{ base: "none", lg: "block" }}
          />

          {/* Phone Moc Image */}
          <Box
            w="25%"
            pb="38.5%"
            bgImage={HeroPhoneImage}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize="contain"
            pos="absolute"
            bottom="0"
            right="-10px"
          >
            <Box
              w="70%"
              pos="absolute"
              top="10%"
              left="15.3%"
              className="insidePhoneContents"
            >
              <Image
                src={InsidePhoneContents}
                alt="phone-inside-contents"
                w="100%"
                h="auto"
                pos="absolute"
                top="0"
                left="0"
                objectFit="cover"
              />
            </Box>

            {/* phone timer counter */}
            <Box pos="absolute" bottom="20%" right="0" left="0">
              <Box>
                <Text
                  fontSize={{ base: "6px", md: "12px" }}
                  mb="10px"
                  color="gray.600"
                  display={{ base: "none", md: "block" }}
                >
                  Ruby on Rails
                  <br diaplay={{ base: "block", md: "none" }} />
                  Tutorial
                </Text>
                <Text
                  fontSize="5px"
                  mb="4px"
                  color="gray.600"
                  display={{ base: "block", md: "none" }}
                >
                  Ruby on Rails
                </Text>
                <Box
                  id="count_up_timer"
                  fontSize={{ base: "6px", md: "20px" }}
                  color="gray.600"
                >
                  00:00:00
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
});
