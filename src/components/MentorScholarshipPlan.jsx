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
import MentorPlan from "../imgs/mentorplan.png";

export const MentorScholarshipPlan = () => {
  return (
    <Box
      pt={{ base: "4", md: "16" }}
      pb={20}
      px={5}
      bg="grayBg"
      className="mainTarget"
    >
      <Container maxW="980px" p={0}>
        <Flex justify="space-between" flexWrap="wrap" flexDir="row-reverse">
          <Flex justify="center">
            <Image
              src={MentorPlan}
              alt="customfunction-image"
              maxW={{ base: "100%", lg: "480px" }}
              maxH={{ base: "100%", lg: "305px" }}
              pos="relative"
              objectFit="cover"
              borderRadius="30px"
            />
          </Flex>

          <Flex
            direction="column"
            alignItems={{ base: "center", lg: "baseline" }}
            maxW={{ base: "100%", lg: "380px" }}
            mt="24px"
            mx="auto"
          >
            <Heading
              fontSize={{ base: "20px", md: "2xl" }}
              fontWeight="600"
              color="#252525"
              textAlign="left"
            >
              Mentor・Scholarshipプラン
            </Heading>
            <Text
              fontSize={{ base: "s", md: "16px" }}
              fontWeight="500"
              textAlign="left"
              mt={4}
            >
              学習での躓きを質問したい。コミュニティーに入って周りの人と一緒に頑張りたい。
              <br />
              そんな時にはメンタープランがおすすめです。現役エンジニアからのアドバイスや、同じ学習者とのやりとりも。
              <br />
              また奨学生制度に選ばれると、メンタープランが実質無料に。
            </Text>
            <Link to="/mentor-scholarship">
              <Button mt={8} size={"md"}>
                もっと詳しく
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
