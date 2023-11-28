import React from "react";
interface StepsProps {
  stepNames: string[];
  stepsContent: React.ReactNode[];
  activeStep: number;
}

function steps({ stepNames, stepsContent, activeStep }: StepsProps) {
  return (
    <div>
      <div className="flex justify-between">
        {stepNames.map((stepName, index) => {
          const isActiveStep = index === activeStep;
          return (
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div
                  className={`h-8 w-8 rounded-full flex justify-center items-center
              ${
                activeStep >= index
                  ? "bg-black text-white" 
                  : "bg-gray-500 text-gray-200"
              }`}
                >
                  {index + 1}
                </div>
              </div>
              <h1 className="text-sm">{stepName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default steps;
