import { Box, Center, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import ThimphuTshechu from '../components/ThimphuTshechu/ThimphuTshechu'
import JambayDrupFestival from '../components/JambayDrupFestival/JambayDrupFestival'
import PunakhaDrubchen from '../components/PunakhaDrubchen/PunakhaDrubchen'

const Culture = () => {
  return (
    <>
      <Center fontSize="25px" mb="20px" margin="30px">
        <strong>Most Popular Festivals in Bhutan</strong>
      </Center>

      <Flex gap="4" margin="25px">
        <PunakhaDrubchen/>
        <ThimphuTshechu/>
        <JambayDrupFestival/>
      </Flex>
    </>
  )
}

export default Culture
