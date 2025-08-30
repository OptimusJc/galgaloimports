"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import {
  MdOutlineInventory,
  MdOutlineWbAuto,
  MdOutlineWifiCalling,
} from "react-icons/md";

export function Layout238() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Discover How Our Import Process Delivers Quality Parts Directly to
              You
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <MdOutlineWbAuto className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-5 font-bold md:mb-6">
              Seamless Sourcing for Genuine Auto Parts from Trusted Global
              Partners
            </h3>
            <p>
              We ensure a straightforward import process that prioritizes your
              needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/import-process"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="hover:text-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <MdOutlineWifiCalling className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-5 font-bold md:mb-6">
              Your Request Initiates Our Commitment to Quality and Timeliness
            </h3>
            <p>
              We verify each request and source only the best parts for you.
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
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <MdOutlineInventory className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-5 font-bold md:mb-6">
              Timely Delivery with Assurance of Authenticity and Fitment
              Accuracy
            </h3>
            <p>
              Your parts arrive when you need them, with no outdated inventory.
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
