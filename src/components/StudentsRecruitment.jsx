import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import axios from "axios";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import bgImage from "../imgs/mentor-scholarship-page/bgPicture.png";

export const StudentsRecruitment = () => {
  const [data, setData] = useState();

  const baseURL = "https://upacity.cdn.newt.so/v1/upacity-service-site/offer";
  const token = process.env.REACT_APP_NEWT_API_TOKEN;

  useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        setData(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => console.log(error));
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  const objs = useRef();
  const obj = gsap.utils.selector(objs);

  useEffect(() => {
    gsap.from(obj(".textTarget"), {
      duration: 1.3,
      x: -60,
      opacity: 0,
      ease: "power1.out",
      stagger: {
        from: "top",
        amount: 0.7, // 0.8秒おきに
      },
      scrollTrigger: {
        trigger: ".boshuSection",
        start: "top center",
      },
    });
  }, []);

  return (
    <Box
      w="100%"
      bgImage={bgImage}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      py={{ base: "14", md: "20" }}
      px={5}
      className="boshuSection"
      ref={objs}
    >
      <Box color="white" fontFamily={"pop"}>
        <Text
          fontSize={{ base: "30px", md: "52px" }}
          fontFamily={"pop"}
          mb="0px"
          color="#113366"
          className="textTarget"
        >
          Mentor ・ Scholarship
        </Text>
        <Text color="#113366" className="textTarget">
          メンター・スカラーシッププラン
        </Text>

        <Flex
          fontSize={{ base: "16px", md: "38px" }}
          mt="30px"
          justifyContent="center"
          fontWeight="600"
          fontFamily={"pop"}
          color="#0B0742"
          className="textTarget"
        >
          <Text>{data && data[0].turn}</Text>
          <Text fontWeight="200" mx={{ base: "20px", md: "50px" }}>
            |
          </Text>
          <Text>
            {data && data[0].startyear}.{data && data[0].startmonth}-
            {data && data[0].endyear}.{data && data[0].endmonth}
          </Text>
          <Text fontWeight="200" mx={{ base: "20px", md: "50px" }}>
            |
          </Text>
          <Text>募集開始</Text>
        </Flex>
        <Flex
          justifyContent="center"
          flexDir="row"
          mt="20px"
          className="textTarget"
        >
          <Text color="red" mr="10px">
            *
          </Text>
          <Text color="#FF403D" fontSize={{ base: "14px", md: "16px" }}>
            {data && data[0].turn} {data && data[0].recruitstartyear}.
            {data && data[0].recruitstartmonth}-{data && data[0].recruitendyear}
            .{data && data[0].recruitendmonth}
          </Text>
        </Flex>
        <Button
          variant={"pointOrange"}
          fontSize="20px"
          mt="40px"
          fontWeight="600"
          className="buttonTarget"
        >
          申し込む
        </Button>
      </Box>
    </Box>
  );
};
