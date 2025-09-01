"use client";
import Button from "@/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { PiEngineBold } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { GiCargoCrane } from "react-icons/gi";

export function Layout246() {
  return (
    <section className="bg-primary-light text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Explore Our Extensive Range of High-Quality Imported Auto Parts
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Our product lineup features top-tier engines, nose/body cuts,
              gearboxes, crankshafts, and steering components. Each part is
              sourced directly from trusted global suppliers, ensuring
              authenticity and quality. Trust us to provide the exact parts you
              need for your vehicle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="border border-gray-50/5">
            <div className="mb-5 md:mb-6">
              <PiEngineBold className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Engines: Power Your Vehicle with Trusted Performance
            </h3>
            <p>We offer a variety of gasoline and diesel engines.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/contact-us"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="text-white hover:text-secondary"
              >
                Inquire
              </Button>
            </div>
          </div>
          <div className="border border-gray-50/5">
            <div className="mb-5 md:mb-6">
              <GiCargoCrane className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Nose/Body Cuts: Precision Cuts for Perfect Fitment
            </h3>
            <p>
              Our nose and body cuts ensure compatibility and quality for your
              vehicle.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/contact-us"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="text-white hover:text-secondary"
              >
                Inquire
              </Button>
            </div>
          </div>
          <div className="border border-gray-50/5">
            <div className="mb-5 md:mb-6">
              <TbManualGearbox className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 font-bold md:mb-4">
              Gearboxes & Crankshafts: Smooth Transitions for Every Drive
            </h3>
            <p>
              Choose from our selection of manual and automatic gearboxes and
              crankshafts.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                to="/contact-us"
                rightIcon={<FaChevronRight className="text-scheme-text" />}
                variant="link"
                size="small"
                className="text-white hover:text-secondary"
              >
                Inquire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
