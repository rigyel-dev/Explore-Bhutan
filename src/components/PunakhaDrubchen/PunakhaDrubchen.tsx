import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const PunakhaDrubchen = () => {
  return (
    <Box  p="6" rounded="md" order={1} flex="1" textAlign="justify">
              <Heading size="xl">1. Punakha Drubchen</Heading>
              <Image rounded="md" src="https://www.heavenlybhutan.com/wp-content/uploads/2018/07/Folk-festival-37-1024x683.jpg" height="400px" py="20px" loading="lazy"/>
              <Text margin="18px">Out of all the festivals in Bhutan, Punakha Drubchen is most unique. It is about recreation of some consequential 
                scenes and moments from the Tibetan Army battle of 17th Century. The local military officials recreate and re-enact the
                 scenes dressed in full battle gear complete with swords. It is to celebrate the victory and to pay tribute to the villagers 
                 who came forward to drive out the Tibetan army out of their country. It shows gratitude to these people because of whom, 
                 Tibet was unable to take over Bhutan. <br />
    
    Another major Bhutanese festival, Punakha Tshechu follows immediately, which is known for its colorful dance performances and cheerful
     environment. <br />
    
    <strong>Duration:</strong> 3-4 days <br />
    
    <strong>When:</strong> <strong>February or March</strong>  is usually the month when this popular Bhutanese festival is celebrated.</Text>
            </Box>
  )
}

export default PunakhaDrubchen