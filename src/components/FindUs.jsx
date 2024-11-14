import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-4">Find Us On</h1>
      <div>
        <div className="join flex join-vertical *:bg-base-100">
          <button className="btn join-item justify-start"> <FaFacebook />Facebook</button>
          <button className="btn join-item justify-start "> <FaTwitter />Twitter</button>
          <button className="btn join-item justify-start"> <FaInstagram />Instragram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
