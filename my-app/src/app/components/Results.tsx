"use client";
import React from "react";

interface ResultsProps {
  tipAmount: number;
  total: number;
}

export default function Results({ tipAmount, total }: ResultsProps) {
  return (
    <div>
      <h2>Results</h2>
      <p>Tip Amount (per person): ${tipAmount.toFixed(2)}</p>
      <p>Total (per person): ${total.toFixed(2)}</p>
    </div>
  );
}
