import { Flex } from "@chakra-ui/react";

import { FaCocktail, FaUmbrellaBeach } from 'react-icons/fa'
import { GiChurch, GiModernCity, GiWorld } from 'react-icons/gi'

import { Category } from "./category";

export function Categories() {
  return (
    <Flex
      justify='space-between'
      maxW={'1160px'}
      mx='auto'
      w='100%'
      mt={['5','20']}
      wrap='wrap'
    >
      <Category icon={FaCocktail} name='vida noturna' />
      <Category icon={FaUmbrellaBeach} name='praia' />
      <Category icon={GiModernCity} name='moderno' />
      <Category icon={GiChurch} name='clássico' />
      <Category icon={GiWorld} name='e mais...' />
    </Flex>
  )
}