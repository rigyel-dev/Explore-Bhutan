import { Flex } from 'antd';
import ContactDetail from '../components/ContactDetail'
import ContactForm from '../components/ContactForm'
import { Box } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box>
    <Flex
       height= '100%'
       minHeight= '100vh' 
      justify="center"
      align="center"
      gap={32} 
    >
      <ContactForm />
      <Box ml={-12}>
      <ContactDetail />
      </Box>
    </Flex>
    </Box>
  )
}


export default Contact;
