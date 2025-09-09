"use client";

import { MdOutlineAutoStories } from "react-icons/md";

export function Layout24() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <MdOutlineAutoStories className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-5 font-bold md:mb-6">
              Experience Genuine Auto Parts Directly Imported – No Middlemen
              Involved!
            </h3>
            <p className="text-medium">
              Our direct import model ensures you receive authentic,
              high-quality parts without the hassle of middlemen. Trust us to
              deliver exactly what you need, when you need it.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src="/home/quality_brands_2.jpg"
              className="w-full h-auto max-h-[600px] rounded-image object-cover md:object-center"
              alt="Quality vehicle auto parts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
