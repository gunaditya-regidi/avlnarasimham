'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-999">
      <div className="flex items-center gap-2.5">
        <Link
  href="https://wa.me/919876543210?text=Hi%20Team%2C%20I%20am%20interested%20in%20your%20metallurgy%20consultation%20services.%20Please%20share%20more%20details."
  target="_blank"
  className="hidden lg:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-3.5 leading-none rounded-lg font-medium"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .02 5.37.02 12A11.85 11.85 0 0 0 2.3 18.13L.04 24l6.08-2.21A11.88 11.88 0 0 0 12 24c6.63 0 12-5.37 12-12a11.86 11.86 0 0 0-3.48-8.52zM12 22a9.88 9.88 0 0 1-5.22-1.47l-.37-.22-3.61 1.3 1.29-3.53-.24-.38A9.89 9.89 0 1 1 12 22zm5.22-7.44c-.3-.15-1.77-.88-2.05-.98s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07a8.09 8.09 0 0 1-2.38-1.47 8.73 8.73 0 0 1-1.6-1.97c-.17-.3 0-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5s.05-.37-.03-.52-.67-1.6-.91-2.18c-.24-.58-.48-.5-.66-.5h-.57a1.08 1.08 0 0 0-.78.37A3.27 3.27 0 0 0 6.5 9.4a6.85 6.85 0 0 0 2.92 5.18 10.87 10.87 0 0 0 6.62 2.28c.4 0 .8-.03 1.18-.1.36-.07 1.1-.45 1.26-.89.15-.45.15-.83.1-.89s-.27-.2-.57-.35z" />
  </svg>
  Connect on WhatsApp
</Link>

        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-purple_blue text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          </div>
        )}
      </div>
    </div>
  );
}
