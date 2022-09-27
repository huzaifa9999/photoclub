import React from "react";
import "./positions.css";
import Avatar from "@mui/material/Avatar";
import street from "../../.././src/assests/street1.jpg";

export default function Positions() {
  return (
    <>
      <div className="poscont">
        <div className="positions">
          <h1 className="headt">Our Team</h1>
        </div>
        <div className="por">
          <div className="posname">
            <Avatar
              alt="Remy Sharp"
              src={street}
              sx={{ width: 200, height: 200 }}
            />
            <h1>Andrew</h1>
            <h3>President</h3>
          </div>
          <div className="posname">
            <Avatar
              alt="Remy Sharp"
              src={street}
              sx={{ width: 200, height: 200 }}
            />
            <h1>Andrew</h1>
            <h3>President</h3>
          </div>
          <div className="posname">
            <Avatar
              alt="Remy Sharp"
              src={street}
              sx={{ width: 200, height: 200 }}
            />
            <h1>Andrew</h1>
            <h3>President</h3>
          </div>
          <div className="posname">
            <Avatar
              alt="Remy Sharp"
              src={street}
              sx={{ width: 200, height: 200 }}
            />
            <h1>Andrew</h1>
            <h3>President</h3>
          </div>
          <div className="posname">
            <Avatar
              alt="Remy Sharp"
              src={street}
              sx={{ width: 200, height: 200 }}
            />{" "}
            <h1>Andrew</h1>
            <h3>President</h3>
          </div>
        </div>
      </div>
    </>
  );
}
