import React from "react";
import { Popover } from "@material-ui/core";

export default function ShowMessage({ text, error }) {
  return (
    <Popover open={text.length > 0}>
      <div className={error ? "errorMessage" : "message"}>{text}</div>
    </Popover>
  );
}
