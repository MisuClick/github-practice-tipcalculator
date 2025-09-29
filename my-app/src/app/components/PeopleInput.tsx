"use client";
import React from "react";

interface PeopleInputProps {
  people: number;
  setPeople: (value: number) => void;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
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
}
