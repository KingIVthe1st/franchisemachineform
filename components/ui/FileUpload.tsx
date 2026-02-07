"use client";

import { useRef, useState } from "react";
import { Upload, X, FileText } from "lucide-react";

interface FileUploadProps {
  label: string;
  name: string;
  accept?: string;
  helperText?: string;
  onFileChange: (file: File | null) => void;
}

export function FileUpload({
  label,
  name,
  accept = "image/*,.pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.rtf",
  helperText,
  onFileChange,
}: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || null);
    onFileChange(file);
  };

  const handleClear = () => {
    setFileName(null);
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text-secondary">
        {label}
      </label>
      {fileName ? (
        <div className="flex items-center gap-3 rounded-lg border border-brand-cyan/30 bg-brand-cyan/5 px-4 py-3">
          <FileText className="h-5 w-5 text-brand-cyan" />
          <span className="flex-1 truncate text-sm text-white">{fileName}</span>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-full p-1 text-text-muted hover:bg-surface-hover hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dashed border-white/[0.08] px-6 py-8 text-text-muted transition-all duration-300 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 hover:text-brand-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]"
        >
          <Upload className="h-5 w-5" />
          <span className="text-sm font-medium">Click to upload file</span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleChange}
        className="sr-only"
      />
      {helperText && <p className="text-xs text-text-muted">{helperText}</p>}
    </div>
  );
}
