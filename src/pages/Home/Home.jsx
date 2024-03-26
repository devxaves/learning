import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import video1 from "./video1.mp4";
import { useEffect, useState, useRef } from "react";

import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect } = useAuth0();
  const videoRef = useRef(null)

  useEffect(() => {
    const { current: videoElement } = videoRef
    videoElement.setAttribute('muted', '')
  }, [])

  return (
    <div className="home-page">
      

    <video className="vid" src={video1} ref={videoRef} playsInline autoPlay loop disablePictureInPicture muted />
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <div className="highlight">
            <h1 className="text-center fw-semibold">OFFICERS CLUB</h1>
          </div>
          <div className="para">
            <p>
              An Online Platform Tailored for Civil Servants providing them
              with relevant courses and training opportunities. Upskill
              yourself with our Modern Expert Guided courses aimed to help you
              serve better for the nation.
            </p>
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <button
              type="button"
              onClick={() => loginWithRedirect()}
              className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default Home;
