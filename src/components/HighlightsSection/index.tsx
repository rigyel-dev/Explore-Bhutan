import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
} from "@chakra-ui/react";

const destinations = [
  {
    name: "Paro Taktsang",
    description:
      "Perched on a cliff, the Tiger’s Nest Monastery is Bhutan’s most iconic site.",
    image:
      "https://www.esikkimtourism.in/bhutan/wp-content/uploads/2019/10/how-to-reach-paro-takshgang-1.jpg",
  },
  {
    name: "Punakha Dzong",
    description:
      "Known as the Palace of Great Happiness, located at the confluence of two rivers.",
    image:
      "https://admin.bhutaninbound.com/public/uploads/places-sliders/Punakha%20Dzong.jpg",
  },
  {
    name: "Dochula Pass",
    description:
      "A scenic pass offering panoramic views of the Himalayas and 108 chortens.",
    image:
      "https://c1.wallpaperflare.com/preview/301/696/1013/dochula-pass-monument-stupa-shanti-stupa.jpg",
  },
];

const Highlights = () => {
  return (
    <Box py={{ base: 10, md: 20 }} px={4} bg="gray.50"border="1px solid gray"
    borderRadius="xl"
    m={4}  >
      <Heading 
        textAlign="center"
        mb={10}
        fontSize={{ base: "2xl", md: "4xl" }}
        color="teal.600"
      >
        Top Destinations of Bhutan
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {destinations.map((dest) => (
          <Box
            key={dest.name}
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "xl",
            }}
          >
            <Box overflow="hidden">
              <Image
                src={dest.image}
                alt={dest.name}
                height="200px"
                width="100%"
                objectFit="cover"
                transition="transform 0.4s"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>
            <Box p={5}>
              <Stack gap={3}>
                <Heading fontSize="xl" color="teal.500">
                  {dest.name}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {dest.description}
                </Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Highlights;
