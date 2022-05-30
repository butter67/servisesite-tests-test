import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Flex
      bg="bl"
      color={"white"}
      py={{ base: "8", md: "10" }}
      px={{ base: "6", md: "12" }}
      justify="space-between"
      flexDir={{ base: "column", md: "row" }}
      pos="absolute"
      bottom="0"
      w="100%"
    >
      <Wrap
        w={{ base: "100%", md: "40%" }}
        justify="space-around"
        flexWrap="wrap"
        fontSize={{ base: "s", md: "m" }}
        _hover={{ cursor: "pointer", opacity: "0.8", transition: "2s all" }}
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

        <WrapItem>
          <NavLink to="/userinterview">
            <Text>事例</Text>
          </NavLink>
        </WrapItem>

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
        fontSize={{ base: "s", md: "md" }}
        fontWeight="medium"
        mt={{ base: "30px", md: "0px" }}
      >
        Copyright © 2021 Upa inc.
      </Text>
    </Flex>
  );
};
