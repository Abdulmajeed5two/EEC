import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    image: '../src/assets/1.jpg',
    text: 'Elegant Geometry',
    description: 'Elevate your website’s design with the Claymorphism Carousel Template for Slider Revolution.',
    buttonText: 'Discover More'
  },
  {
    image: '../src/assets/2.jpg',
    text: 'Modern Design',
    description: 'Create modern and sleek designs with our customizable templates.',
    buttonText: 'Learn More'
  },
  {
    image: '../src/assets/3.jpg',
    text: 'Creative Ideas',
    description: 'Unleash your creativity with our unique design concepts.',
    buttonText: 'Get Started'
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex justify-between items-center">
        <button
          className="bg-black bg-opacity-50 text-white p-2 rounded-full ml-4"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-black bg-opacity-50 text-white p-2 rounded-full mr-4"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Slide"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 p-10 text-white max-w-lg">
            <h2 className="text-4xl font-bold mb-4">{slides[currentSlide].text}</h2>
            <p className="text-lg mb-6">{slides[currentSlide].description}</p>
            <button className="bg-white text-black py-2 px-4 rounded">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
