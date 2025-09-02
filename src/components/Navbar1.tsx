"use client";

import Button from "./Button";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { KeyboardArrowDown } from "relume-icons";
import { useMediaQuery } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar1() {
  const useActive = useRelume();
  return (
    <section className="z-[999] flex w-full items-center border-b border-scheme-border bg-primary lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo image"
              className="w-20 md:w-24 my-2"
            />
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-gray-100"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-gray-100"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-gray-100"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] flex flex-col lg:flex-row lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            to="/"
            className="px-6 py-3 text-gray-100 font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-secondary"
          >
            Home
          </Link>

          <Link
            to="/product-overview"
            className="px-6 py-3 text-gray-100 font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-secondary"
          >
            Products
          </Link>
          <Link
            to="/about-us"
            className="px-6 py-3 text-gray-100 font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-secondary"
          >
            About Us
          </Link>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="px-6 py-3 text-gray-100 font-medium flex w-full items-center justify-between gap-2 text-left lg:flex-none lg:justify-start lg:px-4 lg:py-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-secondary"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Services</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <KeyboardArrowDown className="text-scheme-text" />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "flex",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-scheme-background bg-primary flex-col lg:absolute lg:z-50 lg:border lg:border-scheme-border lg:p-2 lg:[--y-close:25%]"
              >
                <Link
                  to="/contact-us"
                  className="pl-[10%] lg:px-4 py-2 font-medium text-base text-gray-100 transition-all duration-300 hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(199,0,57,0.8)]"
                >
                  Contact Us
                </Link>
                <Link
                  to="/import-process"
                  className="pl-[10%] lg:px-4 py-2 font-medium text-base text-gray-100 transition-all duration-300 hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(199,0,57,0.8)]"
                >
                  Import Process
                </Link>
                <Link
                  to="/faq"
                  className="pl-[10%] lg:px-4 py-2 font-medium text-base text-gray-100 transition-all duration-300 hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(199,0,57,0.8)]"
                >
                  FAQ
                </Link>
              </motion.nav>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
            <Button
              to="/contact-us"
              size="small"
              variant="tertiary"
              className="w-full py-3 md:py-2 text-gray-100 hover:text-secondary"
            >
              Quote
            </Button>
            <Button
              to="/contact-us"
              size="small"
              variant="secondary"
              className="w-full py-3 md:py-2 hover:bg-secondary"
            >
              Inquire
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
