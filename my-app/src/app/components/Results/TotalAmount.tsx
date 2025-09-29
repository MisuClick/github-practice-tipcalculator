"use client";
import React, { FC } from "react";

interface TotalAmountProps {
  amount: number;
}

const TotalAmount: FC<TotalAmountProps> = ({ amount }) => {
  return <p>Total (per person): ${amount.toFixed(2)}</p>;
};

export default TotalAmount;
