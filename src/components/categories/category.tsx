import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { ElementType } from "react";

import { GoPrimitiveDot } from 'react-icons/go'
 
interface CategoryProps {
  icon: ElementType
  name: string
}

export function Category({
  icon,
  name
}: CategoryProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex 
      mt={['4', '0']}
      w={['50%', 'auto']}
      mx='auto'
      justify='center'
    >
      <Flex
        direction={['row', 'column']} 
        align='center' 
        justify='center'
      >
        <Icon 
          as={isWideVersion ? icon : GoPrimitiveDot} 
          fontSize={isWideVersion ? '70' : '20'} 
          color='yellow.400' 
        />
        <Text fontWeight='600' mt={['0', '6']}>{name}</Text>
      </Flex>
    </Flex>
  )
}