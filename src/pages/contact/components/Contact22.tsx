"use client";

import { Call, LocationOn, Mail, Sms } from "relume-icons";

export function Contact22() {
  // Your WhatsApp business number (replace with your actual number)
  const whatsappNumber = "+254768298690"; // Format: +countrycode+number

  // Function to detect mobile device
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  // Function to open WhatsApp chat
  const startWhatsAppChat = () => {
    const message =
      "Hi! I found your website and I'm interested in your auto parts. Can you help me?";
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URLs
    const webWhatsAppUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    const mobileWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open appropriate URL based on device
    if (isMobileDevice()) {
      window.open(mobileWhatsAppUrl, "_blank");
    } else {
      window.open(webWhatsAppUrl, "_blank");
    }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 sm:mb-6">
              <Mail className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">Email</h3>
            <p className="mb-5 md:mb-6">
              We're here to assist you with your auto parts inquiries.
            </p>
            <a
              className="underline hover:text-blue-500 transition-colors duration-300"
              href="mailto:sales@galgaloimports.com"
            >
              sales@galgaloimports.com
            </a>
          </div>

          <div>
            <div className="mb-5 sm:mb-6">
              <Sms className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">
              WhatsApp Chat
            </h3>
            <p className="mb-5 md:mb-6">
              Chat with our team for immediate assistance via WhatsApp.
            </p>
            <button
              onClick={startWhatsAppChat}
              className="underline hover:text-green-500 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group"
            >
              Start WhatsApp chat
              <Sms className="size-4 group-hover:animate-bounce" />
            </button>
          </div>

          <div>
            <div className="mb-5 sm:mb-6">
              <Call className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">Phone</h3>
            <p className="mb-5 md:mb-6">
              Call us for quick support on your part needs.
            </p>
            <a
              className="underline hover:text-blue-500 transition-colors duration-300"
              href="tel:+254768298690"
            >
              +971 543 176 629
            </a>
          </div>

          <div>
            <div className="mb-5 sm:mb-6">
              <LocationOn className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">
              Office
            </h3>
            <p className="mb-5 md:mb-6">
              Visit us for direct consultations and inquiries.
            </p>
            <a
              className="underline hover:text-purple-500 transition-colors duration-300"
              href="https://maps.app.goo.gl/imQkkDxa8CCazjca6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buserah Auto Garage, Along Nile Rd, Nairobi, Kenya.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
