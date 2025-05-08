import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-white bg-gray-400 rounded p-10">
  <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Terms and Conditions</a>
    <a className="link link-hover">Privacy policy</a>
  </nav>
  <nav>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <a target='blank' href='https://x.com/i/flow/login'>
      <FaTwitter size={30} />

      </a>
      <a target='blank' href='https://www.facebook.com/'>
      <FaFacebook size={30} />

      </a>
      <a target='blank' href='https://www.youtube.com/'>
      <FaYoutube size={30} />

      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Subscription-box Ltd</p>
  </aside>
</footer>
    );
};

export default Footer;