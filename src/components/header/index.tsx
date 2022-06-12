import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
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