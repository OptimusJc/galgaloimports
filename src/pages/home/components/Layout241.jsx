"use client";

// import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout241() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Parts</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Explore Our Top Quality Auto Parts
              </h2>
              <p className="text-medium">
                Discover a wide range of imported auto parts designed for your
                vehicle's needs. From engines to gearboxes, we ensure quality
                and authenticity in every component.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Engines for Every Type of Vehicle
              </h3>
              <p>
                Choose from gasoline and diesel engines tailored for optimal
                performance.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Precision Vehicle Nose Cuts & Body Cuts
              </h3>
              <p>Our nose and body cuts guarantee a perfect fit and finish.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Reliable Steering Racks for Smooth Handling
              </h3>
              <p>
                Experience enhanced control with our high-quality steering
                racks.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            {/* <Button variant="secondary">Inquire</Button> */}
            {/* <Button */}
            {/*   iconRight={<ChevronRight className="text-scheme-text" />} */}
            {/*   variant="link" */}
            {/*   size="link" */}
            {/* > */}
            {/*   Explore */}
            {/* </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
