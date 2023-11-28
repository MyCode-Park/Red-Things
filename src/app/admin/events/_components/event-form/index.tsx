"use client";
import React from "react";
import Steps from "@/src/components/Steps";
import LocationAndDate from "./LocationAndDate";
import Media from "./Media";
import Tickets from "./Tickets";
import General from "./general";

function index() {
  const [activeStep = 0, setActiveStep] = React.useState(0); 
  return (
    <div>
      <Steps
        stepNames={["General", "Location & Data", "Media", "Tickets"]}
        stepsContent={[
          <General />,
          <LocationAndDate />,
          <Media />,
          <Tickets />,
        ]}
        activeStep={activeStep}
      />
    </div>
  );
}

export default index;
