// src/components/FAQ.js
import React, { useState } from 'react';

const faqItems = [
  {
    question: "WE offer luxury service to our customer",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    question: "WE offer luxury service to our customer",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    question: "WE offer luxury service to our customer",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    question: "WE offer luxury service to our customer",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            className={`w-full px-4 py-2 text-left font-semibold ${activeIndex === index ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900'}`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <span className="float-right">
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 bg-white text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
