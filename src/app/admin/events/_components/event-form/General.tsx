import React from "react";
import { Input, Textarea } from "@nextui-org/react";
function General() {
  return (
    <div className="flex flex-col gap-5">
      <Input label="Event Name" placeholder="Event Name">Enter Text</Input>
      <Textarea></Textarea>
    </div>
  );
}

export default General;
