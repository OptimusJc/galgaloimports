"use client";

import Button from "@/components/Button";
import { Call, LocationOn, Mail } from "relume-icons";
import { MdChevronRight } from "react-icons/md";

export function Contact14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Location</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 font-bold md:mb-6">
            Contact Us
          </h2>
          <p className="text-medium">
            Reach out to us for your auto parts needs.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <Mail className="size-8 text-scheme-text" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl mb-2 font-bold">
                Email
              </h3>
              <p className="mb-2">sales@galgaloimports.com</p>
              <a className="underline" href="mailto:sales@galgaloimports.com">
                sales@galgaloimports.com
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <Call className="size-8 text-scheme-text" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl mb-2 font-bold">
                Phone
              </h3>
              <p className="mb-2">Call us anytime!</p>
              <a className="underline" href="to:+254768298690">
                +254 768 298 690
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <LocationOn className="size-8 text-scheme-text" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl mb-2 font-bold">
                Office
              </h3>
              <p className="mb-2">123 Sample St, Sydney NSW 2000 AU</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get Directions"
                  variant="link"
                  size="small"
                  rightIcon={<MdChevronRight className="text-scheme-text" />}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
          <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
