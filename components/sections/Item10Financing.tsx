"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

export function Item10Financing({ data, update }: Props) {
  return (
    <SectionWrapper itemNumber="Item 10" title="Financing">
      {/* Q43 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor/affiliate offer financing to the franchisee?"
          name="q43_financing"
          options={["Yes", "No"]}
          value={(data.q43_financing as string) || ""}
          onChange={(v) => update("q43_financing", v)}
        />
        {data.q43_financing === "Yes" && (
          <div className="conditional-enter space-y-4 border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="What financing will be offered?"
              value={(data.q43_financing_what as string) || ""}
              onChange={(e) => update("q43_financing_what", e.target.value)}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <Input
                label="Down payment?"
                value={(data.q43_down_payment as string) || ""}
                onChange={(e) => update("q43_down_payment", e.target.value)}
                placeholder="$0.00 or %"
              />
              <Input
                label="Duration?"
                value={(data.q43_duration as string) || ""}
                onChange={(e) => update("q43_duration", e.target.value)}
                placeholder="e.g. 5 years"
              />
              <Input
                label="Interest rate?"
                value={(data.q43_interest as string) || ""}
                onChange={(e) => update("q43_interest", e.target.value)}
                placeholder="e.g. 8%"
              />
            </div>
          </div>
        )}
      </div>

      {/* Q44 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are there written arrangements with a lender for franchisee financing?"
          name="q44_lender"
          options={["Yes", "No"]}
          value={(data.q44_lender as string) || ""}
          onChange={(v) => update("q44_lender", v)}
        />
        {data.q44_lender === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please describe"
              value={(data.q44_lender_desc as string) || ""}
              onChange={(e) => update("q44_lender_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q45 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are there arrangements where the Franchisor receives a benefit from a lender?"
          name="q45_lender_benefit"
          options={["Yes", "No"]}
          value={(data.q45_lender_benefit as string) || ""}
          onChange={(v) => update("q45_lender_benefit", v)}
        />
        {data.q45_lender_benefit === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please describe"
              value={(data.q45_benefit_desc as string) || ""}
              onChange={(e) => update("q45_benefit_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q46 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Does the Franchisor guarantee franchisee notes, leases, or agreements?"
          name="q46_guarantee"
          options={["Yes", "No"]}
          value={(data.q46_guarantee as string) || ""}
          onChange={(v) => update("q46_guarantee", v)}
        />
        {data.q46_guarantee === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please describe"
              value={(data.q46_guarantee_desc as string) || ""}
              onChange={(e) => update("q46_guarantee_desc", e.target.value)}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
