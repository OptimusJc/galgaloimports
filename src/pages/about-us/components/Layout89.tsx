"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";

export function Layout89() {
  return (
    <section className="bg-gray-300 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Precision</p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Unmatched Precision in Sourcing Auto Parts
            </h3>
          </div>
          <div>
            <p className="text-medium">
              At our core, we believe that precision is paramount. We
              meticulously match each part to your vehicle's specific needs,
              ensuring optimal performance and compatibility. Our sourcing
              process guarantees that you receive only the highest quality
              components, tailored for your exact requirements.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
        <div className="w-full max-w-5xl mx-auto">
          <video
            controls
            muted
            preload="none"
            poster="/videos/thumbnail.jpg"
            className="w-full h-auto aspect-video object-fit bg-black rounded-lg shadow-lg"
          >
            <source src="/videos/final_output.mp4" type="video/mp4" />
            Your browser doesn't support this video format
          </video>
        </div>
      </div>
    </section>
  );
}
