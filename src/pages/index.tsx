import { Flex } from "@chakra-ui/react";

import { Header } from "../components/header";
import { Banner } from "../components/banner";

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
    </Flex>
  )
}
