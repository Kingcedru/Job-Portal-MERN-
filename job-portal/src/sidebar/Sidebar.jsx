import React from "react";
import Location from "./Location";

export default function Sidebar({ handleChange, handleClick }) {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} />
    </div>
  );
}
