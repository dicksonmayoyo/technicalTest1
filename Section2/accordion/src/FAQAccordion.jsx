import React, { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Frontend Mentor and how will it help me?",
      answer: "Frontend Mentor is a platform that provides web development challenges to help you improve your coding skills by building real-world projects."
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Frontend Mentor offers both free and premium plans. The free plan gives access to a selection of challenges, while the premium plan provides more features like design files and additional challenges."
    },
    {
      question: "Can I use Frontend Mentor in my portfolio?",
      answer: "Yes, you can use the projects you build from Frontend Mentor challenges in your portfolio to showcase your skills."
    },
    {
      question: "How can I get help if I'm stuck in a challenge?",
      answer: "If you're stuck, you can ask questions in the Frontend Mentor Slack community, check the forum, or review solutions from other developers for inspiration."
    },
    {
      question: "What types of challenges does Frontend Mentor offer?",
      answer: "Frontend Mentor offers challenges that range from beginner to advanced levels, including layouts, landing pages, and full-stack applications, to help you build real-world web development skills."
    },
    {
      question: "Can I collaborate with others on Frontend Mentor challenges?",
      answer: "Yes, you can collaborate with others by sharing your progress and seeking feedback in the Slack community or forum. Collaboration is encouraged to enhance learning."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded shadow transition-all hover:shadow-lg focus-within:shadow-lg"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-white focus-within:bg-blue-50 hover:bg-blue-50 transition-colors">
              <p className="text-left">{faq.question}</p>
              <button
                className="text-lg font-bold focus:outline-none focus:ring-purple-700 hover:text-purple-700 transition-all p-1 rounded-full"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-700 ease-in-out px-4 py-1 ${
                activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
