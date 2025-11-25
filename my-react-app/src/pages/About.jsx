import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <section className="about-section">
        <h2>About DeepShift</h2>
        <p>
          DeepShift is an emerging platform designed to push boundaries in technology, 
          creativity, and digital experience. Our mission is to introduce products and 
          experiences that redefine what is possible.
        </p>
        <p>
          We believe in building elegant, impactful, and future-ready digital solutions.
          Stay connected — something remarkable is coming.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default About;
