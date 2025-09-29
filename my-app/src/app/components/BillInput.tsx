"use client";
import React, { FC } from "react";
import "../styles/BillInput.css"; // import the CSS file

interface BillInputProps {
  bill: number;
  setBill: (value: number) => void;
}

const BillInput: FC<BillInputProps> = ({ bill, setBill }) => {
  return (
    <div className="bill-input-container">
      <label className="bill-label">Bill</label>
      <input
        type="number"
        value={bill || ""}
        onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
        placeholder="0"
        className="bill-input"
      />
    </div>
  );
};

export default BillInput;
