"use client";

import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { ClipboardCheck, PackageCheck, Truck } from "lucide-react";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Precision</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-bold md:mb-6">
              Experience the Benefits of Our Import Process
            </h1>
            <p className="text-medium mb-5 md:mb-6">
              Our service ensures fitment accuracy, so you receive the right
              parts every time. With dedicated delivery support and stringent
              quality assurance, we prioritize your satisfaction and peace of
              mind.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <PackageCheck className="size-6 text-scheme-text" />
                </div>
                <span>
                  Guaranteed fitment for your vehicle's specific needs.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Truck className="size-6 text-scheme-text" />
                </div>
                <span>
                  Reliable delivery support for seamless part acquisition.
                </span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <ClipboardCheck className="size-6 text-scheme-text" />
                </div>
                <span>Strict quality checks for authentic imported parts.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/contact-us"
                variant="link"
                size="small"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                className="hover:text-secondary"
              >
                Get Started
              </Button>
            </div>
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
