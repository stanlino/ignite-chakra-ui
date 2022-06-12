import { Flex } from "@chakra-ui/react";

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Categories } from "../components/categories";

export default function Home() {
  return (
    <Flex direction='column'>
      <Banner />
      <Categories />
    </Flex>
  )
}
