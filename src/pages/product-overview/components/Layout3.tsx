"use client";

export function Layout3() {
  return (
    <section className="bg-gray-300 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 font-bold md:mb-6">
              Explore Our Premium Gearboxes and Crankshafts for Optimal
              Performance
            </h1>
            <p className="text-medium">
              Our gearboxes and crankshafts are designed for both automatic and
              manual systems, ensuring seamless integration with your vehicle.
              Each component is sourced directly from trusted manufacturers,
              guaranteeing authentic quality and precise fitment.
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
