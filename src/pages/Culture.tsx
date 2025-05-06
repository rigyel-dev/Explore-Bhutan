import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import ThimphuTshechu from '../components/ThimphuTshechu/ThimphuTshechu'
import JambayDrupFestival from '../components/JambayDrupFestival/JambayDrupFestival'
import PunakhaDrubchen from '../components/PunakhaDrubchen/PunakhaDrubchen'
import Welcome from '../components/Welcome/Welcome'
import VideoHighlights from '../components/VideoHighlights/VideoHighlights'

const Culture = () => {
  return (
    <>
    <Heading  size="3xl" textAlign="center" p="6">Introduction</Heading>
    <Welcome/>
      <Center fontSize="25px" mb="20px" margin="30px">
        <Heading size="3xl" textAlign="center" >Most Popular Festivals in Bhutan</Heading>
      </Center>

      <Flex marginBottom={'6'} marginLeft={'12px'} w={'90%'} mx={'auto'} mt={4} border="1px solid gray" borderRadius="xl">
        <PunakhaDrubchen/>
        <ThimphuTshechu/>
        <JambayDrupFestival/>
      </Flex>
      <Heading size="3xl" textAlign="center" >Bhutanese Mask-Dance</Heading>
      <VideoHighlights/>
    </>
  )
}

export default Culture
