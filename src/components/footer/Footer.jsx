import React from "react";
import "./footer.css";
import {
  FaSearchLocation,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaMailBulk,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footercontainer">
          <div className="left">
            <div className="location">
              <FaSearchLocation
                size={25}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              <div>
                {" "}
                <h4>1234 boulevard st.</h4>
                <h4>parmasn in it</h4>
              </div>
            </div>
            <div className="phone">
              <h4>
                {" "}
                <FaPhone
                  size={25}
                  style={{ color: "#ffffff", marginRight: "2rem" }}
                />
                +91-99-88-77-11-23
              </h4>
            </div>
            <div className="mail">
              <h4>
                <FaMailBulk
                  size={25}
                  style={{ color: "#ffffff", marginRight: "2rem" }}
                />
                demmail@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <div className="about">
              <h2> About</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat.
              </p>
            </div>
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              <FaTwitter
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
