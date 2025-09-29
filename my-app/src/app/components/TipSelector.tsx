"use client";
import React from "react";

interface TipSelectorProps {
  tipPercent: number;
  setTipPercent: (value: number) => void;
}

const tipOptions = [5, 10, 15, 25, 50];

export default function TipSelector({ tipPercent, setTipPercent }: TipSelectorProps) {
  return (
    <div>
      <label>Select Tip %</label>
      <div>
        {tipOptions.map((tip) => (
          <button key={tip} onClick={() => setTipPercent(tip)}>
            {tip}%
          </button>
        ))}
        {/* Custom input */}
        <input
          type="number"
          placeholder="Custom"
          onChange={(e) => setTipPercent(parseFloat(e.target.value) || 0)}
        />
      </div>
    </div>
  );
}
