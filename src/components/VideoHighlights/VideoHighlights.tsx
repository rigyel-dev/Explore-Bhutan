import { Box, Text } from "@chakra-ui/react"

const VideoHighlights = () => {
  return (
    <Box marginBottom={'6'} marginLeft={'12px'} w={'90%'} mx={'auto'} aspectRatio={'16 / 9'} mt={4} border="1px solid gray" borderRadius="xl" >
        <Text  margin="18px">Bhutan, the Land of the Thunder Dragon, is a kingdom where spirituality, tradition, and culture are not just 
            elements of the past — they are living, breathing facets of everyday life. Among the most vivid expressions of
             this heritage are the tshechu festivals: spectacular religious gatherings held in monasteries and dzongs (fortresses)
              throughout the country. These events draw entire communities together in celebration and reflection, merging devotion
               with performance in a uniquely Bhutanese way. <br />

At the heart of every tshechu are the <strong>cham — sacred masked dances</strong> performed by monks and laymen alike. These are not mere 
performances for entertainment. Each movement, each swirl of the robes, and every beat of the drum carries centuries of spiritual 
symbolism, storytelling, and ritualistic power. <br />

Here’s a closer look at 10 of Bhutan’s most revered masked dances that captivate both locals and travellers with their spiritual
 depth, visual beauty, and timeless teachings. </Text>
 <Box w={'10/12'} mx={'auto'} h={'10/12'} my={'4'}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Pm-EK_e0qnw"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      </Box>
    </Box>
  );
};

export default VideoHighlights;
