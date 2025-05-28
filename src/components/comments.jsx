import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaQuoteLeft } from 'react-icons/fa';
import '@splidejs/splide/dist/css/splide.min.css';

const testimonials = [
    {
      id: 1,
      quote: "Agboedo has made sourcing spare parts so much easier. I now get genuine parts directly from importers at the best prices. My business now has grown significantly!",
      name: "Chukwudi Obi",
      role: "Motorcycle Dealer"
    },
    {
      id: 2,
      quote: "The quality of parts I've received has been exceptional. My customers are happier than ever with the repairs.",
      name: "Amina Mohammed",
      role: "Auto Repair Shop Owner"
    },
    {
      id: 3,
      quote: "Fast delivery and excellent customer service. I highly recommend Agboedo for all your spare parts needs.",
      name: "John Okoro",
      role: "Fleet Manager"
    }
  ];

const comments = () => {
  return (
    <div>

<section id='contact'>
<div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          What our happy clients say
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Testimonials Highlighting Our Commitment to Quality, Exceptional Service, and Customer Satisfaction
        </p>
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            breakpoints: {
              640: {
                perPage: 1,
              },
            }
        }}
        aria-label="Customer Testimonials"
      >
        {testimonials.map((testimonial) => (
          <SplideSlide key={testimonial.id}>
            <div className="bg-black p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="mb-6 text-indigo-500">
                <FaQuoteLeft size={32} />
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-100">
                      {testimonial.name}
                    </div>
                    <div className="text-base text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
              ))}
              
              </Splide>
              
            </div>
            
          </div>
        

</section>

    </div>
  )
}

export default comments