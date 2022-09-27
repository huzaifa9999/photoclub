import React from "react";
import "./notice.css"
export default function Noticenew(props) {
  return (
    <> <div className="noticecontent">
      <h1 className="monthhead">{props.month} 2022 Bulletin</h1>
      <p className="text">
        September is here and so begins the most cherished season. The
        warm days and cool nights are upon us. We look forward to a new academic
        year, fall sports, the beauty of the changing leaves and the unique
        moments
      </p>
      <br/>
      </div>
    </>
  );
}
