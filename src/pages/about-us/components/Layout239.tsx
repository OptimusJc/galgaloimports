"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";

export function Layout239() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-2xl">
              <p className="mb-3 font-semibold md:mb-4">Sourcing</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
                Our Sourcing Process: Authenticity Guaranteed
              </h2>
              <p className="text-medium">
                At our company, we prioritize sourcing genuine auto parts
                directly from verified partners. This ensures that you receive
                only the highest quality components without any middlemen
                involved.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8 overflow-hidden">
                <img
                  src="/about/quality_oem_steering_components.jpeg"
                  alt="Quality OEM Steering Vehicle Parts"
                  className="rounded-image aspect-video w-full h-auto object-cover object-center"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold md:mb-6">
                No Middlemen, No Compromises
              </h3>
              <p>
                We eliminate intermediaries to provide you with direct access to
                authentic parts.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8 overflow-hidden">
                <img
                  src="/about/verified_quality_oem_parts.jpeg"
                  alt="Verified Quality OEM Parts"
                  className="rounded-image w-full h-auto max-h-[300px] aspect-video object-cover object-center"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold md:mb-6">
                Verified Partners for Quality Assurance
              </h3>
              <p>
                Our partners are carefully vetted to ensure reliability and
                quality.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8 overflow-hidden">
                <img
                  src="/about/garanteed_oem_parts.jpeg"
                  alt="Garanteed OEM Car Parts"
                  className="rounded-image w-full h-auto max-h-[300px] aspect-video object-cover object-center"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold md:mb-6">
                Say Goodbye to Local Knockoffs
              </h3>
              <p>
                We guarantee that every part sourced is genuine and verified.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button
              to="/contact-us"
              rightIcon={<FaChevronRight className="text-scheme-text" />}
              variant="link"
              size="small"
              className="hover:text-secondary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
