"use client";

import Button from "@/components/Button";

export function Cta3() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold text-white md:mb-6">
            Discover Our Sourcing Process
          </h2>
          <p className="text-medium text-white">
            Get in touch to start your request for genuine imported auto parts
            today!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button
              to="/import-process"
              className="hover:bg-white hover:text-secondary"
            >
              Learn More
            </Button>
            <Button
              to="/contact-us"
              variant="secondary-alt"
              className="hover:bg-primary hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/about/sourcing_process.jpeg"
          className="size-full object-cover"
          alt="Genuine OEM Lights and Nose Cut"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
