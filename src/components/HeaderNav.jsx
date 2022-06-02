import {
  Flex,
  Text,
  Image,
  Wrap,
  WrapItem,
  Button,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../icons/Logo-clock.png";

import { DrawerMenu } from "../components/DrawerMenu";

export const HeaderNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const moveToUpacity = () => {
    window.open("https://app.upacity.jp/", "_blank");
    onClose();
  };

  return (
    <Flex
      bg="white"
      px={{ base: "10px", md: "30px" }}
      py={{ base: "4px", md: "0px" }}
      justify="space-between"
      pos="sticky"
      top="0"
      zIndex="99"
    >
      <Flex align="center" py="4px">
        <Link to="/">
          <Image
            src={LogoImage}
            boxSize={{ base: "30px", md: "40px" }}
            alt="upacity-logo"
          />
        </Link>
        <Link to="/">
          <Text fontSize={{ base: "20px", sm: "xl", md: "4xl" }}>Upacity</Text>{" "}
        </Link>
      </Flex>
      <Flex align="center">
        <Wrap mr="30px" spacing="40px" display={{ base: "none", lg: "block" }}>
          <WrapItem className="navItem" transition="all 0.3s">
            <Link to="/">ホーム</Link>
          </WrapItem>
          <WrapItem
            className="navItem"
            transition="all 0.3s"
            _hover={{
              cursor: "pointer",
              color: "#4365DD",
              transition: "all 0.3s",
            }}
          >
            <Menu isOpen={isOpen}>
              <MenuButton
                variant="ghost"
                mx={1}
                fontWeight="600"
                _hover={{ opacity: 0.8 }}
                aria-label="Functions"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                機能
              </MenuButton>
              <MenuList
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                bg="navy"
                borderRadius="0px"
                p={0}
                color="white"
              >
                <MenuItem
                  p={3}
                  transition="all 0.3s"
                  fontSize="s"
                  _hover={{
                    opacity: 0.8,
                    color: "white",
                    bg: "navy",
                    transition: "all 0.3s",
                  }}
                  onClick={onClose}
                >
                  <Link to="/learning-management">学習管理機能</Link>
                </MenuItem>
                <MenuItem
                  p={4}
                  transition="all 0.3s"
                  fontSize="s"
                  _hover={{
                    opacity: 0.8,
                    color: "white",
                    bg: "navy",
                    transition: "all 0.3s",
                  }}
                  onClick={onClose}
                >
                  <Link to="/learning-roadmap"> 学習ロードマップ作成機能</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </WrapItem>

          <WrapItem
            className="navHover"
            transition="all 0.3s"
            _hover={{
              cursor: "pointer",
              color: "#4365DD",
              transition: "all 0.3s",
            }}
          >
            <Link to="/mentor-scholarship">
              <Text>メンタープラン</Text>
            </Link>
          </WrapItem>

          {/* 開発中 */}
          {/* 
          <WrapItem
            transition="all 0.3s"
            _hover={{
              cursor: "pointer",
              color: "#4365DD",
              transition: "all 0.3s",
            }}
          >
            <NavLink to="/userinterview">
              <Text>事例</Text>
            </NavLink>
          </WrapItem> */}

          <WrapItem
            className="navHover"
            transition="all 0.3s"
            _hover={{
              cursor: "pointer",
              color: "#4365DD",
              transition: "all 0.3s",
            }}
          >
            <Link to="/price-plan">
              <Text>料金</Text>
            </Link>
          </WrapItem>

          <WrapItem
            transition="all 0.3s"
            _hover={{
              cursor: "pointer",
              color: "#4365DD",
              transition: "all 0.3s",
            }}
          >
            <Link to="/company">
              <Text>会社情報</Text>
            </Link>
          </WrapItem>
        </Wrap>
        <Button
          size={"sm"}
          display={{ base: "none", md: "block" }}
          variant={"orange"}
          fontSize={{ base: "14px" }}
          onClick={moveToUpacity}
        >
          Start App
        </Button>
        <Button
          size={"s"}
          display={{ base: "block", md: "none" }}
          variant={"orange"}
          fontSize={{ base: "14px" }}
          onClick={moveToUpacity}
          _focus={{
            outline: "none",
          }}
        >
          Start App
        </Button>

        {/* Drewer Menu */}
        <Box display={{ base: "block", lg: "none" }}>
          <DrawerMenu />
        </Box>
      </Flex>
    </Flex>
  );
};
