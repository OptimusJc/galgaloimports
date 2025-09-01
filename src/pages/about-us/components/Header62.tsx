"use client";

import Button from "@/components/Button";

export function Header62() {
  return (
    <section className="bg-primary text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center mx-auto">
        <p className="mb-3 font-semibold md:mb-4">Integrity</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 font-bold md:mb-6">
          Genuine Parts Delivered
        </h1>
        <p className="text-medium">
          We supply authentic imported auto parts from trusted sources in Japan,
          UAE, and the UK.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button
            to="/import-process"
            variant="tertiary"
            className="text-white hover:text-secondary"
          >
            Learn More
          </Button>
          <Button to="/contact-us" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
