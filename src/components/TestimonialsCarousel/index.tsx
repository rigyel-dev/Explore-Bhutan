import { Box, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';


const testimonials = [
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

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); 

    return () => clearInterval(interval); 
  }, []);

  const testimonial = testimonials[index];

  return (
    <Box  bg="gray.50"
    py={{ base: 10, md: 20 }}
    border="1px solid gray"
    borderRadius="xl"
    m={4}>
       <Heading
              textAlign="center"
              mb={10}
              fontSize={{ base: "2xl", md: "4xl" }}
              color="teal.600"
            >
              Testimonials
            </Heading>
    <div className="carousel-container">
      <div className="testimonial-text" >
        <p>"{testimonial.feedback}"</p>
        <p className="testimonial-name">- {testimonial.name}</p>
      </div>
    </div>
    </Box>
  );
};

export default TestimonialCarousel;
