import { Flex, Heading } from "@chakra-ui/react";

import { Banner } from "../components/banner";
import { Categories } from "../components/categories";
import { Separator } from "../components/separator";
import Slider from "../components/slider";

export default function Home() {
  return (
    <Flex direction='column'>
      
      <Banner />
      <Categories />
      <Separator />

      <Heading
        textAlign='center'
        fontWeight='500'
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Slider />
      
    </Flex>
  )
}
