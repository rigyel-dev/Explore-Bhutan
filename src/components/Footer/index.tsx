// components/Footer.jsx
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    Icon,
    SimpleGrid,
    Heading,
  } from "@chakra-ui/react"
  import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
  
  // Reusable link section data
  const footerSections = [
    {
      heading: "Quick Links",
      links: ["Home", "Destinations", "Travel", "Culture", "Contact"],
    },
    {
      heading: "Services",
      links: ["Cultural Tours",  "Visa Assistance", "Travel Insurance"],
    },
  ];
  
  const socialLinks = [
    { label: "Facebook", icon: FaFacebook, href: "#" },
    { label: "Instagram", icon: FaInstagram, href: "#" },
    { label: "whatsApp", icon: FaWhatsapp, href: "#" },
  ]
  
  const Footer = () => {
    return (
      <Box bg="green" color="white">
        <Container maxW="6xl" py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} wordSpacing={8}>
            {/* Branding */}
            <Stack wordSpacing={3}>
              <Heading fontSize="lg" color="yellow">
                Explore Bhutan
              </Heading>
              <Text fontSize="sm">Discover more about Bhutan.</Text>
            </Stack>
  
            {/* Dynamic Link Sections */}
            {footerSections.map(({ heading, links }) => (
              <Stack key={heading} align="flex-start" wordSpacing={1}>
                <Text fontWeight="600" mb={2}>
                  {heading}
                </Text>
                {links.map((link) => (
                  <Link key={link} href="#" _hover={{ textDecoration: "underline" }}>
                    {link}
                  </Link>
                ))}
              </Stack>
            ))}
  
            {/* Contact & Social */}
            <Stack align="flex-start" wordSpacing={1}>
              <Text fontWeight="600" mb={2}>
                Contact
              </Text>
              <Text fontSize="sm">Thimphu, Bhutan</Text>
              <Text fontSize="sm">@explorebhutan.com</Text>
              <Text fontSize="sm">+975 17538599 / 77312115</Text>
              <Stack direction="row" wordSpacing={3} mt={2}>
                {socialLinks.map(({ label, icon, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={icon} boxSize={5} color="black" />
                  </Link>
                ))}
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
  
        {/* Footer Bottom */}
        <Box py={4}>
          <Text fontSize="sm" textAlign="center">
            &copy; {new Date().getFullYear()} Explore Bhutan. All rights reserved.
          </Text>
        </Box>
      </Box>
    )
  }
  
  export default Footer