import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  Flex,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState } from "react";

const DestinationCard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const destinations = [
    {
      name: "Paro Taktsang",
      description:
        "Discover the awe-inspiring Paro Taktsang, Bhutan’s iconic cliffside monastery nestled high above the Paro Valley. Legend says Guru Padmasambhava flew here on a tiger to meditate in the sacred caves. Hike through pine forests and clouds to reach this spiritual marvel.",
      imageUrl:
        "https://www.tourmyindia.com/blog//wp-content/uploads/2022/10/Best-Places-to-Visit-in-Bhutan-Tourism.jpg",
      link: "https://en.wikipedia.org/wiki/Paro_Taktsang",
    },
    {
      name: "Dochula Pass",
      description:
        "Dochu La is an incredible Bhutanese mountain pass peaking at 3,140 m (10,301 ft) above sea level. Boasting exceptional views of the snow-capped eastern Himalaya on clear days, the pass links the capital city of Thimphu and Punakha.",
      imageUrl:
        "https://www.tourmyindia.com/international/bhutan/wp-content/uploads/sites/2/2019/08/Dochu-La-Pass-1.jpg",
      link: "",
    },
    {
      name: "Central Bhutan",
      description:
        "Central Bhutan is the cultural and geographical heart of Bhutan, known for its rugged terrain, lush forests, and strong cultural traditions. It encompasses several districts, including Trongsa and Zhemgang, each offering unique attractions and experiences.",
      imageUrl:
        "https://discoverwithdheeraj.com/wp-content/uploads/2020/02/UPL_Punakha_Dzong_3-1536x1014.jpg",
      link: "",
    },
    {
      name: "Punakha Dzong",
      description:
        'Known as the "Palace of Great Happiness," Punakha Dzong is one of Bhutan’s most majestic structures. Located at the confluence of the Pho and Mo Chhu rivers, it served as the seat of government until the mid-1950s.',
      imageUrl:
        "https://www.insidehimalayas.com/wp-content/uploads/2017/01/2103672794_3afdebe436_b.jpg",
      link: "",
    },
    {
      name: "Western Bhutan",
      description:
        "Thimphu, the capital of Bhutan, blends tradition and modernity. With no traffic lights and deeply rooted culture, it offers attractions like the Buddha Dordenma statue, folk heritage museums, and vibrant markets.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8387HmhVfg-oF9H5TT12kXsrcMek3NJHrg&s",
      link: "",
    },
    {
      name: "Eastern Bhutan",
      description:
        "Often called the spiritual heartland of Bhutan, Bumthang Valley is home to ancient monasteries and sacred sites. The scenic beauty, traditional festivals, and heritage make it a must-visit destination.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5edjW2NcQCdXW7TOsogd0soA6--mYQVLJJQ&s",
      link: "",
    },
  ];

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <Box mb={9}>
      <Flex justify="center" mb={6} >
        <Input
          placeholder="Search destinations"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="300px"
        />
      </Flex>

      <Flex justify="center" gap={4} flexWrap="wrap" px={4}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination, index) => (
            <Box
              key={index}
              maxW="sm"
              w="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              display="flex"
              flexDirection="column"
            >
              <Image
                src={destination.imageUrl}
                alt={destination.name}
                height="200px"
                width="100%"
                objectFit="cover"
              />
              <Box p="6" flexGrow={1}>
                <VStack align="start" spaceX={3}>
                  <Heading size="md">{destination.name}</Heading>
                  <Text fontSize="sm">
                    {destination.description}{" "}
                    {destination.link && (
                    <ChakraLink
                      href={destination.link}
                      color="teal.500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View more
                    </ChakraLink>
                  )}

                  </Text>
                </VStack>
              </Box>
            </Box>
          ))
        ) : (
          <Box
            maxW="sm"
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"

          >
            <Image
              src="src/assets/noimage.png"
              alt="Not found"
              height="400px"
              width="100%"
              objectFit="cover"
            />
            <Box p="6">
              <Heading size="md">No Destination Found</Heading>
              <Text fontSize="sm">
                We couldn't find any destinations matching your search.
              </Text>
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default DestinationCard;
