"use client";

import Button from "@/components/Button";

export function Cta25() {
  return (
    <section className="bg-gray-300 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
          Get Your Auto Parts Today
        </h2>
        <p className="text-medium">
          Submit your inquiry or call us to find the exact part you need.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button
            className="hover:bg-white hover:text-secondary"
            to="/contact-us"
          >
            Inquire
          </Button>
          <Button variant="secondary" to="/contact-us">
            Call
          </Button>
        </div>
      </div>
    </section>
  );
}
