"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { ShieldCheck } from "lucide-react";

export function Layout10() {
  return (
    <section className="bg-gray-300 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Fresh</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
              Always Current, Always Relevant Parts for You
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              We ensure that every part we source is up-to-date and ready for
              immediate use. Our commitment to freshness means you receive only
              the best, most relevant components for your vehicle.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <FaBoxesStacked className="size-12 text-scheme-text" />
                </div>
                <h6 className="text-base md:text-lg lg:text-xl mb-3 font-bold md:mb-4">
                  No Stockpiling
                </h6>
                <p>
                  Receive parts that are sourced directly and tailored to your
                  specific needs.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <ShieldCheck className="size-12 text-scheme-text" />
                </div>
                <h6 className="text-base md:text-lg lg:text-xl mb-3 font-bold md:mb-4">
                  Quality Assurance
                </h6>
                <p>
                  Every part undergoes strict quality checks before delivery to
                  ensure reliability.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button to="/product-overview" variant="secondary">
                Learn More
              </Button>
              <Button
                to="/contact-us"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                className="hover:text-secondary"
              >
                Inquire
              </Button>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="/imports/OEM_parts.jpeg"
              alt="Genuine OEM Parts"
              className="object-cover w-full h-60 lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
