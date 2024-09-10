import React from "react";
import Slider from "react-slick";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      imgSrc: "images/business-man.png", // Change this to the actual image path
      name: "Abdirahman Abdullahi",
      company: "Founder & CEO - Tech Innovators",
      message:
        "Said is an outstanding professional, always delivering top-notch results. He has an eye for detail and works well with deadlines.",
    },
    {
      id: 2,
      imgSrc: "/images/Omar Photo.png", 
      name: "Omar Said",
      company: "Operations Manager - Creative Solutions",
      message:
        "Working with Said was a pleasure. He has strong communication skills and always went the extra mile to ensure success.",
    },
    {
      id: 3,
      imgSrc: "images/Abdirazak.jpeg", 
      name: "Abdirazak Mohamed",
      company: "Operations Manager - TESCO",
      message:
        "Said’s technical expertise and dedication to projects are second to none. I highly recommend working with him!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials">
      <h4>Testimonials</h4>
      <h2>What They Say About Me</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="client-img"
            />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.company}</h4>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
