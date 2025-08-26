"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout24() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Experience Genuine Auto Parts Directly Imported – No Middlemen
              Involved!
            </h3>
            <p className="text-medium">
              Our direct import model ensures you receive authentic,
              high-quality parts without the hassle of middlemen. Trust us to
              deliver exactly what you need, when you need it.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
