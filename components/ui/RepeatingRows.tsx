"use client";

import { Plus, Trash2 } from "lucide-react";

interface Column {
  key: string;
  label: string;
  type?: "text" | "number" | "date";
  placeholder?: string;
  width?: string;
}

interface RepeatingRowsProps {
  label: string;
  columns: Column[];
  rows: Record<string, string>[];
  onChange: (rows: Record<string, string>[]) => void;
  initialRows?: Record<string, string>[];
  addLabel?: string;
}

export function RepeatingRows({
  label,
  columns,
  rows,
  onChange,
  addLabel = "Add Row",
}: RepeatingRowsProps) {
  const addRow = () => {
    const empty: Record<string, string> = {};
    columns.forEach((col) => (empty[col.key] = ""));
    onChange([...rows, empty]);
  };

  const removeRow = (index: number) => {
    onChange(rows.filter((_, i) => i !== index));
  };

  const updateCell = (rowIndex: number, key: string, value: string) => {
    const updated = rows.map((row, i) =>
      i === rowIndex ? { ...row, [key]: value } : row,
    );
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <div className="glass-edge overflow-x-auto rounded-lg border border-white/[0.06]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06] bg-white/[0.02]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted"
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.label}
                </th>
              ))}
              <th className="w-12 px-3 py-2.5" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="table-row-hover border-b border-white/[0.04] transition-colors last:border-0"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-2 py-1.5">
                    <input
                      type={col.type || "text"}
                      value={row[col.key] || ""}
                      placeholder={col.placeholder || ""}
                      onChange={(e) =>
                        updateCell(rowIndex, col.key, e.target.value)
                      }
                      className="input-glow w-full rounded border border-transparent bg-surface-input px-3 py-2 text-sm text-white placeholder-text-muted transition-all duration-300 focus:outline-none"
                    />
                  </td>
                ))}
                <td className="px-2 py-1.5">
                  <button
                    type="button"
                    onClick={() => removeRow(rowIndex)}
                    className="rounded p-1.5 text-text-muted hover:bg-red-500/10 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-4 py-6 text-center text-sm text-text-muted"
                >
                  No rows added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={addRow}
        className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 hover:text-brand-cyan"
      >
        <Plus className="h-4 w-4" />
        {addLabel}
      </button>
    </div>
  );
}
