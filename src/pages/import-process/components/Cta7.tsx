"use client";

import Button from "@/components/Button";

export function Cta7() {
  return (
    <section className="border border-tertiary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 font-bold md:mb-4">
              Start Your Import Journey Today
            </h2>
            <p className="text-medium">
              Let us find the perfect part for your vehicle
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <Button
            to="/contact-us"
            variant="primary"
            className="hover:bg-white hover:text-secondary"
          >
            Get Started
          </Button>
          <Button
            to="/contact-us"
            variant="secondary"
            className="hover:text-secondary"
          >
            Inquire
          </Button>
        </div>
      </div>
    </section>
  );
}
