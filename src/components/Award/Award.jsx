import React from "react";
import "./Award.css";
import AwardCard from "./AwardCard";
import imagehead from "../.././assests/animal1.jpg";
export default function Award() {
  return (
    <div className="main-achi">
      <h1 className="archi-head">A TRADITION OF EXCELLENCE</h1>
      <div className="achievements">
        <AwardCard
          className="acard"
          image={imagehead}
          title="Inter-IIIT"
          description="Bagged the first price at the Inter-IIIT held at IIIT Nagpur.
          This was the 5th consecutive win and is a record for
           the higest number of consecutive wins at an IIIT Competition "
        />
        <AwardCard
          className="acard"
          image={imagehead}
          title="Inter-IIIT"
          description="Bagged the first price at the Inter-IIIT held at IIIT Nagpur.
          This was the 5th consecutive win and is a record for
           the higest number of consecutive wins at an IIIT Competition "
        />
        <AwardCard
          className="acard"
          image={imagehead}
          title="Inter-IIIT"
          description="Bagged the first price at the Inter-IIIT held at IIIT Nagpur.
          This was the 5th consecutive win and is a record for
           the higest number of consecutive wins at an IIIT Competition "
        />
      </div>
    </div>
  );
}
