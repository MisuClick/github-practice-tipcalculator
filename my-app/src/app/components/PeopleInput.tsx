"use client";
import React, { FC } from "react";

interface PeopleInputProps {
  people: number;
  setPeople: (value: number) => void;
}

const PeopleInput: FC<PeopleInputProps> = ({ people, setPeople }) => {
  return (
    <div>
      <label>Number of People</label>
      <input
        type="number"
        value={people || ""}
        onChange={(e) => setPeople(parseInt(e.target.value) || 1)}
        placeholder="1"
        min={1}
      />
    </div>
  );
};

export default PeopleInput;
