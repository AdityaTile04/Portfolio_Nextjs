import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full flex flex-col items-center justify-center">
      <h1 className="heading text-center">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 flex justify-center">
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="text-black dark:text-white border-neutral-200 dark:border-slate-800 max-w-[700px] min-h-[350px]"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start p-6 gap-6">
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-24 h-24 object-contain"
                    width={96}
                    height={96}
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center lg:text-left text-center">
                  <h1 className="text-2xl md:text-2xl font-bold leading-tight mb-3">
                    {card.title}
                  </h1>
                  <p className="text-white-100 text-sm md:text-base font-semibold leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
