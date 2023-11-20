import React from "react";
import EngiselleLogo from "../image/engiselle_logo2.png"; // Replace 'path-to-your-map-image' with the actual path to your map image

const FooterRegister = () => {
  return (
    <footer className="footer mt-5 bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="d-flex align-items-center">
              <img
                src={EngiselleLogo}
                alt="Footer Logo"
                width="auto"
                height="80"
                className="me-3"
              />
            </div>
            <div>
            <p className="my-5 d-flex align-items-center footer-detail">
                Address: 16 Shaw Road #01-02 <br />
                SINGAPORE 367954 <br />
                Office: +65 8010 0223 <br />
                Email: enquiry@engiselle.com
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.930741520644!2d103.883679!3d1.336635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1791c160e83f%3A0xd5e5412d0b1db977!2s16%20Shaw%20Rd%2C%20Singapore%20367954!5e0!3m2!1sen!2sus!4v1700111595344!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
                className="rounded-4"
              ></iframe>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 copyright">Copyright © 2023 Engiselle Technologies Pte. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterRegister;
