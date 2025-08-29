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
            <p className="mb-3 font-semibold md:mb-4">Fresh</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
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
                  <BsFillBoxFill className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  No Stockpiling
                </h6>
                <p>
                  Receive parts that are sourced directly and tailored to your
                  specific needs.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <BsFillBoxFill className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Quality Assurance
                </h6>
                <p>
                  Every part undergoes strict quality checks before delivery to
                  ensure reliability.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Inquire"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
              >
                Inquire
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
