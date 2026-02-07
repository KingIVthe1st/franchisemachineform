"use client";

import { Check } from "lucide-react";

interface CheckboxGroupProps {
  label: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
  columns?: number;
}

export function CheckboxGroup({
  label,
  options,
  values,
  onChange,
  columns = 1,
}: CheckboxGroupProps) {
  const toggle = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else {
      onChange([...values, option]);
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {options.map((option) => {
          const checked = values.includes(option);
          return (
            <label
              key={option}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-all duration-300 ${
                checked
                  ? "border-brand-cyan/50 bg-brand-cyan/10 text-white shadow-[0_0_12px_rgba(0,212,255,0.1)]"
                  : "border-white/[0.06] bg-transparent text-text-secondary hover:border-white/10 hover:bg-white/[0.03]"
              }`}
            >
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-300 ${
                  checked
                    ? "border-brand-cyan bg-brand-cyan shadow-[0_0_8px_rgba(0,212,255,0.4)]"
                    : "border-text-muted"
                }`}
              >
                {checked && <Check className="h-3 w-3 text-black" />}
              </div>
              <span className="text-sm">{option}</span>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(option)}
                className="sr-only"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
