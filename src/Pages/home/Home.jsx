import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
import "./home.css";
import TestimonialCard from "../../components/Testimonials/Testimonials";
import TestimonialSlider from "../../components/Testimonials/Testimonials";
import Principal from "../../components/Principal";
import ImpactSection from "../../components/Principal";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="home-page">
        <Hero />

        <div className="container my-5 ">
          <div className="row mx-5">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
              <img
                src="https://res.cloudinary.com/dvm4ovv0x/image/upload/f_auto,q_auto/v1/NSS_HOME/g5avbxb0lgm4ie3sgbfo"
                className="img-fluid w-55"
                alt="about img"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center text-center">
              <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
              <p className="mb-2 ">
                Welcome to the NSS cell of NIT Silchar, where we serve our
                community through various social initiatives and volunteering
                activities. Committed to fostering positive change, we strive to
                make a meaningful impact through teamwork, empathy, and service
                to society.
              </p>
              <p className="mb-2 home-about">
                Our mission is to empower students to become catalysts for
                social change. By providing opportunities for volunteering,
                leadership development, and skill enhancement, we aim to
                cultivate a generation of socially conscious leaders who are
                equipped to tackle the pressing issues facing our world today.
              </p>
              <p className="mb-5 home-about font-weight-bold ">
                Join us in our journey of service and transformation!
              </p>
              <Link to="/About">
                <Button
                  variant="outline-success"
                  onClick={scrollToTop}
                  size="lg"
                >
                  More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

     
        <ImpactSection />
        <TestimonialSlider />

      </div>
    </div>
  );
};

export default Home;
