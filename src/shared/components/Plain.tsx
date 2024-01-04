import React from "react";
import { Text } from "slate";

export const Plain = () => {
  return <div>Plain</div>;
};

function x(e: any) {
  return Text.isText(e)
    ? e.text
    : e.children && Array.isArray(e.children)
    ? e.children.map(x).join("")
    : "";
}

Plain.serialize = (e: any) => {
  return Array.isArray(e) && e.length > 0 ? e.map(x).join("\n") : "";
};
