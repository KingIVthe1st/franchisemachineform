"use client";

import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-text-secondary">
          {label}
          {props.required && <span className="text-brand-cyan ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={`w-full rounded-lg border border-border bg-surface-input px-4 py-3 text-white placeholder-text-muted transition-all duration-200 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 hover:border-border-light ${className}`}
          {...props}
        />
        {helperText && <p className="text-xs text-text-muted">{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
