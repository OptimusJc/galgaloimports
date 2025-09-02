"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";

export function Layout240() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Step 2: Verification and Sourcing from Our Global Partners
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Ensuring Authenticity: Our Rigorous Verification Process
            </h3>
            <p>
              We meticulously verify each supplier to guarantee the highest
              quality parts.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/product-overview"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="hover:text-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Sourcing from Trusted Markets: Japan, UAE, and the UK
            </h3>
            <p>
              Our global partners are carefully selected to ensure authenticity
              and reliability.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/contact-us"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="hover:text-secondary"
              >
                Send Inquiry
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Quality Assurance: Delivering Only the Best Parts to You
            </h3>
            <p>
              We guarantee that every part is sourced directly from verified
              manufacturers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/contact-us"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="hover:text-secondary"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
