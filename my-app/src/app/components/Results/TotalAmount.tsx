"use client";
import React, { FC } from "react";

interface TotalAmountProps {
  amount: number;
}

const TotalAmount: FC<TotalAmountProps> = ({ amount }) => {
    return (
    <div className="result-container">
      <div className="result-label">
        <p>Total Amount</p>
        <span className="per-person">/ person</span>
      </div>
      <p className="result-value">${amount.toFixed(2)}</p>
    </div>
  );
};

export default TotalAmount;
