import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  country: string
  city: string
  flag: string
  image: string
}

export function City({ country, city, flag, image } : CityProps) {
  return (
    <Box borderRadius={'4px'} overflow='hidden'>
      <Image 
        src={image}
        h='170px'
        w='100%'
        alt={`Uma bela vista de ${city}`}
      />
      <Flex
        p='6'
        align='center'
        justify='space-between'
        bg='white'
        border='1px'
        borderColor='yellow.300'
        borderTop={0}
      >
        <Flex direction='column'>
          <Heading
            fontSize='xl'
            fontWeight='500'
          >
            {city}
          </Heading>
          <Text
            mt='3'
            fontSize='md'
            fontWeight='500'
            color='gray.500'
          >
            {country}
          </Text>
        </Flex>
        <Image 
          alt={`Bandeira correspondente ao país: ${country}`}
          src={flag}
          w='30px'
          h='30px'
          borderRadius='50%'
          objectFit='cover'
        />
      </Flex>
    </Box>
  )
}