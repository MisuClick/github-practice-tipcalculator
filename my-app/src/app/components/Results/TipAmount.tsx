"use client";
import React, { FC } from "react";
import "../../styles/Result.css"; // create this CSS file

interface TipAmountProps {
  amount: number;
}

const TipAmount: FC<TipAmountProps> = ({ amount }) => {
  return (
    <div className="result-container">
      <div className="result-label">
        <p>Tip Amount</p>
        <span className="per-person">/ person</span>
      </div>
      <p className="result-value">${amount.toFixed(2)}</p>
    </div>
  );
};

export default TipAmount;
