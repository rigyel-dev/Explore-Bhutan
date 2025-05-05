import { Box, Heading, Text, Stack, Container, Image, SimpleGrid } from "@chakra-ui/react";

const AboutHome = () => {
  return (
    <Box
      bg="gray.50"
      py={{ base: 10, md: 20 }}
      border="1px solid gray"
      borderRadius="xl"
      m={4} // optional: adds horizontal margin
    >
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
          {/* Image */}
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEOxA2b6tJvcbmPtzT2v983yaExfU7d7yGg&s"
            alt="Bhutan Landscape"
            borderRadius="xl"
            boxShadow="lg"
            htmlWidth="400px"
            htmlHeight="400px"
          />

          {/* Text Content */}
          <Stack gap={6} textAlign={{ base: "center", md: "left" }}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              color="teal.600"
            >
              About Us
            </Heading>
            <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.700">
              At Explore Bhutan, we craft journeys that go beyond sightseeing.
              Our mission is to connect travelers with the heart of Bhutan—its
              majestic landscapes, sacred sites, and vibrant culture. Whether
              you're trekking through pristine valleys, visiting ancient
              monasteries, or sharing a meal with locals, every moment is
              designed to immerse you in the authentic spirit of the Land of the
              Thunder Dragon.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutHome;
