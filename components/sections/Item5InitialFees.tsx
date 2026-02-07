"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

export function Item5InitialFees({ data, update }: Props) {
  return (
    <SectionWrapper itemNumber="Item 5" title="Initial Fees">
      {/* Q22 */}
      <Input
        label="What will be the amount of initial franchise fee for a single franchised business?"
        type="number"
        value={(data.q22_initial_fee as string) || ""}
        onChange={(e) => update("q22_initial_fee", e.target.value)}
        placeholder="$0.00"
      />

      {/* Q23 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the initial franchise fee be payable in lump sum or installments?"
          name="q23_payment_type"
          options={[
            "Lump Sum Only",
            "Installment Payments",
            "Other Financing Options",
          ]}
          value={(data.q23_payment_type as string) || ""}
          onChange={(v) => update("q23_payment_type", v)}
        />
        {(data.q23_payment_type === "Installment Payments" ||
          data.q23_payment_type === "Other Financing Options") && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Provide payment terms"
              value={(data.q23_payment_terms as string) || ""}
              onChange={(e) => update("q23_payment_terms", e.target.value)}
              placeholder="Describe installment schedule, amounts, and any conditions"
            />
          </div>
        )}
      </div>

      {/* Q24 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the initial franchise fee be refundable?"
          name="q24_refundable"
          options={["Yes", "No"]}
          value={(data.q24_refundable as string) || ""}
          onChange={(v) => update("q24_refundable", v)}
        />
        {data.q24_refundable === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Under what circumstances?"
              value={(data.q24_refund_conditions as string) || ""}
              onChange={(e) => update("q24_refund_conditions", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q25 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the same initial franchise fee be charged to all franchisees?"
          name="q25_same_fee"
          options={["Yes", "No"]}
          value={(data.q25_same_fee as string) || ""}
          onChange={(v) => update("q25_same_fee", v)}
        />
        {data.q25_same_fee === "No" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe the method or formula for determining the fee"
              value={(data.q25_fee_method as string) || ""}
              onChange={(e) => update("q25_fee_method", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q26 */}
      <RadioGroup
        label="Do you plan to offer a Multi-Unit Development Agreement?"
        name="q26_multi_unit"
        options={["Yes", "No"]}
        value={(data.q26_multi_unit as string) || ""}
        onChange={(v) => update("q26_multi_unit", v)}
      />

      {/* Q27 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor/affiliate act as a supplier of goods/services to the franchisee?"
          name="q27_supplier"
          options={["Yes", "No"]}
          value={(data.q27_supplier as string) || ""}
          onChange={(v) => update("q27_supplier", v)}
        />
        {data.q27_supplier === "Yes" && (
          <div className="conditional-enter space-y-4 border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Who will be the supplier?"
              value={(data.q27_supplier_who as string) || ""}
              onChange={(e) => update("q27_supplier_who", e.target.value)}
            />
            <Textarea
              label="What goods/services will be supplied?"
              value={(data.q27_supplier_what as string) || ""}
              onChange={(e) => update("q27_supplier_what", e.target.value)}
            />
            <Input
              label="Initial cost?"
              value={(data.q27_supplier_cost as string) || ""}
              onChange={(e) => update("q27_supplier_cost", e.target.value)}
              placeholder="$0.00"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
