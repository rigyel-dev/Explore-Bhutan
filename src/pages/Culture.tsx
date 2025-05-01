import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import ThimphuTshechu from '../components/ThimphuTshechu/ThimphuTshechu'
import JambayDrupFestival from '../components/JambayDrupFestival/JambayDrupFestival'
import PunakhaDrubchen from '../components/PunakhaDrubchen/PunakhaDrubchen'
import Welcome from '../components/Welcome/Welcome'

const Culture = () => {
  return (
    <>
    <Welcome/>
      <Center fontSize="25px" mb="20px" margin="30px">
        <Heading size="xl" textAlign="center" >Most Popular Festivals in Bhutan</Heading>
      </Center>

      <Flex gap="4" margin="25px" border="1px solid gray" borderRadius="xl" m={4}>
        <PunakhaDrubchen/>
        <ThimphuTshechu/>
        <JambayDrupFestival/>
      </Flex>
    </>
  )
}

export default Culture
