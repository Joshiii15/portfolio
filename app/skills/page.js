"use client";

import { skillsDescription } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect } from "react";

const SkillsDetails = () => {
  useEffect(() => {
    const handleAnchorScroll = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 200, // adjust to navbar
            behavior: "smooth",
          });
        }
      }
    };

    handleAnchorScroll();
    window.addEventListener("hashchange", handleAnchorScroll);

    return () => {
      window.removeEventListener("hashchange", handleAnchorScroll);
    };
  }, []);

  return (
    <div className="w-10/12 py-16 mx-auto">
      <h4 className="text-4xl font-bold text-center font-Ovo my-16">Skills</h4>
      <div className="w-full px-[12%] pt-10 scroll-mt-20">
        {skillsDescription.map(
          ({ title, description, tools, imgLink, id }, i) => (
            <div
              key={i}
              className="flex w-full flex-col lg:flex-row items-center gap-20 my-16"
            >
              {/* left image */}
              <div id={id} className="w-64 sm:w-80 rounded-3xl max-w-none">
                <Image
                  src={imgLink}
                  alt="Services"
                  width={250}
                  height={250}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* right content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4 dark:text-white">
                  {description}
                </p>

                <ul className="flex flex-wrap">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-center gap-4 mt-2">
                      <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SkillsDetails;
