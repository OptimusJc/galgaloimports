"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { Truck } from "lucide-react";
import { MdOutlineRequestPage, MdOutlineVerified } from "react-icons/md";

export function Layout238() {
  return (
    <section className="bg-primary-light text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Your Request Starts Here: Connect with Us for Genuine Parts
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <MdOutlineRequestPage className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-5 font-bold md:mb-6">
              How We Source Your Parts: A Simple Process
            </h3>
            <p>
              Reach out via our form, call, or email to initiate your request.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/contact-us"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="text-white hover:text-secondary"
              >
                Request
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <MdOutlineVerified className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-5 font-bold md:mb-6">
              Step 2: We Verify and Source from Trusted Global Partners
            </h3>
            <p>
              Our team ensures authenticity and quality by working with verified
              suppliers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/product-overview"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="text-white hover:text-secondary"
              >
                Verify
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <Truck className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-5 font-bold md:mb-6">
              Step 3: Timely Delivery Right to Your Doorstep
            </h3>
            <p>
              We handle shipping to ensure your parts arrive promptly and
              safely.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/product-overview"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="text-white hover:text-secondary"
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
