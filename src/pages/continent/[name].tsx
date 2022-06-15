import { Flex } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/c_banner";
import { Content } from "../../components/c_content";

export default function Continent() {
  return (
    <Flex direction='column'>
      <ContinentBanner />

      <Flex direction='column' maxW='1160px' mx='auto' mb='10' px='1rem'>
        <Content />
      </Flex>

    </Flex>
  )
}