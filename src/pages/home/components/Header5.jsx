"use client";

// import { Button } from "@/components/ui/button";
import React from "react";

export function Header5() {
  return (
    <section className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="heading-h1 mb-5 font-bold text-white md:mb-6">
              Imported Auto Parts You Can Trust
            </h1>
            <p className="text-medium text-white">
              Discover high-quality auto parts sourced directly from global
              markets. Experience authentic OEM quality with no middlemen
              involved.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {/* <Button title="Request">Request</Button> */}
              {/* <Button title="Inquire" variant="secondary-alt"> */}
              {/*   Inquire */}
              {/* </Button> */}
            </div>
          </div>
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
