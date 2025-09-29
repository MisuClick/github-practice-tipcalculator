"use client";
import { useState } from "react";
import BillInput from "./BillInput";
import TipSelector from "./TipSelector";
import PeopleInput from "./PeopleInput";
import Results from "./Results";
import ResetButton from "./ResetButton";
import { calculateTipPerPerson, calculateTotalPerPerson } from "../../utils/calculator";
import "../styles/TipCalculator.css"; // ✅ import styles

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  const tipAmount = (bill * (tip / 100)) / people;
  const totalPerPerson = bill / people + tipAmount;

  return (
    <div className="container">
      <h1>Tip Calculator</h1>

      <label>Bill Amount</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Tip %</label>
      <input
        type="number"
        value={tip}
        onChange={(e) => setTip(Number(e.target.value))}
      />

      <label>Number of People</label>
      <input
        type="number"
        min="1"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
      />

      <h2>Tip per Person: ${tipAmount.toFixed(2)}</h2>
      <h2>Total per Person: ${totalPerPerson.toFixed(2)}</h2>
    </div>
  );
}
