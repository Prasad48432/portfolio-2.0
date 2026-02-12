import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="gap-2 mb-6 mt-6 flex w-full text-foreground items-center justify-center">
      <div className="text-lg flex h-12 items-center justify-center text-right text-foreground lg:order-4 lg:mr-0 md:order-3 md:ml-auto md:h-11 sm:ml-0 sm:mt-2 sm:w-full">
        @2026
        <Image
          alt="Love"
          loading="lazy"
          width={68}
          height={68}
          className="-mr-3 -ml-3 -mt-0.5"
          style={{ color: "transparent" }}
          src="/love.svg"
        />
        Made by
        <span className="font-medium ml-1 hover:text-foreground transition-colors duration-200 cursor-pointer">
          @prasadreddy03
        </span>
      </div>
    </div>
  );
};

export default Footer;
