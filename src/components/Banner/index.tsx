import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      bgImage="url('https://wallpapercat.com/w/full/d/5/3/615606-2500x1667-desktop-hd-bhutan-wallpaper-image.jpg')"
      bgSize="cover"
      position="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      px={4}
      loading="lazy"
    >
      <VStack gap={4} mb={40}>
        <Heading fontSize={["3xl", "4xl", "6xl"]} color={"teal.500"} >Explore Bhutan</Heading>
        <Text fontSize={["md", "lg", "xl"]} color={"teal.500"} >Where beauty meets peace.</Text>
      </VStack>
    </Box>
  );
};

export default Banner;
