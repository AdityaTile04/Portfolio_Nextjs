import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full flex flex-col items-center justify-center">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 flex flex-col items-center justify-center w-full">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 w-[800px] max-w-4xl h-auto min-h-[400px] p-10"
          >
            <div className="flex lg:flex-row flex-col lg:items-center gap-6">
              <Image
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-40 md:w-32 w-24"
                width={160}
                height={160}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-2xl md:text-3xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-5 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
