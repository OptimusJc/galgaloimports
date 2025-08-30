"use client";

export function Layout6() {
  return (
    <section className="bg-gray-300 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 font-bold md:mb-6">
              Precision Parts Matching Tailored Specifically for Your Vehicle's
              Needs
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Finding the right auto parts can be challenging. Our expert
              matching service ensures you get the perfect fit for your vehicle.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="text-base md:text-lg lg:text-xl mb-3 font-bold md:mb-4">
                  Tailored Solutions
                </h6>
                <p>
                  We analyze your vehicle's specifications to recommend the best
                  parts available.
                </p>
              </div>
              <div>
                <h6 className="text-base md:text-lg lg:text-xl mb-3 font-bold md:mb-4">
                  Expert Guidance
                </h6>
                <p>Our team is here to assist you every step of the way.</p>
              </div>
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
