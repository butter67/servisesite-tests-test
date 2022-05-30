import "./App.css";
import { useEffect, useState, memo } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Flex, Box } from "@chakra-ui/react";

import { HeaderNav } from "./components/HeaderNav";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { LearningManagement } from "./pages/LearningManagement";
import { UserInterviewContent } from "./pages/UserInterviewContent";
import { PricePlanPage } from "./pages/PricePlanPage";
import { Company } from "./pages/Company";
import { LeaningRoadMap } from "./pages/LeaningRoadMap";
import { MentorScholarshipPage } from "./pages/MentorScholarshipPage";

export const App = () => {
  //Interview section data
  const [interviewPosts, setInterviewPosts] = useState();

  const baseURL =
    "https://upacity.cdn.newt.so/v1/upacity-service-site/interview";

  const token = process.env.REACT_APP_NEWT_API_TOKEN;

  useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        setInterviewPosts(response.data.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box className="App">
      <Flex
        flexDir="column"
        pos="relative"
        minH="100vh"
        pb={{ base: "136px", md: "107px" }}
        boxSizing="border-box"
      >
        <HeaderNav />
        <Box>
          <Routes>
            <Route path="/" element={<Home posts={interviewPosts} />} />
            <Route
              path="/learning-management"
              element={<LearningManagement />}
            />
            <Route path="/learning-roadmap" element={<LeaningRoadMap />} />
            <Route
              path="/mentor-scholarship"
              element={<MentorScholarshipPage />}
            />
            <Route
              path="/userinterview"
              element={<UserInterviewContent posts={interviewPosts} />}
            />
            <Route path="/price-plan" element={<PricePlanPage />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </Box>

        <Footer />
      </Flex>
    </Box>
  );
};

export default App;
