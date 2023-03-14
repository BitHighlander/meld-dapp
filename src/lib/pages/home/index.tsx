import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import SomeText from "./components/SomeText";
import Pubkeys from "./components/Pubkeys";

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
    </Grid>
  );
};

export default Home;
