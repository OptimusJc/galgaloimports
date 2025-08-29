"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Speed</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Efficiency in Sourcing and Delivery of Parts
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              We prioritize speed in every aspect of our service. Our
              streamlined processes ensure that you receive your parts quickly
              and efficiently.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <BsFillBoxFill className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Rapid Response
                </h6>
                <p>
                  Get your parts faster with our dedicated sourcing and delivery
                  teams.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <BsFillBoxFill className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Timely Deliveries
                </h6>
                <p>
                  We ensure on-time delivery, so you can keep your projects
                  moving forward.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Contact"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
              >
                Contact
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
