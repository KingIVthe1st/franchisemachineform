"use client";

import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { RepeatingRows } from "@/components/ui/RepeatingRows";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

export function Items15to21({ data, update }: Props) {
  return (
    <SectionWrapper
      itemNumber="Items 15–21"
      title="Operations, Public Figures, Financial Performance & Outlets"
    >
      {/* --- ITEM 15: OBLIGATION TO PARTICIPATE --- */}
      <div className="mb-4">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 15: Obligation to Participate in Operation
        </span>
      </div>

      {/* Q70 */}
      <RadioGroup
        label="Will the franchisee/operating principal be required to exercise on-premises supervision?"
        name="q70_supervision"
        options={["Yes", "No"]}
        value={(data.q70_supervision as string) || ""}
        onChange={(v) => update("q70_supervision", v)}
      />

      {/* Q71 */}
      <RadioGroup
        label="Will the franchisee be permitted to hire manager(s) to run the business?"
        name="q71_managers"
        options={["Yes", "No"]}
        value={(data.q71_managers as string) || ""}
        onChange={(v) => update("q71_managers", v)}
      />

      {/* --- ITEM 18: PUBLIC FIGURES --- */}
      <div className="mb-4 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 18: Public Figures
        </span>
      </div>

      {/* Q72 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are there any public figures endorsing the franchise?"
          name="q72_public_figures"
          options={["Yes", "No"]}
          value={(data.q72_public_figures as string) || ""}
          onChange={(v) => update("q72_public_figures", v)}
        />
        {data.q72_public_figures === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Who are the public figures and what compensation is provided?"
              value={(data.q72_figures_desc as string) || ""}
              onChange={(e) => update("q72_figures_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* --- ITEM 19: FINANCIAL PERFORMANCE REPRESENTATIONS --- */}
      <div className="mb-4 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 19: Financial Performance Representations
        </span>
      </div>

      {/* Q73 */}
      <div className="space-y-4 rounded-lg border border-border/50 bg-surface-card p-5">
        <p className="text-sm leading-relaxed text-text-secondary">
          Item 19 of the FDD requires the Franchisor to disclose whether it
          makes financial performance representations. A financial performance
          representation is any representation to a prospective franchisee,
          including a representation in the general media, that states,
          expressly or by implication, a specific level or range of actual or
          potential sales, income, gross profits, or net profits.
        </p>
        <Textarea
          label="If you are interested in making a financial performance representation in Item 19, please advise"
          value={(data.q73_fpr as string) || ""}
          onChange={(e) => update("q73_fpr", e.target.value)}
          placeholder="Describe any financial performance representations you wish to make, or write N/A"
        />
      </div>

      {/* --- ITEM 20: OUTLETS AND FRANCHISEE INFORMATION --- */}
      <div className="mb-4 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 20: Outlets and Franchisee Information
        </span>
      </div>

      {/* Q74 */}
      <RepeatingRows
        label="Projected number of franchised units by state"
        columns={[
          {
            key: "state",
            label: "State",
            placeholder: "State name",
            width: "50%",
          },
          {
            key: "units",
            label: "Number of Franchised Units Projected",
            placeholder: "0",
            type: "number",
          },
        ]}
        rows={(data.q74_projections as Record<string, string>[]) || []}
        onChange={(rows) => update("q74_projections", rows)}
        addLabel="Add State"
      />

      {/* --- ITEM 21: FINANCIAL STATEMENTS --- */}
      <div className="mb-4 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 21: Financial Statements
        </span>
      </div>

      {/* Q75 */}
      <div className="rounded-lg border border-border/50 bg-surface-card p-5">
        <p className="text-sm leading-relaxed text-text-secondary">
          The FDD must contain three years of audited financial statements of
          the Franchisor, including a balance sheet and income statement for the
          most recent fiscal year and balance sheets and income statements for
          each of the previous two fiscal years. If the Franchisor has been in
          existence for less than three years, the financial statements must
          cover the Franchisor&apos;s entire existence. If the most recent
          balance sheet and income statement are as of a date more than 90 days
          before the application date, the Franchisor must also prepare an
          unaudited balance sheet and income statement as of a date within 90
          days of the application.
        </p>
        <div className="mt-4">
          <Textarea
            label="Please provide any notes regarding your financial statements"
            value={(data.q75_financial_notes as string) || ""}
            onChange={(e) => update("q75_financial_notes", e.target.value)}
            placeholder="Notes, questions, or comments regarding financial statement requirements"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
