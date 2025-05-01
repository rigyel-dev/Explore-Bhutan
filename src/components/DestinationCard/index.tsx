import { Box, Text, Image, VStack, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DestinationCard = () => {
  return (
    <Flex justify="center" gap={4} flexWrap="wrap" px={4}>
      
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Image
          src="https://www.tourmyindia.com/blog//wp-content/uploads/2022/10/Best-Places-to-Visit-in-Bhutan-Tourism.jpg"
          alt="Paro Taktsang Monastery in Bhutan"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" spaceX={3}>
            <Heading size="md">Paro Taktsang</Heading>
            


              <Text fontSize="sm">
  Discover the awe-inspiring Paro Taktsang, Bhutan’s iconic cliffside
  monastery nestled high above the Paro Valley. Legend says Guru
  Padmasambhava flew here on a tiger to meditate in the sacred caves.
  Hike through pine forests and clouds to reach this spiritual marvel.{" "}
  <Link
    to= "https://en.wikipedia.org/wiki/Paro_Taktsang"
    color="teal.500"
    target="_blank"
    rel="noopener noreferrer"
  >
    View more
  </Link>
</Text>



          </VStack>
        </Box>
      </Box>

      
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Image
          src="https://www.tourmyindia.com/international/bhutan/wp-content/uploads/sites/2/2019/08/Dochu-La-Pass-1.jpg"
          alt="Dochu La Pass"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" spaceX={3}>
            <Heading size="md">Dochula Pass</Heading>
            <Text fontSize="sm">
              Dochu La is an incredible Bhutanese mountain pass peaking at 3,140 m (10,301 ft) above sea level.
              Boasting exceptional views of the snow-capped eastern Himalaya on clear days, 
              the pass links the capital city of Thimphu and Punakha.
            </Text>
          </VStack>
        </Box>
      </Box>

      
      <Box
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Image
          src="https://discoverwithdheeraj.com/wp-content/uploads/2020/02/UPL_Punakha_Dzong_3-1536x1014.jpg"
          alt="Central Bhutan"
        />
        <Box p="6" flexGrow={1}>
          <VStack align="start" spaceX={3}>
            <Heading size="md">Central Bhutan</Heading>
            <Text fontSize="sm">
              Central Bhutan is the cultural and geographical heart of Bhutan, known for its rugged terrain,
              lush forests, and strong cultural traditions. It encompasses several districts, including Trongsa, Zhemgang, 
              each offering unique attractions and experiences.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};




export default DestinationCard; 
