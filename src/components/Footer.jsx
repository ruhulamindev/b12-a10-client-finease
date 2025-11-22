import React from "react";
import MyContainer from "./MyContainer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-base-200">
      <MyContainer>
        <footer className="footer sm:footer-horizontal text-base-content p-10">
          {/* Logo and Website Name */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-y-2 gap-3">
              <img
                src="/download.png"
                alt="Logo"
                className="w-10 h-10 border border-4 rounded-full"
              />
              <span className="text-2xl font-bold">Finance</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted platform to manage finances,
              <br />
              track transactions, and analyze reports effortlessly.
            </p>
          </motion.div>
          {/* footer link */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h6 className="footer-title font-bold">Contact details</h6>
            <a className="link link-hover">Support</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Terms</a>
          </motion.div>
          {/* Social Media Links */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h6 className="footer-title mb-2 font-bold">Social Media Links</h6>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61566534111401"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors"
              >
                <img
                  src="/download.jpeg"
                  alt="Facebook"
                  className="rounded-full p-2"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-400 transition-colors"
              >
                <img
                  src="/downloads.png"
                  alt="X / Twitter"
                  className="rounded-full p-2"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/md-ruhul-amin-a71b58352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-700 transition-colors"
              >
                <img
                  src="/download (2).png"
                  alt="LinkedIn"
                  className="rounded-full p-2"
                />
              </a>
            </div>
          </motion.div>
        </footer>
        {/* Copyright */}
        <footer className="footer text-base-content border-base-600 border-t px-10 py-4">
          <aside className="flex justify-center items-center w-full">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
        </footer>
      </MyContainer>
    </div>
  );
};

export default Footer;
