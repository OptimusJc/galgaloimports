"use client";

import Button from "@/components/Button";

export function Header5() {
  return (
    <section className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md lg:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-5 font-bold text-white md:mb-6">
              Imported Auto Parts You Can Trust
            </h1>
            <p className="font-medium text-white">
              Discover high-quality auto parts sourced directly from global
              markets. Experience authentic OEM quality with no middlemen
              involved.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button
                variant="secondary"
                to="/contact-us"
                className="hover:bg-secondary hover:text-secondary"
              >
                Inquire
              </Button>
              <Button
                variant="secondary-alt"
                to="/about-us"
                className="hover:border-secondary hover:text-secondary"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/home/engines_and_nose_cuts.jpg"
          className="size-full object-cover"
          alt="Quality vehicle engines and body cuts"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
}
