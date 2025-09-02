"use client";

import Button from "@/components/Button";

export function Header65() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container max-w-xl text-center mx-auto">
        <p className="mb-3 font-semibold text-white md:mb-4">Streamlined</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 font-bold text-white md:mb-6">
          Our Proven Process
        </h1>
        <p className="text-medium text-white">
          Experience a seamless import journey from request to delivery—your
          trusted source for auto parts.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button
            to="/about-us"
            variant="primary"
            className="hover:bg-white hover:text-secondary"
          >
            Learn More
          </Button>
          <Button
            to="/contact-us"
            variant="secondary-alt"
            className="hover:bg-primary hover:text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
