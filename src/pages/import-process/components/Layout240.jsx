"use client";

// import { Button } from "@/components/ui/button";
import React from "react";
// import { ChevronRight } from "relume-icons";

export function Layout240() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h3 font-bold">
            Step 2: Verification and Sourcing from Our Global Partners
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Ensuring Authenticity: Our Rigorous Verification Process
            </h3>
            <p>
              We meticulously verify each supplier to guarantee the highest
              quality parts.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {/* <Button */}
              {/*   iconRight={<ChevronRight className="text-scheme-text" />} */}
              {/*   variant="link" */}
              {/*   size="link" */}
              {/* > */}
              {/*   Learn More */}
              {/* </Button> */}
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Sourcing from Trusted Markets: Japan, UAE, and the UK
            </h3>
            <p>
              Our global partners are carefully selected to ensure authenticity
              and reliability.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {/* <Button */}
              {/*   iconRight={<ChevronRight className="text-scheme-text" />} */}
              {/*   variant="link" */}
              {/*   size="link" */}
              {/* > */}
              {/*   Send Inquiry */}
              {/* </Button> */}
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Quality Assurance: Delivering Only the Best Parts to You
            </h3>
            <p>
              We guarantee that every part is sourced directly from verified
              manufacturers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {/* <Button */}
              {/*   iconRight={<ChevronRight className="text-scheme-text" />} */}
              {/*   variant="link" */}
              {/*   size="link" */}
              {/* > */}
              {/*   Call Now */}
              {/* </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
