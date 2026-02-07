"use client";

interface RadioGroupProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
}

export function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  helperText,
}: RadioGroupProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`relative flex cursor-pointer items-center gap-3 rounded-lg border px-5 py-3 transition-all duration-200 ${
              value === option
                ? "border-brand-cyan bg-brand-cyan/10 text-white"
                : "border-border bg-surface-input text-text-secondary hover:border-border-light hover:bg-surface-hover"
            }`}
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                value === option ? "border-brand-cyan" : "border-text-muted"
              }`}
            >
              {value === option && (
                <div className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
              )}
            </div>
            <span className="text-sm font-medium">{option}</span>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
          </label>
        ))}
      </div>
      {helperText && <p className="text-xs text-text-muted">{helperText}</p>}
    </div>
  );
}
