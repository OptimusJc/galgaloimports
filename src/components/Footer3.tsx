"use client";

import { Link } from "react-router-dom";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "relume-icons";

export function Footer3() {
  return (
    <footer className="bg-primary text-white px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Logo image"
                  className="inline-block w-32 lg:w-38"
                />
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold">Address:</p>
              <p className="text-small mb-5 md:mb-6">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
              <p className="text-small mb-1 font-semibold">Contact:</p>
              <div className="flex flex-col md:gap-2 md:flex-row">
                <Link
                  to="tel:+254768298690"
                  className="text-small block underline"
                >
                  +254 768 298 690
                </Link>
                <Link
                  to="tel:+971543176629"
                  className="text-small block underline"
                >
                  +971 543 176 629
                </Link>
              </div>
              <Link
                to="mailto:sales@galgaloimports.com"
                className="text-small block underline"
              >
                sales@galgaloimports.com
              </Link>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <FacebookLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <InstagramLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="text-small py-2 font-semibold">
                <Link
                  to="/"
                  className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="text-small py-2 font-semibold">
                <Link
                  to="/about-us"
                  className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="text-small py-2 font-semibold">
                <Link
                  to="/product-overview"
                  className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  Product Overview
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="text-small py-2 font-semibold">
                <Link
                  to="/import-process"
                  className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  Import Process
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="text-small py-2 font-semibold">
                <Link
                  to="/contact-us"
                  className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-small py-2 font-semibold">
                <Link
                  to="#"
                  className="relative text-gray-600 hover:text-blue-400 transition-colors duration-300 group"
                >
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="text-small py-2 font-semibold">
                <Link
                  to="#"
                  className="relative text-gray-600 hover:text-blue-400 transition-colors duration-300 group"
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" h-px w-full bg-scheme border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">
            {`© ${new Date().getFullYear()} GalGalo Imports. All rights reserved.`}
          </p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="underline">
              <Link to="#">Terms of Service</Link>
            </li>
            <li className="underline">
              <Link to="#">Cookies Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
