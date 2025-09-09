"use client";

import Button from "@/components/Button";

export function Cta3() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold text-white md:mb-6">
            Get Your Auto Parts Today
          </h2>
          <p className="text-medium text-white">
            Reach out for genuine, imported auto parts tailored to your
            vehicle's needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button
              to="/contact-us"
              className="hover:bg-white hover:text-secondary"
            >
              Inquire
            </Button>
            <Button
              to="/contact-us"
              variant="secondary-alt"
              className="hover:bg-primary hover:text-white"
            >
              Call Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/products/nose-cut4.jpeg"
          className="size-full object-cover"
          alt="Original Nose Cuts"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}
