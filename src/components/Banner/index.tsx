import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { useState} from "react";

const Banner = () => {
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  const bgUrl =
    "https://wallpapercat.com/w/full/d/5/3/615606-2500x1667-desktop-hd-bhutan-wallpaper-image.jpg";

  return (
    <Box
      bgImage={isBgLoaded ? `url(${bgUrl})` : "none"}
      bgSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      px={4}
      transition="background-image 0.5s ease-in-out"
    >
      
      {/* This hidden image actually does the lazy loading */}
      <Image
        src={bgUrl}
        alt="Bhutan Banner"
        display="none"
        onLoad={() => setIsBgLoaded(true)}
      />

      <VStack gap={4} mb={500}>
        <Heading fontSize={["3xl", "4xl", "6xl"]} color={"teal.500"}>
          Explore Bhutan
        </Heading>
        <Text fontSize={["md", "lg", "xl"]} color={"teal.500"}>
          Where beauty meets peace.
        </Text>
      </VStack>
    </Box>
  );
};

export default Banner;
