"use client";
import React, { FC } from "react";
import "../../styles/TipAmount.css"; // create this CSS file

interface TipAmountProps {
  amount: number;
}

const TipAmount: FC<TipAmountProps> = ({ amount }) => {
  return (
    <div className="tip-amount-container">
      <div className="tip-label">
        <p>Tip Amount</p>
        <span className="per-person">/ person</span>
      </div>
      <p className="tip-value">${amount.toFixed(2)}</p>
    </div>
  );
};

export default TipAmount;
