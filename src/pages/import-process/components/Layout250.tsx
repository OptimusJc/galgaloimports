"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";

export function Layout250() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Seamless Shipping and Delivery: Your Parts, Right When You Need
              Them
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8 overflow-hidden">
              <img
                src="/imports/reliable_imports.jpg"
                alt="Reliable Imports"
                className="rounded-image w-full h-auto aspect-video"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Fast and Reliable Delivery for Your Imported Auto Parts
            </h3>
            <p>
              Once your parts are sourced, we ensure prompt shipping directly to
              your location.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
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
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/imports/quality_assurance.jpg"
                alt="Quality Assurance"
                className="rounded-image w-full h-auto aspect-video"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Timely Delivery with Quality Assurance for Every Order
            </h3>
            <p>
              We provide estimated delivery timelines to keep you informed every
              step of the way.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
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
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/imports/20ft-mix-img.jpeg"
                alt="Trusted OEM Parts"
                className="rounded-image w-full h-auto aspect-video"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Your Satisfaction is Our Priority: Trust in Our Delivery Process
            </h3>
            <p>
              Experience peace of mind with our commitment to quality and timely
              delivery.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button
                to="/contact-us"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="hover:text-secondary"
              >
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
