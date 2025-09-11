"use client";

export function Layout197() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1 overflow-hidden">
            <img
              src="/home/reliable_engines_3.jpeg"
              className="w-full h-auto max-h-[600px] rounded-image object-cover md:object-center"
              alt="Original Engines"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-5 font-bold md:mb-6">
              Explore Our Premium Engines: Trusted Brands for Every Vehicle Type
            </h3>
            <p className="text-medium mb-6 md:mb-8">
              Our engine selection features top brands known for their
              reliability and performance. Whether you need gasoline or diesel
              engines, we ensure authentic quality that meets your vehicle's
              specifications.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="text-base md:text-lg lg:text-xl mb-3 font-bold md:mb-4">
                  Top Brands
                </h6>
                <p>
                  Supported brands include Toyota, Honda, Ford, and more for all
                  your needs.
                </p>
              </div>
              <div>
                <h6 className="text-base md:text-lg lg:text-xl mb-3 font-bold md:mb-4">
                  Key Features
                </h6>
                <p>
                  Genuine OEM quality, precise fitment, and fast delivery
                  directly to your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
