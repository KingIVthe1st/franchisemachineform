"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { RepeatingRows } from "@/components/ui/RepeatingRows";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

const DEFAULT_FEES = [
  "Royalty Fee",
  "Local Advertising Fee",
  "Advertising Fund Fee",
  "Additional Training",
  "Refresher Training",
  "Additional Assistance",
  "Contractor's/Development Fee",
  "Transfer Fee",
  "Renewal Fee",
  "Audit Fee",
  "Interest",
  "Late Fee",
  "Operations Manual Replacement Cost",
  "Management Fee",
  "Maintenance Fee",
  "Costs and Attorneys' Fees",
  "Indemnification",
  "Relocation Expenses",
];

const DEFAULT_INVESTMENT_ITEMS = [
  "Initial Franchise Fee",
  "Leasehold Improvements",
  "Furniture/Fixtures/Equipment",
  "Signage",
  "Rent (3 months)",
  "Security Deposits",
  "Utility Deposits",
  "Opening Inventory/Supplies",
  "Computer Systems",
  "Insurance (3 months)",
  "Business Licenses/Permits",
  "Professional Fees",
  "Grand Opening Advertising",
  "Training Expenses",
  "Additional Funds (3 months)",
  "TOTAL ESTIMATED INITIAL INVESTMENT",
];

export function Items6to7({ data, update }: Props) {
  // Initialize fee rows if empty
  const feeRows =
    (data.q28_fees as Record<string, string>[]) ||
    DEFAULT_FEES.map((name) => ({
      name,
      amount: "",
      due_date: "",
      remarks: "",
    }));

  const investmentRows =
    (data.q30_investment as Record<string, string>[]) ||
    DEFAULT_INVESTMENT_ITEMS.map((type) => ({
      type,
      amount: "",
      method: "",
      when_due: "",
      to_whom: "",
    }));

  return (
    <SectionWrapper
      itemNumber="Items 6–7"
      title="Other Fees & Estimated Initial Investment"
    >
      {/* Q28 - Item 6: Other Fees */}
      <div className="space-y-3">
        <div className="mb-2">
          <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
            Item 6: Other Fees
          </span>
        </div>
        <RepeatingRows
          label="Please complete the following fee schedule"
          columns={[
            {
              key: "name",
              label: "Name of Fee",
              placeholder: "Fee name",
              width: "25%",
            },
            { key: "amount", label: "Amount", placeholder: "$0.00" },
            { key: "due_date", label: "Due Date", placeholder: "When due" },
            { key: "remarks", label: "Remarks", placeholder: "Notes" },
          ]}
          rows={feeRows}
          onChange={(rows) => update("q28_fees", rows)}
          addLabel="Add Fee"
        />
      </div>

      {/* Q29 */}
      <RadioGroup
        label="Will the franchise system have advertising/purchasing cooperatives?"
        name="q29_cooperatives"
        options={["Yes", "No"]}
        value={(data.q29_cooperatives as string) || ""}
        onChange={(v) => update("q29_cooperatives", v)}
      />

      {/* Q30 - Item 7: Estimated Initial Investment */}
      <div className="space-y-3">
        <div className="mb-2">
          <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
            Item 7: Estimated Initial Investment
          </span>
        </div>
        <RepeatingRows
          label="Please complete the estimated initial investment table"
          columns={[
            {
              key: "type",
              label: "Type of Expenditure",
              placeholder: "Expenditure type",
              width: "22%",
            },
            {
              key: "amount",
              label: "Estimated Amount/Range",
              placeholder: "$0 - $0",
            },
            {
              key: "method",
              label: "Method of Payment",
              placeholder: "Method",
            },
            { key: "when_due", label: "When Due", placeholder: "When due" },
            {
              key: "to_whom",
              label: "To Whom Payment Made",
              placeholder: "Payee",
            },
          ]}
          rows={investmentRows}
          onChange={(rows) => update("q30_investment", rows)}
          addLabel="Add Item"
        />
      </div>

      {/* Q31 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are any payments refundable?"
          name="q31_refundable"
          options={["Yes", "No"]}
          value={(data.q31_refundable as string) || ""}
          onChange={(v) => update("q31_refundable", v)}
        />
        {data.q31_refundable === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe when refund is applicable"
              value={(data.q31_refund_desc as string) || ""}
              onChange={(e) => update("q31_refund_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q32 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the franchisee's initial investment be financed by the Franchisor/affiliate?"
          name="q32_financed"
          options={["Yes", "No"]}
          value={(data.q32_financed as string) || ""}
          onChange={(v) => update("q32_financed", v)}
        />
        {data.q32_financed === "Yes" && (
          <div className="conditional-enter space-y-4 border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="What expenditure will be financed?"
              value={(data.q32_financed_what as string) || ""}
              onChange={(e) => update("q32_financed_what", e.target.value)}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <Input
                label="Down payment required?"
                value={(data.q32_down_payment as string) || ""}
                onChange={(e) => update("q32_down_payment", e.target.value)}
                placeholder="$0.00 or %"
              />
              <Input
                label="Duration of financing?"
                value={(data.q32_duration as string) || ""}
                onChange={(e) => update("q32_duration", e.target.value)}
                placeholder="e.g. 5 years"
              />
              <Input
                label="Interest rate?"
                value={(data.q32_interest as string) || ""}
                onChange={(e) => update("q32_interest", e.target.value)}
                placeholder="e.g. 8%"
              />
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
