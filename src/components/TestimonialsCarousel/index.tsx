import { useEffect, useState } from 'react';
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

const testimonials3 = [
  {
    name: 'Alex Brown',
    feedback: 'Truly a game changer for our business. Love it!',
  },
  {
    name: 'Lisa Black',
    feedback: 'Amazing tools and fantastic results.',
  },
  {
    name: 'Tom Grey',
    feedback: 'Reliable and easy to use. Highly recommend.',
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
      gap={16}  // Adjust gap as needed between boxes
      bg="gray.50"
      py={{ base: 5, md: 10 }}
      border="1px solid gray"
      borderRadius="xl"
      m={4}
      flexWrap="wrap"  // allows wrapping on small screens
    >
      <Box
        className="testimonial-text fade"
        width="300px"
        height="200px"
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
        <p>"{testimonials1[index].feedback}"</p>
        <p className="testimonial-name" style={{ marginTop: '10px', fontWeight: 'bold' }}>
          - {testimonials1[index].name}
        </p>
      </Box>
      <Box
        className="testimonial-text fade"
        width="300px"
        height="200px"
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
      <Box
        className="testimonial-text fade"
        width="300px"
        height="200px"
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
        <p>"{testimonials3[index].feedback}"</p>
        <p className="testimonial-name" style={{ marginTop: '10px', fontWeight: 'bold' }}>
          - {testimonials3[index].name}
        </p>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
