"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";

export function Layout213() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1 overflow-hidden">
            <img
              src="/home/quality_half_cuts_1.jpeg"
              className="w-full h-auto max-h-[600px] rounded-image object-cover md:object-center"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-5 md:mb-6">
              <MdOutlineHighQuality className="size-20 text-scheme-text" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
              Experience the Assurance of Authentic OEM Parts
            </h2>
            <p className="text-medium">
              Our commitment to quality means you receive only genuine OEM
              parts, ensuring perfect fit and performance. Trust us to deliver
              the reliability your vehicle deserves.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button to="/about-us" variant="secondary">
                Learn More
              </Button>
              <Button
                to="/contact-us"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                className="hover:text-secondary"
              >
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
