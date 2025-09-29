"use client";
import { useState } from "react";
import BillInput from "./BillInput";
import TipSelector from "./TipSelector";
import PeopleInput from "./PeopleInput";
import Results from "./Results";
import ResetButton from "./ResetButton";
import { calculateTipPerPerson, calculateTotalPerPerson } from "../utils/calculator";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState(1);

  // computed values
  const tipAmount = calculateTipPerPerson(bill, tipPercent, people);
  const total = calculateTotalPerPerson(bill, tipPercent, people);

  // reset handler
  const reset = () => {
    setBill(0);
    setTipPercent(0);
    setPeople(1);
  };

  return (
    <div>
      <h1>Tip Calculator</h1>

      {/* Left Side */}
      <BillInput bill={bill} setBill={setBill} />
      <TipSelector tipPercent={tipPercent} setTipPercent={setTipPercent} />
      <PeopleInput people={people} setPeople={setPeople} />

      {/* Right Side */}
      <Results tipAmount={tipAmount} total={total} />

      {/* Reset */}
      <ResetButton reset={reset} />
    </div>
  );
}
