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
          className={`input-glow w-full rounded-lg border border-white/[0.06] bg-surface-input px-4 py-3 text-sm text-white placeholder-text-muted transition-all duration-300 ease-out focus:outline-none hover:border-white/10 ${className}`}
          {...props}
        />
        {helperText && <p className="text-xs text-text-muted">{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
