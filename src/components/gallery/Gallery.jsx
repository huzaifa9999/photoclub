import React from "react";
import animal from "../../assests/animal1.jpg";
import land1 from "../../assests/land1.jpg";
import street from "../../assests/street1.jpg";
import cultural from "../../assests/cultural1.jpg";
import { Link } from "react-router-dom";
import "./gallery.css";
import Button from "@mui/material/Button";

export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <div className="div">
          <img src={animal} alt="1" className="fimage" />
          <div className="textimg">
            <h2>Photos by our Club Members</h2>
            <Button variant="contained" className="btn">
              <Link to="/Gallery" target={"_top"}>
                Gallery
              </Link>
            </Button>
          </div>
        </div>
        <div className="div">
          <img src={land1} alt="2" className="fimage" />
          <div className="textimg">
            <h2>Photos by our club member</h2>
            <Button variant="contained" className="btn">
              <Link to="/Gallery" target={"_top"}>
                Gallery
              </Link>
            </Button>
          </div>
        </div>
        <div className="div">
          <img src={street} alt="3" className="fimage" />
          <div className="textimg">
            <h2>Photos by our Club Members</h2>
            <Button variant="contained" className="btn">
              <Link to="/Gallery" target={"_top"}>
                Gallery
              </Link>
            </Button>
          </div>
        </div>
        <div className="div">
          <img src={cultural} alt="4" className="fimage" />
          <div className="textimg">
            <h2>Photos by our Club Members</h2>
            <Button variant="contained" className="btn">
              <Link to="/Gallery" target={"_top"}>
                Gallery
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
