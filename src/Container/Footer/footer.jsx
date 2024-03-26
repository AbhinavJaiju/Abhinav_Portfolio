import React, { useState, useEffect } from "react";
import "./footer.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
// import tiktokPixelHandler from "react-pixel-tiktok";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  // const TIKTOK_PIXEL_ID = "CNUJRQRC77U07IJKR950";


//   useEffect(() => {
//     tiktokPixelHandler.init(TIKTOK_PIXEL_ID);
//  }, []);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'ContactingMe',contact);
    }
    window.instance('CNPA0LJC77UE2ERGD8RG').track('Contact',{
      content_id:'contact1',
      name:contact.name,
      email:contact.email,
      message:contact.message
    });
    if (email.endsWith('gmail.com')) {
      // Assuming you have a GTM event set up for this
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'emailEndsWithGmail',
        'email': email
      });
    }

    // tiktokPixelHandler.setTracking({
    //   tracking: "SubmitForm",
    //   data: {
    //     content_id: "1232", // Example content ID
    //     content_type: "product", // Example content type
    //     content_name: contact.name, // Captured name
    //     email: contact.email, // Captured email
    //     message: contact.message, // Captured message
    //   },
    // });
    // if (typeof window !== 'undefined' && window.ttq) {
    //   window.ttq.instance('CNUJRQRC77U07IJKR950').track('SubmitForm', contact);
    // }
    
    if(typeof window !== 'undefined' && window.ttq){
      console.log('jello')
      window.ttq('ViewContent',{
        content_id:'12B12',
        content_type: "product",
        content_name:'Abhinav',
        price:'123'
      })
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with Me!</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:abhinavchalakudi@gmail.com" className="p-text">
            abhinavchalakudi@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 8589010166">+91 8589010166</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your E-mail"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              ></textarea>
          </div>
          <button type="button" id="testing" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
