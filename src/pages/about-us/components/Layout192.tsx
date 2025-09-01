"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";

export function Layout192() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Authenticity</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
              Our Commitment to Genuine Parts
            </h2>
            <p className="text-medium">
              We prioritize authenticity by sourcing only genuine OEM parts. Our
              dedication ensures that you receive high-quality components that
              meet your vehicle's specifications.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button to="/import-process" variant="secondary">
                Learn More
              </Button>
              <Button
                to="/contact-us"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                className="hover:text-secondary"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
