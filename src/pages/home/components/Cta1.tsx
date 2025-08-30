"use client";

import Button from "@/components/Button";

export function Cta1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
              Get Your Auto Parts Today
            </h2>
            <p className="text-medium">
              Request a quote for genuine imported auto parts tailored to your
              vehicle's needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button
                to="/contact-us"
                className="hover:bg-white hover:text-secondary"
              >
                Request
              </Button>
              <Button variant="secondary" to="/contact-us">
                Inquire
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
