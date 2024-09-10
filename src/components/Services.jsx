import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

function Services() {
  return (
    <section className="services">
      <h4>What I offer</h4>
      <h2>I create professional Designs that are oriented towards client Needs</h2>

      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        className="services-carousel"
      >
        {/* Technical Support Slide */}
        <div>
          <img src="/images/help-desk.png" alt="Technical Support" />
          <p className="legend">Technical Support</p>
        </div>

        {/* Web Development Slide */}
        <div>
          <img src="/images/developer.png" alt="Web Development" />
          <p className="legend">Web Development</p>
        </div>

        {/* Database Design Slide */}
        <div>
          <img src="/images/database.png" alt="Database Design" />
          <p className="legend">Database Design</p>
        </div>
      </Carousel>
    </section>
  );
}

export default Services;
