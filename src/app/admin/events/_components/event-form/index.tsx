"use client";
import React from "react";
import Steps from "@/src/components/Steps";
import LocationAndDate from "./LocationAndDate";
import Media from "./Media";
import Tickets from "./Tickets";
import General from "./General";

function Even() {
  const [activeStep = 0, setActiveStep] = React.useState<number>(0);
  const [event, setEvent] = React.useState<any>(null);
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const commonProps = {
    event,
    setEvent,
    activeStep,
    setActiveStep,
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Steps
          stepNames={["General", "Location & Data", "Media", "Tickets"]}
          stepsContent={[
            <General {...commonProps} />,
            <LocationAndDate {...commonProps} />,
            <Media {...commonProps} />,
            <Tickets {...commonProps} />,
          ]}
          activeStep={activeStep}
        />
      </form>
    </div>
  );
}

export default Even;
