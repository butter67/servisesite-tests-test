import { Flex, Text, Wrap, WrapItem, Box } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      pos="absolute"
      bottom="0"
      w="100%"
      bg="bl"
      pb={{ base: "30px", md: "0px", lg: "3px" }}
    >
      <Flex
        color={"white"}
        py={{ base: "8", md: "10" }}
        px={{ base: "6", md: "12" }}
        justifyContent="space-between"
        flexDir={{ base: "column", lg: "row" }}
        className="footerFlex"
        w={{ base: "100%", lg: "80%" }}
      >
        <Wrap
          w={{ base: "100%", md: "60%" }}
          justify="space-around"
          flexWrap="wrap"
          fontSize={{ base: "s", md: "m" }}
          _hover={{ cursor: "pointer", opacity: "0.8", transition: "2s all" }}
          mb={{ base: "20px", lg: "0px" }}
        >
          <WrapItem>
            <NavLink to="/">
              <Text>ホーム</Text>
            </NavLink>
          </WrapItem>
          <WrapItem>
            <NavLink to="/learning-management">
              <Text>機能</Text>
            </NavLink>
          </WrapItem>
          <WrapItem>
            <NavLink to="/mentor-scholarship">
              <Text>メンタープラン</Text>
            </NavLink>
          </WrapItem>

          {/* 準備中 */}
          {/* <WrapItem>
            <NavLink to="/userinterview">
              <Text>事例</Text>
            </NavLink>
          </WrapItem> */}

          <WrapItem>
            <NavLink to="/price-plan">
              <Text>料金</Text>
            </NavLink>
          </WrapItem>

          <WrapItem>
            <NavLink to="/company">
              <Text>会社情報</Text>
            </NavLink>
          </WrapItem>
        </Wrap>

        <Text
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight="400"
          color="#fcfcfc"
          ml={{ base: "10px", md: "0px" }}
          // textAlign={{ base: "left", lg: "center" }}
        >
          Copyright © 2021 Upa inc.
        </Text>
      </Flex>
    </Box>
  );
};
