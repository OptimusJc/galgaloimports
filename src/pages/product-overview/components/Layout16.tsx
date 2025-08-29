"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Precision</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Nose and Body Cuts for Perfect Fit
            </h1>
            <p className="text-medium mb-5 md:mb-6">
              Our nose and body cuts are meticulously sourced to ensure
              compatibility with your vehicle. Each cut is made with precision,
              guaranteeing a seamless fit for optimal performance.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BsFillBoxFill className="size-6 text-scheme-text" />
                </div>
                <span>
                  Engineered for compatibility with various vehicle models.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BsFillBoxFill className="size-6 text-scheme-text" />
                </div>
                <span>
                  Clean cuts ensure minimal installation time and effort.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BsFillBoxFill className="size-6 text-scheme-text" />
                </div>
                <span>
                  Authentic parts sourced directly from trusted suppliers.
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Inquire" variant="secondary">
                Inquire
              </Button>
              <Button
                title="Call"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
              >
                Call
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
