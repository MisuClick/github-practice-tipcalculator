"use client";
import { useState } from "react";
import BillInput from "./BillInput";
import {TipSelector} from "./TipSelector";
import PeopleInput from "./PeopleInput";
import TipAmount from "./Results/TipAmount";
import TotalAmount from "./Results/TotalAmount";
import ResetButton from "./ResetButton";
import {
  calculateTipPerPerson,
  calculateTotalPerPerson,
} from "../../utils/calculator";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  const tipAmount = calculateTipPerPerson(bill, tip, people);
  const totalPerPerson = calculateTotalPerPerson(bill, tip, people);

  const handleReset = () => {
    setBill(0);
    setTip(10);
    setPeople(1);
  };

  return (
    <div className="tip-calculator-container">
      {/* Inputs Section */}
      <div className="inputs-container">
        <BillInput bill={bill} setBill={setBill} />
        <TipSelector tipPercent={tip} setTipPercent={setTip} />
        <PeopleInput people={people} setPeople={setPeople} />
      </div>

      {/* Results Section */}
      <div className="results-container">
        <TipAmount amount={tipAmount} />
        <TotalAmount amount={totalPerPerson} />
        <ResetButton onReset={handleReset} disabled={bill <= 0} />
      </div>
    </div>
  );
}
