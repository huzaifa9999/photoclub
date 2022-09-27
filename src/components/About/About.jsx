import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer.jsx";
import Aboutcont from "./Aboutcont";
import Award from "../Award/Award";
import "./about.css";
import Mission from "../mission/Mission";
import Notice from "../notice/Notice";
import Gallery from "../gallery/Gallery";
import Postions from ".././postions/Positions";

export default function About() {
  return (
    <>
      <Navbar />
      <Aboutcont />
      <Award />
      <Mission />
      <Notice />
      <Gallery />
      <Postions />
      <Footer />
      
    </>
  );
}
