import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./city";

export function Cities() {
  return (
    <>
      <Heading fontWeight='500' fontSize={['2xl', '4xl']} mb='10'>
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}
      > 
        <City 
          city='Londres'
          country='Reino Unido'
          flag='/england_flag.png'
          image='/londres.png'
        />

        <City 
          city='Londres'
          country='Reino Unido'
          flag='/england_flag.png'
          image='/londres.png'
        />

        <City 
          city='Londres'
          country='Reino Unido'
          flag='/england_flag.png'
          image='/londres.png'
        />

        <City 
          city='Londres'
          country='Reino Unido'
          flag='/england_flag.png'
          image='/londres.png'
        />

        <City 
          city='Londres'
          country='Reino Unido'
          flag='/england_flag.png'
          image='/londres.png'
        />
      </Grid>
    </>
  )
}