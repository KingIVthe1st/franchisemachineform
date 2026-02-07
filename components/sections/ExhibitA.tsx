"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { FileUpload } from "@/components/ui/FileUpload";
import { RepeatingRows } from "@/components/ui/RepeatingRows";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CheckboxGroup } from "@/components/ui/CheckboxGroup";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

export function ExhibitA({ data, update }: Props) {
  const anyLitigationYes =
    data.exA_lit_a1_franchise === "Yes" ||
    data.exA_lit_a1_antitrust === "Yes" ||
    data.exA_lit_a1_securities === "Yes" ||
    data.exA_lit_a1_fraud === "Yes" ||
    data.exA_lit_a1_unfair === "Yes" ||
    data.exA_lit_a1_comparable === "Yes" ||
    data.exA_lit_a2_civil === "Yes" ||
    data.exA_lit_a3_criminal === "Yes" ||
    data.exA_lit_b1_felony === "Yes" ||
    data.exA_lit_b1_nolo === "Yes" ||
    data.exA_lit_b3_franchise === "Yes" ||
    data.exA_lit_b3_antitrust === "Yes" ||
    data.exA_lit_b3_securities === "Yes" ||
    data.exA_lit_b3_fraud === "Yes" ||
    data.exA_lit_b3_unfair === "Yes" ||
    data.exA_lit_b3_comparable === "Yes" ||
    data.exA_lit_c1_injunctive === "Yes" ||
    data.exA_lit_c2_suspension === "Yes";

  return (
    <SectionWrapper
      itemNumber="Exhibit A"
      title="Franchise Management Questionnaire"
      subtitle="This questionnaire must be completed by each person identified as a director, officer, or manager of the Franchisor."
    >
      {/* ---- SECTION I: HISTORY ---- */}
      <div className="mb-2">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Section I: History
        </span>
      </div>

      {/* A */}
      <Input
        label="A) Individual's full name"
        value={(data.exA_full_name as string) || ""}
        onChange={(e) => update("exA_full_name", e.target.value)}
        placeholder="Full legal name"
      />

      {/* B */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="B) Business Address"
          value={(data.exA_address as string) || ""}
          onChange={(e) => update("exA_address", e.target.value)}
        />
        <Input
          label="Phone"
          type="tel"
          value={(data.exA_phone as string) || ""}
          onChange={(e) => update("exA_phone", e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          value={(data.exA_email as string) || ""}
          onChange={(e) => update("exA_email", e.target.value)}
        />
        <Input
          label="Fax"
          value={(data.exA_fax as string) || ""}
          onChange={(e) => update("exA_fax", e.target.value)}
          placeholder="Optional"
        />
      </div>

      {/* C */}
      <Input
        label="C) Current position with Franchisor (title)"
        value={(data.exA_position as string) || ""}
        onChange={(e) => update("exA_position", e.target.value)}
        placeholder="e.g. CEO, President, VP of Operations"
      />

      {/* D */}
      <Input
        label="D) Beginning date of current position"
        type="date"
        value={(data.exA_position_date as string) || ""}
        onChange={(e) => update("exA_position_date", e.target.value)}
      />

      {/* E */}
      <RepeatingRows
        label="E) List all positions held during the past 5 years"
        columns={[
          { key: "title", label: "Title/Position", placeholder: "Title" },
          { key: "company", label: "Company", placeholder: "Company name" },
          { key: "type", label: "Type of Company", placeholder: "Industry" },
          { key: "location", label: "City/State", placeholder: "City, State" },
          { key: "start", label: "Start Date", placeholder: "MM/YYYY" },
          { key: "end", label: "End Date", placeholder: "MM/YYYY or Present" },
        ]}
        rows={(data.exA_positions as Record<string, string>[]) || []}
        onChange={(rows) => update("exA_positions", rows)}
        addLabel="Add Position"
      />

      {/* ---- SECTION II: LITIGATION ---- */}
      <div className="mb-2 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Section II: Litigation, Administrative Actions & Arbitrations
        </span>
      </div>

      <p className="text-sm text-text-secondary">
        <strong>Part A.1:</strong> Are you a pending defendant in any action
        involving the following?
      </p>

      <div className="space-y-3">
        <RadioGroup
          label="Franchise law violation?"
          name="exA_lit_a1_franchise"
          options={["Yes", "No"]}
          value={(data.exA_lit_a1_franchise as string) || ""}
          onChange={(v) => update("exA_lit_a1_franchise", v)}
        />
        <RadioGroup
          label="Antitrust law violation?"
          name="exA_lit_a1_antitrust"
          options={["Yes", "No"]}
          value={(data.exA_lit_a1_antitrust as string) || ""}
          onChange={(v) => update("exA_lit_a1_antitrust", v)}
        />
        <RadioGroup
          label="Securities law violation?"
          name="exA_lit_a1_securities"
          options={["Yes", "No"]}
          value={(data.exA_lit_a1_securities as string) || ""}
          onChange={(v) => update("exA_lit_a1_securities", v)}
        />
        <RadioGroup
          label="Fraud?"
          name="exA_lit_a1_fraud"
          options={["Yes", "No"]}
          value={(data.exA_lit_a1_fraud as string) || ""}
          onChange={(v) => update("exA_lit_a1_fraud", v)}
        />
        <RadioGroup
          label="Unfair or deceptive practices?"
          name="exA_lit_a1_unfair"
          options={["Yes", "No"]}
          value={(data.exA_lit_a1_unfair as string) || ""}
          onChange={(v) => update("exA_lit_a1_unfair", v)}
        />
        <RadioGroup
          label="Comparable allegations?"
          name="exA_lit_a1_comparable"
          options={["Yes", "No"]}
          value={(data.exA_lit_a1_comparable as string) || ""}
          onChange={(v) => update("exA_lit_a1_comparable", v)}
        />
      </div>

      <p className="text-sm text-text-secondary">
        <strong>Part A.2:</strong>
      </p>
      <RadioGroup
        label="Are you a defendant in any pending civil action that is considered material?"
        name="exA_lit_a2_civil"
        options={["Yes", "No"]}
        value={(data.exA_lit_a2_civil as string) || ""}
        onChange={(v) => update("exA_lit_a2_civil", v)}
      />

      <p className="text-sm text-text-secondary">
        <strong>Part A.3:</strong>
      </p>
      <RadioGroup
        label="Are you a defendant in any pending criminal case?"
        name="exA_lit_a3_criminal"
        options={["Yes", "No"]}
        value={(data.exA_lit_a3_criminal as string) || ""}
        onChange={(v) => update("exA_lit_a3_criminal", v)}
      />

      <p className="mt-6 text-sm text-text-secondary">
        <strong>Part B.1:</strong>
      </p>
      <div className="space-y-3">
        <RadioGroup
          label="Have you ever been convicted of a felony?"
          name="exA_lit_b1_felony"
          options={["Yes", "No"]}
          value={(data.exA_lit_b1_felony as string) || ""}
          onChange={(v) => update("exA_lit_b1_felony", v)}
        />
        <RadioGroup
          label="Have you ever pleaded nolo contendere to a felony?"
          name="exA_lit_b1_nolo"
          options={["Yes", "No"]}
          value={(data.exA_lit_b1_nolo as string) || ""}
          onChange={(v) => update("exA_lit_b1_nolo", v)}
        />
      </div>

      <p className="mt-6 text-sm text-text-secondary">
        <strong>Part B.3:</strong> Have you been held liable in a proceeding
        involving:
      </p>
      <div className="space-y-3">
        <RadioGroup
          label="Franchise law violation?"
          name="exA_lit_b3_franchise"
          options={["Yes", "No"]}
          value={(data.exA_lit_b3_franchise as string) || ""}
          onChange={(v) => update("exA_lit_b3_franchise", v)}
        />
        <RadioGroup
          label="Antitrust law violation?"
          name="exA_lit_b3_antitrust"
          options={["Yes", "No"]}
          value={(data.exA_lit_b3_antitrust as string) || ""}
          onChange={(v) => update("exA_lit_b3_antitrust", v)}
        />
        <RadioGroup
          label="Securities law violation?"
          name="exA_lit_b3_securities"
          options={["Yes", "No"]}
          value={(data.exA_lit_b3_securities as string) || ""}
          onChange={(v) => update("exA_lit_b3_securities", v)}
        />
        <RadioGroup
          label="Fraud?"
          name="exA_lit_b3_fraud"
          options={["Yes", "No"]}
          value={(data.exA_lit_b3_fraud as string) || ""}
          onChange={(v) => update("exA_lit_b3_fraud", v)}
        />
        <RadioGroup
          label="Unfair or deceptive practices?"
          name="exA_lit_b3_unfair"
          options={["Yes", "No"]}
          value={(data.exA_lit_b3_unfair as string) || ""}
          onChange={(v) => update("exA_lit_b3_unfair", v)}
        />
        <RadioGroup
          label="Comparable allegations?"
          name="exA_lit_b3_comparable"
          options={["Yes", "No"]}
          value={(data.exA_lit_b3_comparable as string) || ""}
          onChange={(v) => update("exA_lit_b3_comparable", v)}
        />
      </div>

      <p className="mt-6 text-sm text-text-secondary">
        <strong>Part C:</strong>
      </p>
      <div className="space-y-3">
        <RadioGroup
          label="C.1: Are you subject to an injunctive or restrictive order from a public agency?"
          name="exA_lit_c1_injunctive"
          options={["Yes", "No"]}
          value={(data.exA_lit_c1_injunctive as string) || ""}
          onChange={(v) => update("exA_lit_c1_injunctive", v)}
        />
        <RadioGroup
          label="C.2: Are you subject to a securities association or exchange suspension order?"
          name="exA_lit_c2_suspension"
          options={["Yes", "No"]}
          value={(data.exA_lit_c2_suspension as string) || ""}
          onChange={(v) => update("exA_lit_c2_suspension", v)}
        />
      </div>

      {/* Conditional details if any "Yes" */}
      {anyLitigationYes && (
        <div className="conditional-enter space-y-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <p className="text-sm font-semibold text-yellow-400">
            Since you answered &quot;Yes&quot; to one or more questions above,
            please provide the following details:
          </p>
          <Input
            label="Names of all parties involved"
            value={(data.exA_lit_parties as string) || ""}
            onChange={(e) => update("exA_lit_parties", e.target.value)}
          />
          <Input
            label="Nature of the case"
            value={(data.exA_lit_nature as string) || ""}
            onChange={(e) => update("exA_lit_nature", e.target.value)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Court where filed"
              value={(data.exA_lit_court as string) || ""}
              onChange={(e) => update("exA_lit_court", e.target.value)}
            />
            <Input
              label="Filing date"
              type="date"
              value={(data.exA_lit_filing_date as string) || ""}
              onChange={(e) => update("exA_lit_filing_date", e.target.value)}
            />
          </div>
          <Input
            label="Docket number"
            value={(data.exA_lit_docket as string) || ""}
            onChange={(e) => update("exA_lit_docket", e.target.value)}
          />
          <Input
            label="Relationship of party to defendant"
            value={(data.exA_lit_relationship as string) || ""}
            onChange={(e) => update("exA_lit_relationship", e.target.value)}
          />
          <Textarea
            label="Status of pending actions"
            value={(data.exA_lit_status as string) || ""}
            onChange={(e) => update("exA_lit_status", e.target.value)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Conviction/judgment date"
              type="date"
              value={(data.exA_lit_judgment_date as string) || ""}
              onChange={(e) => update("exA_lit_judgment_date", e.target.value)}
            />
            <Textarea
              label="Penalties, damages, or settlement terms"
              value={(data.exA_lit_penalties as string) || ""}
              onChange={(e) => update("exA_lit_penalties", e.target.value)}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Input
              label="Counsel name"
              value={(data.exA_lit_counsel_name as string) || ""}
              onChange={(e) => update("exA_lit_counsel_name", e.target.value)}
            />
            <Input
              label="Counsel phone"
              type="tel"
              value={(data.exA_lit_counsel_phone as string) || ""}
              onChange={(e) => update("exA_lit_counsel_phone", e.target.value)}
            />
            <Input
              label="Counsel address"
              value={(data.exA_lit_counsel_address as string) || ""}
              onChange={(e) =>
                update("exA_lit_counsel_address", e.target.value)
              }
            />
          </div>
          <FileUpload
            label="Upload court pleadings (if applicable)"
            name="exA_lit_pleadings"
            onFileChange={(file) => update("exA_lit_pleadings", file)}
          />
        </div>
      )}

      {/* ---- SECTION III: BANKRUPTCY ---- */}
      <div className="mb-2 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Section III: Bankruptcy
        </span>
      </div>

      <div className="space-y-3">
        <RadioGroup
          label="Have you filed a bankruptcy petition in the last 10 years?"
          name="exA_bank_filed"
          options={["Yes", "No"]}
          value={(data.exA_bank_filed as string) || ""}
          onChange={(v) => update("exA_bank_filed", v)}
        />
        <RadioGroup
          label="Have you obtained a discharge of debts under bankruptcy?"
          name="exA_bank_discharge"
          options={["Yes", "No"]}
          value={(data.exA_bank_discharge as string) || ""}
          onChange={(v) => update("exA_bank_discharge", v)}
        />
        <RadioGroup
          label="Were you a principal officer of a company or partner in a partnership that filed bankruptcy?"
          name="exA_bank_officer"
          options={["Yes", "No"]}
          value={(data.exA_bank_officer as string) || ""}
          onChange={(v) => update("exA_bank_officer", v)}
        />
      </div>

      {(data.exA_bank_filed === "Yes" ||
        data.exA_bank_discharge === "Yes" ||
        data.exA_bank_officer === "Yes") && (
        <div className="conditional-enter space-y-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <p className="text-sm font-semibold text-yellow-400">
            Please provide bankruptcy details:
          </p>
          <Input
            label="Name of person/company filing the petition"
            value={(data.exA_bank_name as string) || ""}
            onChange={(e) => update("exA_bank_name", e.target.value)}
          />
          <Input
            label="Party's relationship to the Franchisor"
            value={(data.exA_bank_relationship as string) || ""}
            onChange={(e) => update("exA_bank_relationship", e.target.value)}
          />
          <Textarea
            label="Court, case name, number, and relevant dates"
            value={(data.exA_bank_court as string) || ""}
            onChange={(e) => update("exA_bank_court", e.target.value)}
          />
          <Textarea
            label="Material facts, circumstances, and discharge date"
            value={(data.exA_bank_facts as string) || ""}
            onChange={(e) => update("exA_bank_facts", e.target.value)}
          />
        </div>
      )}

      {/* ---- SECTION IV: CERTIFICATION ---- */}
      <div className="mb-2 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Section IV: Certification
        </span>
      </div>

      <CheckboxGroup
        label=""
        options={[
          "I certify that the foregoing information is true, correct, and complete to the best of my knowledge.",
        ]}
        values={(data.exA_certification as string[]) || []}
        onChange={(v) => update("exA_certification", v)}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Input
          label="Print Name"
          value={(data.exA_print_name as string) || ""}
          onChange={(e) => update("exA_print_name", e.target.value)}
        />
        <Input
          label="Signature (type full name)"
          value={(data.exA_signature as string) || ""}
          onChange={(e) => update("exA_signature", e.target.value)}
          helperText="Type your full legal name as your electronic signature"
        />
        <Input
          label="Date"
          type="date"
          value={(data.exA_date as string) || ""}
          onChange={(e) => update("exA_date", e.target.value)}
        />
      </div>
    </SectionWrapper>
  );
}
