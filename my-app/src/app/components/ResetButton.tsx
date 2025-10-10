"use client";
import React, { FC } from "react";
import "../styles/ResetButton.css"; // Make sure to create this CSS file

interface ResetButtonProps {
  onReset: () => void;
  disabled: boolean;
}

const ResetButton: FC<ResetButtonProps> = ({ onReset, disabled }) => {
  return (
    <button
      className="reset-button"
      onClick={onReset}
      disabled={disabled}
    >
      RESET
    </button>
  );
};

export default ResetButton;
