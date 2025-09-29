"use client";
import React from "react";
import "../styles/TipSelector.css";

interface TipSelectorProps {
  tipPercent: number;
  setTipPercent: (value: number) => void;
}

const tipOptions = [5, 10, 15, 25, 50];

export const TipSelector: React.FC<TipSelectorProps> = ({
  tipPercent,
  setTipPercent,
}) => {
  return (
    <div className="tip-selector">
      <label className="tip-label">Select Tip %</label>
      <div className="tip-grid">
        {tipOptions.map((tip) => (
          <button
            key={tip}
            onClick={() => setTipPercent(tip)}
            className={`tip-button ${tipPercent === tip ? "active" : ""}`}
          >
            {tip}%
          </button>
        ))}
        {/* Custom input */}
        <input
          type="number"
          className="tip-input"
          placeholder="Custom"
          onChange={(e) => setTipPercent(parseFloat(e.target.value) || 0)}
        />
      </div>
    </div>
  );
};