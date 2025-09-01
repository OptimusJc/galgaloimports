"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";

export function Layout22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <GiCargoCrane className="size-20 text-scheme-text" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
              Precision Steering Components for Optimal Control
            </h2>
            <p className="text-medium">
              Our steering racks are engineered for reliability and performance,
              ensuring your vehicle handles with precision. Experience seamless
              steering with our authentic, imported components designed to meet
              OEM standards.
            </p>
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
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
