import ContactDetail from '../components/ContactDetail'
import ContactForm from '../components/ContactForm'
import { Box, Flex } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex
       height= '100vh'
       minHeight= '100vh' 
      justify="center"
      align="center"
      gap={32} 
      my={16}
    >
      <ContactForm />
      <Box ml={-12}>
      <ContactDetail />
      </Box>
    </Flex>
  )
}


export default Contact;
