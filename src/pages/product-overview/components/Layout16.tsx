"use client";

import Button from "@/components/Button";
import { FaChevronRight, FaWindowMinimize } from "react-icons/fa";
import { PiEngineBold } from "react-icons/pi";
import { MdVerified } from "react-icons/md";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Precision</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
              Nose and Body Cuts for Perfect Fit
            </h1>
            <p className="text-medium mb-5 md:mb-6">
              Our nose and body cuts are meticulously sourced to ensure
              compatibility with your vehicle. Each cut is made with precision,
              guaranteeing a seamless fit for optimal performance.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <PiEngineBold className="size-6 text-scheme-text" />
                </div>
                <span>
                  Engineered for compatibility with various vehicle models.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <FaWindowMinimize className="size-6 text-scheme-text" />
                </div>
                <span>
                  Clean cuts ensure minimal installation time and effort.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <MdVerified className="size-6 text-scheme-text" />
                </div>
                <span>
                  Authentic parts sourced directly from trusted suppliers.
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button to="/contact-us" variant="secondary">
                Inquire
              </Button>
              <Button
                to="/contact-us"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                className="hover:text-secondary"
              >
                Call Us
              </Button>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="/products/half-cut5.jpeg"
              className="w-full h-auto max-h-[600px] rounded-image object-cover md:object-center"
              alt="Precise Nose Cuts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
