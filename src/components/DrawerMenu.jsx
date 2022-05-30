import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const moveToCompanySite = () => {
    window.open("https://upacity.jp/", "_blank");
    onClose();
  };

  const moveToUpacity = () => {
    window.open("https://app.upacity.jp/", "_blank");
    onClose();
  };

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        variant={"none"}
        size={"humSize"}
        _focus={{
          outline: "none",
        }}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        placement="top"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="navy" color="white">
          <DrawerCloseButton
            _focus={{
              outline: "none",
            }}
          />

          <DrawerBody textAlign="center" w="100%">
            <Wrap>
              <WrapItem
                w="100%"
                justifyContent="center"
                py={4}
                onClick={onClose}
              >
                <Link to="/">ホーム</Link>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem
                w="100%"
                justifyContent="center"
                py={4}
                onClick={onClose}
              >
                <Link to="/learning-management">ベーシック機能</Link>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem
                w="100%"
                justifyContent="center"
                py={4}
                onClick={onClose}
              >
                <Link to="/learning-roadmap">ロードマップ機能</Link>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem
                w="100%"
                justifyContent="center"
                py={4}
                onClick={onClose}
              >
                <Link to="/mentor-scholarship">メンタープラン</Link>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem
                w="100%"
                justifyContent="center"
                py={4}
                onClick={onClose}
              >
                <Link to="/price-plan">料金プラン</Link>
              </WrapItem>
            </Wrap>

            <Wrap>
              <WrapItem
                w="100%"
                justifyContent="center"
                py={4}
                onClick={onClose}
              >
                <Link to="/company">会社情報</Link>
              </WrapItem>
            </Wrap>
            <Button my={4} variant={"orange"} onClick={moveToUpacity}>
              Start App
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
