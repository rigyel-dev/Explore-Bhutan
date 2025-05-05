import { Box, Grid, Heading, Text, Icon } from "@chakra-ui/react"
import { MdLocationOn, MdPhone, MdFax, MdEmail } from "react-icons/md"




const cardProps = {
  p: 6,
  bg: "white",
  borderRadius: "md",
  boxShadow: "md",
  textAlign: "center",
  _hover: { boxShadow: "xl", transform: "scale(1.02)" },
  transition: "all 0.3s ease",

}

const ContactDetail = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6} maxW="lg" w="full">
      <Box {...cardProps}>
        <Icon as={MdLocationOn} boxSize={8} color="cyan.600" />
        <Heading size="sm" mt={4}>OUR MAIN OFFICE</Heading>
        <Text fontSize="sm" mt={2}>Damphu Municipal Office</Text>
        <Text fontSize="sm">Tsirang, Bhutan</Text>
      </Box>

      <Box {...cardProps}>
        <Icon as={MdPhone} boxSize={8} color="cyan.600" />
        <Heading size="sm" mt={4}>PHONE NUMBER</Heading>
        <Text fontSize="sm" mt={2}>+975-77490169</Text>
      </Box>

      <Box {...cardProps}>
        <Icon as={MdFax} boxSize={8} color="cyan.600" />
        <Heading size="sm" mt={4}>FAX</Heading>
        <Text fontSize="sm" mt={2}>+975-2-323608</Text>
      </Box>

      <Box {...cardProps}>
        <Icon as={MdEmail} boxSize={8} color="cyan.600" />
        <Heading size="sm" mt={4}>EMAIL</Heading>
        <Text fontSize="sm" mt={2}>grouptwo@gmail.com</Text>
      </Box>
    </Grid>
  )
}

export default ContactDetail