"use client";
import React from "react";

interface ResetButtonProps {
  reset: () => void;
}

export default function ResetButton({ reset }: ResetButtonProps) {
  return <button onClick={reset}>RESET</button>;
}
