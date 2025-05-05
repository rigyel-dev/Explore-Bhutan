import { Box, Flex, Image, Text } from "@chakra-ui/react"

const Welcome = () => {
  return (
    <Box marginBottom={'6'} marginLeft={'12px'} w={'90%'} mx={'auto'}  mt={4} border="1px solid gray" borderRadius="xl">
        
         <Flex gap="4">
            <Box  p="6" rounded="md" order={1} flex="1" textAlign="justify">
                <Image rounded="md" src="https://bhutan.com.au/wp-content/uploads/2019/02/Festival-dancers.jpg"
                 height="400px" py="20px" loading="lazy"/></Box>
            <Box  p="6" rounded="md" order={2} flex="1" textAlign="justify"><Image rounded="md" 
            src="https://www.asiaodysseytravel.com/images/asia-tours/bhutan-tours/bhutan-tshechu-festivel-700-53.jpg" 
            height="400px" py="20px" width="1000px" loading="lazy"/></Box>
         
              </Flex>

        <Text margin="18px">Festivals in Bhutan have reputations for being raucous, joyous affairs. The most popular for tourists are those held
             in Thimphu & Paro and those seeking a more intimate Bhutan experience should consider avoiding these major festivals as
              they mark the busiest time of the year for the tourism industry. Air seats and hotel rooms are frequently difficult to 
              come by and all major sites see larger numbers of visitors on a given day. <br />

The Dzongs come to life with colour, music and dancing as valley dwellers and towns folk dress in their finest clothes and join together
 to exorcise evil spirits and rejoice in a new harvest. Rare masked and sword dances and other rituals are performed in the Dzong courtyard 
 and temples. Tourists are allowed into the Dzongs to watch the spectacle, but not the inner sanctuaries.</Text>
    </Box>
  )
}

export default Welcome