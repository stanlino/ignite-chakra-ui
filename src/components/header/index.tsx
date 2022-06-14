import { Flex, Grid, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { IoChevronBack } from 'react-icons/io5'

export function Header() {

  const { asPath, back } = useRouter()

  return (
    <Flex
      bg='white'
      w='100%'
      as='header'
      mx='auto'
      px='1rem'
      h={['50',
      '100px']}
      align='center'
      justify='center'
    >
      <Grid
        h='100%'
        mx='auto'
        w='100%'
        maxW='1160px'
        alignItems='center'
        templateColumns='repeat(3,
        1fr)'
        justifyContent='center'
      >
        {asPath !== '/' && (
          <IconButton 
            aria-label="Retornar para a página anterior" 
            as={IoChevronBack} 
            size={'sm'}
            bg='transparent'
            onClick={back}
          />
        )}
        
        <Image
          w={['80px', '185px']}
          src='/logo.svg'
          alt='Logo da World Trip (Um avião voando sobre o nome escrito em letras garrafais'
          justifySelf='center'
          gridColumn='2'
        />
      </Grid>
    </Flex>
  )
}