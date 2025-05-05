import React from 'react'
import Banner from '../components/Banner/index.tsx';
import AboutHome from '../components/AboutHome/index';
import HighlightsSection from '../components/HighlightsSection/index.tsx';
import TestimonialCarousel from '../components/TestimonialsCarousel/index.tsx';








const Home = () => {
  return (
    <><Banner />
    <AboutHome />
    <HighlightsSection/>
    <TestimonialCarousel/>
    </>
  )
}

export default Home