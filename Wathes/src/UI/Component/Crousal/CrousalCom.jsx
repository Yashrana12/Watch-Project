import React from "react";
import { Link } from "react-router-dom";
import "../Crousal/CrousalCom.css";

export default function CrousalCom() {
  return (
    <>
      <div className="home ">
        <div className="container p-0 font-normal lg">
          <div className="subhome">
            <p className="font-medium text-lg sm:text-xs">
              Moonsoon offer is live
            </p>
            <p className="text-7xl pb-4 content">
              Discover Our Perpetual Initiatives{" "}
            </p>
            <p>
              Online luxury and international brands shopping in India at its
              best
            </p>
            <Link to="/singUp">
              <button className="button uppercase font-semibold">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
