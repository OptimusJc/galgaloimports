"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Integrity</p>
        <h1 className="heading-h1 mb-5 font-bold md:mb-6">
          Genuine Parts Delivered
        </h1>
        <p className="text-medium">
          We supply authentic imported auto parts from trusted sources in Japan,
          UAE, and the UK.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Learn More">Learn More</Button>
          <Button title="Contact Us" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
