

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const tabs = [
    {id: "home", name:"Trang Chủ"},
    {id: "about", name:"Giới Thiệu"},
    {id: "work", name:"Dự Án Cá Nhân"},
    {id: "skills", name:"Kinh Nghiệm"},
    {id: "contact", name:"Liên Hệ"},
  ]
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {tabs.map((item) => (
          <li className="app__flex p-text" key={`link-${item.id}`}>
            <div />
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {tabs.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setToggle(false)}>
                    {item.name}
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