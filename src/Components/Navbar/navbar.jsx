import React from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./navbar.scss";
import { useState } from "react";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = (item)=>{
    setToggle(true);
    console.log(window.ttq)
    window.ttq.track('ViewContent',{
      contents:[
        {
          content_id:'301',
          content_name:item,
          brand:item,
          quantity:1,
          price:9
        },
        {
          content_id:'3022',
          content_name:item,
          brand:item,
          quantity:1,
          price:9
        }
      ],
      content_type:'product',
      value:9.2,
      currency:"USD",
    })

  }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.MyLogo} alt="Logo comes here" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "work","testimonials", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} onClick={()=>handleClick(item)}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul>
              {["home", "about", "skills", "work","testimonials", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
