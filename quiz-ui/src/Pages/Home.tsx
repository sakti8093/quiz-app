import { Box } from "@chakra-ui/react";
import HeroImage from "../components/HeroImage";
import AllQuizes from "../components/AllQuizes";
import TrendQuizCard from "../components/TrendQuizCard";

const Home = () => {
  return (
    <Box>
      <HeroImage />
      <AllQuizes />
      <TrendQuizCard />
    </Box>
  );
};

export default Home;
