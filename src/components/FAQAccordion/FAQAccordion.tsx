import React, { useState } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"

const travelinfo = [
  {
    question: "Do I need a visa to visit Bhutan?",
    answer:
      "Yes, all tourists (except Indian, Bangladeshi, and Maldivian nationals) need a visa arranged through a licensed Bhutanese tour operator.",
  },
  {
    question: "What is the best time to visit Bhutan?",
    answer:
      "Spring (March–May) and Autumn (September–November) are most popular due to pleasant weather and festivals.",
  },
  {
    question: "Can I travel independently in Bhutan?",
    answer:
      "No, international tourists must book through an approved tour operator and follow a pre-arranged itinerary.",
  },
  {
    question: "Is the Sustainable Development Fee (SDF) still required?",
    answer:
      "Yes. As of 2024, the SDF is USD 100 per night for most tourists (reduced rates may apply for regional travelers).",
  },
  {
    question: "What is the national dish of Bhutan?",
    answer: "Ema Datshi (spicy chilies and cheese) is Bhutan’s most famous dish.",
  },
  {
    question: "Is the food in Bhutan spicy?",
    answer: "Yes, Bhutanese cuisine is generally very spicy and chili-based.",
  },
  {
    question: "Are there vegetarian options available?",
    answer:
      "Yes, many restaurants and hotels offer vegetarian meals, especially in larger towns.",
  },
  {
    question: "Can I drink tap water in Bhutan?",
    answer: "It’s not recommended. Stick to bottled or boiled water.",
  },
  {
    question: "What currency is used in Bhutan?",
    answer:
      "The Bhutanese Ngultrum (BTN). Indian Rupees (INR) are also widely accepted.",
  },
  {
    question: "Can I use credit cards in Bhutan?",
    answer:
      "In major hotels and shops in Thimphu and Paro, yes. But cash is better in rural areas.",
  },
  {
    question: "Are ATMs easily available?",
    answer:
      "Available in cities, but they may not always work with foreign cards—bring enough cash.",
  },
  {
    question: "Is tipping expected in Bhutan?",
    answer:
      "It’s not mandatory but is appreciated for guides, drivers, and hotel staff.",
  },
]

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <Box p="6" rounded="md" border="1px solid gray" borderRadius="xl" m="4">
      <Heading textAlign="center" mb="6">
        <strong>Frequently asked questions</strong>
      </Heading>

      {travelinfo.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <Box
            key={index}
            mb={4}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            bg="gray.50"
            onClick={() => toggleAnswer(index)}
            _hover={{ bg: "gray.100", cursor: "pointer" }}
          >
            <Text fontWeight="medium">{faq.question}</Text>
            {isOpen && (
              <Text fontSize="sm" mt={2}>
                {faq.answer}
              </Text>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

export default FAQAccordion
