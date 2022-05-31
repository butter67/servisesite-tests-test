import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

import { HeroMain } from "../components/HeroMain";
import { CustomRoadMapPlan } from "../components/CustomRoadMapPlan";
import { UserInterview } from "../components/UserInterview";
import { PricePlan } from "../components/PricePlan";
import { WeSupportYou } from "../components/WeSupportYou";
import { BasicFunctions } from "../components/BasicFunctions";
import { MentorScholarshipPlan } from "../components/MentorScholarshipPlan";

export const Home = (props) => {
  const postsData = props.posts;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box>
        <HeroMain />
        <BasicFunctions />
        <CustomRoadMapPlan />
        <MentorScholarshipPlan />
        <UserInterview props={postsData} />
        <PricePlan />
        <WeSupportYou />
      </Box>
    </>
  );
};
