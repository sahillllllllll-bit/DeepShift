import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function Home() {
//   const videoURL =
//     "https://www.pexels.com/download/video/7055339/";

  return (
    <div className="home-container">

      {/* <video autoPlay muted loop className="bg-video">
        <source src={videoURL} type="video/mp4" />
      </video> */}

      <div className="overlay"></div>

      <Navbar />

      <main className="center-content">
        <h1 className="coming-soon">Coming Soon</h1>
        <p className="tagline">Something transformative is on the horizon.</p>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
