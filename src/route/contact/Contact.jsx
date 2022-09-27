import React from "react";
import "./contact.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className="cc">
      <h1 id="us">Contact Us</h1>
      <div class="contact-container">
        <div class="contact-left">
            <h2> Send us your queries realted to the events 
          
                <h3>we will revert you back in  <span ><h1>A SNAP</h1></span> </h3>
           </h2>
        </div>
        <div className="contact-right">
        <form>
        <label> NAME</label>
        <input type="text" placeholder='Name' autoFocus></input>
        <label>E-MAIL</label>
        <input type="email" placeholder='E-mail'></input>
       
        <label>DESCRIPTION</label>
        <textarea rows='6' type="text" placeholder='Message...'></textarea>
        <button type="submit" className="sub">Submit</button>
    </form>
        </div>
      </div>
      </div>

     <Footer/> 
    </>
  );
}
