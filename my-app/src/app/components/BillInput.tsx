"use client";
import React from "react";

interface BillInputProps {
  bill: number;
  setBill: (value: number) => void;
}

export default function BillInput({ bill, setBill }: BillInputProps) {
  return (
    <div>
      <label>Bill</label>
      <input
        type="number"
        value={bill || ""}
        onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
        placeholder="0"
      />
    </div>
  );
}
