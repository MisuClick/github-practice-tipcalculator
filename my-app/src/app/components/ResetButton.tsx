"use client";
import React, { FC } from "react";

interface ResetButtonProps {
  onReset: () => void;
  disabled: boolean;
}

const ResetButton: FC<ResetButtonProps> = ({ onReset, disabled }) => {
  return (
    <button onClick={onReset} disabled={disabled}>
      RESET
    </button>
  );
};

export default ResetButton;
