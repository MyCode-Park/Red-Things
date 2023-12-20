"use client";
import React from "react";
import { Button, Chip, Input, Textarea } from "@nextui-org/react";

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
  const [guest, setGuest] = React.useState<string>("");
  const getCommonProps = (name: string) => {
    return {
      labelPlacement: "outside",
      value: event?.[name],
      onChange: (e: any) => setEvent({ ...event, [name]: e.target.value }),
    } as any;
  };
  const onGuestAdd = () => {
    const newGuests = [];
    const commaSeparatedGuests = guest.split(",");

    // if there are more than one guest in the input, then use them
    if (commaSeparatedGuests.length > 1) {
      newGuests.push(...commaSeparatedGuests);
    } else {
      // add them as a single guest
      newGuests.push(guest);
    }

    // check if there are already guest in the event
    if (event?.newGuests) {
      newGuests.push(...event.guests);
    }

    setEvent({ ...event, guests: newGuests });
    setGuest("");
  };
  const onGuestRemove = (guestToRemove: number) => {
    const newGuests = event?.guest?.filter(
      (_: string, index: number) => index !== guestToRemove
    );
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
        placeholder="Enter organizer name"
        {...getCommonProps("organizer")}
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
          onChange={(e) => setGuest(e.target.value)}
        />
        <Button onClick={onGuestAdd}>Add</Button>
      </div>

      <div className="flex flex-wrap gap-5">
        {event?.guests?.map((guest: string, index: number) => (
          <Chip onClose={() => onGuestRemove(index)}>{guest}</Chip>
        ))}
      </div>
    </div>
  );
}

export default General;
