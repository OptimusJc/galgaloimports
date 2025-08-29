"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";

export function Layout238() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="heading-h3 font-bold">
              Your Request Starts Here: Connect with Us for Genuine Parts
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <BsFillBoxFill className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              How We Source Your Parts: A Simple Process
            </h3>
            <p>
              Reach out via our form, call, or email to initiate your request.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
              >
                Request
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <BsFillBoxFill className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Step 2: We Verify and Source from Trusted Global Partners
            </h3>
            <p>
              Our team ensures authenticity and quality by working with verified
              suppliers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
              >
                Verify
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <BsFillBoxFill className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Step 3: Timely Delivery Right to Your Doorstep
            </h3>
            <p>
              We handle shipping to ensure your parts arrive promptly and
              safely.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
              >
                Deliver
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
