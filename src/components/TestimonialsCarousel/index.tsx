import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const testimonials1 = [
  {
    name: 'John Doe',
    feedback: 'This service is fantastic! It boosted our productivity immensely.',
  },
  {
    name: 'Jane Smith',
    feedback: 'A wonderful experience from start to finish. Highly recommended.',
  },
  {
    name: 'Mike Johnson',
    feedback: 'The best investment we made this year. Exceptional quality and support.',
  },
];

const testimonials2 = [
  {
    name: 'Emily White',
    feedback: 'Excellent platform and great customer support!',
  },
  {
    name: 'David Green',
    feedback: 'Helped our team stay organized and efficient.',
  },
  {
    name: 'Sarah Blue',
    feedback: 'A seamless experience from start to finish.',
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials1.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      className="carousel-container"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={300}
      bg="gray.50"
      py={{ base: 5, md: 10 }}
      border="1px solid gray"
      borderRadius="xl"
      m={4}
    >
      <Box
        className="testimonial-text fade"
        width="300px"      // fixed width
        height="200px"     // fixed height
        textAlign="center"
        p={4}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        overflow="hidden"  // prevents overflow if text is long
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <p>"{testimonials1[index].feedback}"</p>
        <p className="testimonial-name" style={{ marginTop: '10px', fontWeight: 'bold' }}>
          - {testimonials1[index].name}
        </p>
      </Box>
      <Box
        className="testimonial-text fade"
        width="300px"      // fixed width
        height="200px"     // fixed height
        textAlign="center"
        p={4}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <p>"{testimonials2[index].feedback}"</p>
        <p className="testimonial-name" style={{ marginTop: '10px', fontWeight: 'bold' }}>
          - {testimonials2[index].name}
        </p>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
