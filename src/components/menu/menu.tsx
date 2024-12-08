"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { FaPhoneAlt } from 'react-icons/fa';

const menulinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/lab", label: "Clinic Gallery" },
  { path: "/contact", label: "Contact" },
  { path: "/bao", label: "Results" },
];

const Menu = () => {
  const container = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: 0,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".menu-link",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: "-100%",
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <div ref={container} className="relative">
      <div className="flex justify-between items-center p-4 bg-black text-beige">
        <div className="text-lg font-bold">
          <Link href="/">HWSCC</Link>
        </div>
        <div className="cursor-pointer uppercase text-sm tracking-wider hover:text-beige" onClick={toggleMenu}>
          {isMenuOpen ? "Close" : "Menu"}
        </div>
      </div>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-black text-beige z-50 flex flex-col -translate-x-full"
      >
        <div className="flex justify-between items-center p-4 border-b border-black">
          <div className="text-lg">
            <p className="uppercase text-sm tracking-wider text-beige">HWSCC</p>
          </div>
          <div className="cursor-pointer uppercase text-sm tracking-wider hover:text-beige transition-colors duration-300" onClick={toggleMenu}>
            Close &#10005;
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center px-8 md:pl-40 lg:pl-96 space-y-2">
          {menulinks.map((link, index) => (
            <div key={index} className="menu-link group">
              <Link 
                href={link.path} 
                onClick={toggleMenu}
                className="text-4xl md:text-7xl font-bold hover:text-red-500"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center text-sm border-t border-black">
          <div className="space-y-2 mb-4 md:mb-0">
            <a href="#" className="block hover:text-beige transition-colors duration-300">Clinic Reception ↗</a>
            <a href="#" className="block hover:text-beige transition-colors duration-300">X ↗</a>
            <a href="#" className="block hover:text-beige transition-colors duration-300">Instagram ↗</a>
            <a href="#" className="block hover:text-beige transition-colors duration-300">Facebook ↗</a>
          </div>
          
          <div className="space-y-2 text-beige">
            <p className="hover:text-beige transition-colors duration-300">hwscc@gmail.com</p>
            <a
              href="https://api.whatsapp.com/send?phone=6385751370&text=Hello%20this%20is%20a%20service%20enquiry!"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-beige transition-colors duration-300"
            >
              <FaPhoneAlt className="inline mr-2 text-green-500" />
              222 445 556
             
            </a>
          </div>
          
          <div className="hidden md:block">
            <Link
              href="/book-appointment"
              className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 uppercase text-sm tracking-wider font-medium"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-black text-beige p-3 rounded-full shadow-lg flex items-center space-x-2 z-40 hover:bg-green-500 transition-colors duration-300">
        <a
          href="tel:+6385751370"
          className="flex items-center text-beige font-semibold"
        >
          <FaPhoneAlt className="mr-2 text-4xl text-green-500" />
          <span></span>
        </a>
      </div>

      {!isMenuOpen && (
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-black text-center border-t border-black">
          <Link
            href="/book-appointment"
            className="bg-green-500 text-black py-3 px-8 rounded-full text-lg font-semibold uppercase shadow-lg hover:bg-green-600 transition-all duration-300 inline-block"
          >
            <FaPhoneAlt className="inline mr-2 text-black" />  Book Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
