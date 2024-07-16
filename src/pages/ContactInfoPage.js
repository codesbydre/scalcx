import React from "react";
import Map from "../components/Map";

function ContactInfoPage() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <img
        className="brand-logo"
        src={`${process.env.PUBLIC_URL}/scalcx-heading.jpg`}
        alt="SCALX Logo"
        style={{ height: "220px" }}
      />
      <div>102 Discovery, Irvine CA 92618</div>
      <div>949-880-2523</div>
      <div style={{ marginTop: "20px" }}>
        <Map /> {/* Display the map here */}
      </div>
    </div>
  );
}

export default ContactInfoPage;
