"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

export function Item8Restrictions({ data, update }: Props) {
  return (
    <SectionWrapper
      itemNumber="Item 8"
      title="Restrictions on Sources of Products and Services"
    >
      {/* Q33 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor/affiliate act as a supplier of products/services to franchisees?"
          name="q33_supplier"
          options={["Yes", "No"]}
          value={(data.q33_supplier as string) || ""}
          onChange={(v) => update("q33_supplier", v)}
        />
        {data.q33_supplier === "Yes" && (
          <div className="conditional-enter space-y-4 border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Who will supply?"
              value={(data.q33_who as string) || ""}
              onChange={(e) => update("q33_who", e.target.value)}
            />
            <Textarea
              label="What goods/services?"
              value={(data.q33_what as string) || ""}
              onChange={(e) => update("q33_what", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q34 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor/affiliate be the exclusive supplier of any products/services?"
          name="q34_exclusive"
          options={["Yes", "No"]}
          value={(data.q34_exclusive as string) || ""}
          onChange={(v) => update("q34_exclusive", v)}
        />
        {data.q34_exclusive === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe the product/service"
              value={(data.q34_desc as string) || ""}
              onChange={(e) => update("q34_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q35 */}
      <Input
        label="Name each officer owning an interest in any supplier"
        value={(data.q35_officers as string) || ""}
        onChange={(e) => update("q35_officers", e.target.value)}
        placeholder="Officer names"
      />

      {/* Q36 */}
      <Textarea
        label="How are suppliers evaluated, approved, and/or disapproved?"
        value={(data.q36_supplier_eval as string) || ""}
        onChange={(e) => update("q36_supplier_eval", e.target.value)}
        placeholder="Describe the evaluation and approval process"
      />

      {/* Q37 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are fees payable to the Franchisor for supplier approval?"
          name="q37_approval_fees"
          options={["Yes", "No"]}
          value={(data.q37_approval_fees as string) || ""}
          onChange={(v) => update("q37_approval_fees", v)}
        />
        {data.q37_approval_fees === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="What is the fee?"
              value={(data.q37_fee_amount as string) || ""}
              onChange={(e) => update("q37_fee_amount", e.target.value)}
              placeholder="$0.00"
            />
          </div>
        )}
      </div>

      {/* Q38 */}
      <Input
        label="Estimated percentage of initial investment to Franchisor/affiliates/specified vendors?"
        type="number"
        value={(data.q38_initial_pct as string) || ""}
        onChange={(e) => update("q38_initial_pct", e.target.value)}
        placeholder="0%"
      />

      {/* Q39 */}
      <Input
        label="Estimated percentage of ongoing operations cost to Franchisor/affiliates/vendors?"
        type="number"
        value={(data.q39_ongoing_pct as string) || ""}
        onChange={(e) => update("q39_ongoing_pct", e.target.value)}
        placeholder="0%"
      />

      {/* Q40 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor/affiliate make revenue from franchisee purchases?"
          name="q40_revenue"
          options={["Yes", "No"]}
          value={(data.q40_revenue as string) || ""}
          onChange={(v) => update("q40_revenue", v)}
        />
        {data.q40_revenue === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please describe"
              value={(data.q40_revenue_desc as string) || ""}
              onChange={(e) => update("q40_revenue_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q41 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor/affiliate obtain discounts/rebates from suppliers?"
          name="q41_discounts"
          options={["Yes", "No"]}
          value={(data.q41_discounts as string) || ""}
          onChange={(v) => update("q41_discounts", v)}
        />
        {data.q41_discounts === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please describe"
              value={(data.q41_discounts_desc as string) || ""}
              onChange={(e) => update("q41_discounts_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q42 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor/affiliate enter purchasing/distribution arrangements?"
          name="q42_purchasing"
          options={["Yes", "No"]}
          value={(data.q42_purchasing as string) || ""}
          onChange={(v) => update("q42_purchasing", v)}
        />
        {data.q42_purchasing === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please describe"
              value={(data.q42_purchasing_desc as string) || ""}
              onChange={(e) => update("q42_purchasing_desc", e.target.value)}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
