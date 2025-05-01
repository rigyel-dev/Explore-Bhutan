// components/Footer.jsx
import {
  Box,
  Container,
  Stack,
  Text,
  Icon,
  SimpleGrid,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerSections = [
  {
    heading: "Services",
    links: ["Cultural Tours", "Visa Assistance", "Travel Insurance"],
  },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/" },
  { label: "Youtube", icon: FaYoutube, href: "https://www.youtube.com/" },
];

const Footer = () => {
  return (
    <Box bg="green" color="white">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spaceX={10}>
          {/* Logo & Branding */}
          <Stack align="center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Emblem_of_the_Prime_Minister_of_Bhutan.png"
              alt="Logo"
              boxSize="100px"
              borderRadius="full"
              mb={2}
            />
            <Heading size="md">Explore Bhutan</Heading>
            <Text fontSize="sm" textAlign="center">
              Your gateway to the land of the Thunder Dragon
            </Text>
          </Stack>

          {/* Link Sections */}
          {footerSections.map(({ heading, links }) => (
            <Stack key={heading} align={{ base: "center", md: "flex-start" }}>
              <Heading size="sm" mb={2}>
                {heading}
              </Heading>
              {links.map((link) => (
                <Link key={link} to="#" style={{ textDecoration: "none" }}>
                  <Text fontSize="sm" _hover={{ textDecoration: "underline" }}>
                    {link}
                  </Text>
                </Link>
              ))}
            </Stack>
          ))}

          {/* Contact & Social */}
          <Stack align={{ base: "center", md: "flex-start" }}>
            <Heading size="sm" mb={2}>
              Contact
            </Heading>
            <Text fontSize="sm">Thimphu, Bhutan</Text>
            <Text fontSize="sm">info@explorebhutan.com</Text>
            <Text fontSize="sm">+975 17538599 / 77312115</Text>
            <Stack direction="row" spaceX={4} mt={3}>
              {socialLinks.map(({ label, icon, href }) => (
                <Link
                  key={label}
                  to={href}
                  aria-label={label}
                >
                  <Icon as={icon} boxSize={6} _hover={{ color: "green.400" }} />
                </Link>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box py={4}>
        <Text fontSize="sm" textAlign="center">
          &copy; 2025 <strong>Explore Bhutan</strong>. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
