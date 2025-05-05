import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  ListItem,
  ListRoot
} from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  title: string;
  items: string[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <Box
    p="6"
    rounded="md"
    border="1px solid lightgray"
    mb="6"
    _hover={{
      transform: "scale(1.05)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s, box-shadow 0.3s"
    }}
  >
    <Text fontWeight="bold" mt="4">
      {title}
    </Text>
    <ListRoot gap={2} pl="5">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListRoot>
  </Box>
);

interface GuidanceColumnProps {
  imageSrc: string;
  sections: SectionProps[];
}

const GuidanceColumn: React.FC<GuidanceColumnProps> = ({
  imageSrc,
  sections
}) => (
  <Box p="6" rounded="md" flex="1" textAlign="justify">
    <Image
      rounded="md"
      src={imageSrc}
      height="400px"
      py="20px"
      mx="auto"
      objectFit="cover"
    />
    {sections.map((section, index) => (
      <Section key={index} title={section.title} items={section.items} />
    ))}
  </Box>
);

const TouristGuidance: React.FC = () => {
  const column1: GuidanceColumnProps = {
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod/images/tcx060123wbhutan-004-646cf1a470e8c.jpg?resize=980:*",
    sections: [
      {
        title: "Dos and Don’ts while in Bhutan:",
        items: [
          "Bhutan is a peace-loving country and the people are very sensitive, so it is vital to understand the culture and people’s sentiments before traveling there.",
          "Bhutan, a Buddhist kingdom on the Himalayas’ eastern edge, is known for its monasteries, fortresses (or dzongs) and dramatic landscapes.",
          "In the High Himalayas, peaks such as 7,326m Jomolhari are popular trekking destinations.",
          "Paro Taktsang monastery (Tiger’s Nest) clings to cliffs above the forested Paro Valley."
        ]
      },
      {
        title: "General Etiquette:",
        items: [
          "Keep valuables (wallets, cameras, passports) safe at all times.",
          "Follow all traffic rules on the road.",
          "Be cautious of dogs, especially at night.",
          "Donations at temples are personal and voluntary—Bhutanese usually do.",
          "Public displays of affection are uncommon—avoid them.",
          "Do not disturb natural sites like lakes and rivers—these are sacred.",
          "Remove your shoes and headgear before entering temples or dzongs.",
          "Dress modestly, covering shoulders and knees.",
          "Avoid pointing at religious objects or stepping over them.",
          "Always walk clockwise around chortens (stupas) and prayer wheels.",
          "Do not take photographs inside temples unless permitted."
        ]
      },
      {
        title: "Working Visa :",
        items: [
          " You must have a confirmed offer from a Bhutanese employer.",
          " Employer applies for Labour Recruitment Approval from the Department of Labour.",
          "After approval, the employer applies for an Employment Visa from the Department of Immigration.",
          "You can enter Bhutan only after the Employment Visa is issued.",
          "After arrival, you must apply for a Work Permit to legally work in Bhutan.",
          "Employer must apply for an E-Work Permit.",
          "A Work Permit is usually issued for up to 1 year..",
          "Renew permits before they expire to avoid penalties."
        ]
      }
    ]
  };

  const column2: GuidanceColumnProps = {
    imageSrc:
      "https://www.breathebhutan.com/wp-content/uploads/2023/06/Tavelling-To-Bhutan-With-Kids.jpg",
    sections: [
      {
        title: "Dining Etiquette:",
        items: [
          "Meals are often served family-style. Wait for the eldest to start eating.",
          "Traditionally, people eat with hands—cutlery is usually available.",
          "Use both hands or your right hand when accepting food or passing objects.",
          'Say "Meshu meshu" if full, though you may be gently urged to eat more.'
        ]
      },
      {
        title: "Respecting Personal and Public Spaces:",
        items: [
          "Avoid loud behaviour; Bhutanese culture values serenity.",
          "Do not touch someone's head—it is considered sacred.",
          "Do not point your feet at people or religious objects.",
          "Public displays of affection, such as kissing and hugging, are discouraged."
        ]
      },
      {
        title: "Cultural Practices to Respect:",
        items: [
          "Respect for the king is an essential cultural value in Bhutan, and it is common to see portraits of the royal family in public places.",
          "Buddhist rituals are an important part of daily life. Do not interrupt religious ceremonies or events.",
          "It is respectful to present gifts using both hands as a sign of reverence.",
          "When offering or accepting something from a Bhutanese person, use your right hand or both hands—using the left hand alone can be considered impolite."
          
        ]
      },
      {
        title: " Tourist Visa:",
        items: [
          "Forwarding letter from the head of the Department addressed to Dy. Chief of Protocol).",
          "Notesheet from the concern Ministry.",
          "It is respectful to present gifts using both hands as a sign of reverence.",
          "Filled up Visa application form (need to be filled up by the guests only).",
          "India: Indian nationals do not require a visa to enter Bhutan.",
          "Bangladesh & Maldives: Citizens of these countries can obtain a visa on arrival.",
          "Visa Application Fee: USD $40 (non-refundable).",
          "Sustainable Development Fee (SDF): USD $100 per person per night (concessionary rates apply for children)."
        ]
      }
    ]
  };

  return (
    <Box p="6" rounded="md" border="1px solid gray" borderRadius="xl" m="4">
      <Heading textAlign="center" mb="6">
        <strong>Tourist Guidance</strong>
      </Heading>
      <Flex gap="4" flexDirection={{ base: "column", md: "row" }}>
        <GuidanceColumn {...column1} />
        <GuidanceColumn {...column2} />
      </Flex>
    </Box>
  );
};

export default TouristGuidance;
// added info