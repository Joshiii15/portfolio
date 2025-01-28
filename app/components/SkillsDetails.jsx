import { skillsDescription } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const SkillsDetails = () => {
  return (
    <div>
      <h4>Skills</h4>
      <div>
        {skillsDescription.map(({ title, description, tools }, index) => (
          <div key={index}>
            <h3>{title}</h3>
            <p>{description}</p>
            {tools.map((tool, index) => (
              <div key={index}>
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDetails;
