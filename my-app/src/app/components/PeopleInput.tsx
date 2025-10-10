"use client";
import React, { FC } from "react";
import "../styles/PeopleInput.css";

interface PeopleInputProps {
  people: number;
  setPeople: (value: number) => void;
}

const PeopleInput: FC<PeopleInputProps> = ({ people, setPeople }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setPeople(isNaN(value) ? 0 : value);
  };

  return (
    <div className="people-input-container">
      <div className="people-label-row">
        <label className="people-label">Number of People</label>
        {people === 0 && <span className="error-text">Can't be zero</span>}
      </div>
      <input
        type="number"
        className={`people-input ${people === 0 ? "error" : ""}`}
        value={people}
        onChange={handleChange}
        placeholder="0"
        min={0}
      />
    </div>
  );
};

export default PeopleInput;
