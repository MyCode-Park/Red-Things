"use client";
import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

export interface EventFromStepProps {
  event: any;
  setEvent: React.Dispatch<React.SetStateAction<any>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}
function General({
  event,
  setEvent,
  activeStep,
  setActiveStep,
}: EventFromStepProps) {
  const [guest, setguest] = React.useState<string>("");
  const getCommonProps = (name: string) => {
    return {
      labelPlacement: "outside",
      value: event?.[name],
      onChange: (e: any) => setEvent({ ...event, [name]: e.target.value }),
    } as any;
  };
  return (
    <div>
      <Input
        className="pb-5 pt-5"
        label="Event Name"
        placeholder="Enter event name"
        {...getCommonProps("name")}
      />

      <Input
        className="pb-5"
        label="Event Organiser"
        placeholder="Enter organiser name"
        {...getCommonProps("organiser")}
      />

      <Textarea
        className="pb-5"
        label="Description"
        placeholder="Enter description"
        {...getCommonProps("description")}
      />

      <div className="flex gap-5 items-end">
        <Input
          label="Guests"
          value={guest}
          placeholder="Enter your guests"
          labelPlacement="outside"
          onChange={(e) => setguest(e.target.value)}
        />
        <Button>Add</Button>
      </div>
    </div>
  );
}

export default General;
