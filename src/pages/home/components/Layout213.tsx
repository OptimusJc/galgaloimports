"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";

export function Layout213() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-5 md:mb-6">
              <BsFillBoxFill className="size-20 text-scheme-text" />
            </div>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Experience the Assurance of Authentic OEM Parts
            </h2>
            <p className="text-medium">
              Our commitment to quality means you receive only genuine OEM
              parts, ensuring perfect fit and performance. Trust us to deliver
              the reliability your vehicle deserves.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Send Inquiry"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
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
