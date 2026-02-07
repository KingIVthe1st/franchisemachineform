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

export function Items12to14({ data, update }: Props) {
  return (
    <SectionWrapper
      itemNumber="Items 12–14"
      title="Territory, Trademarks, Patents & Copyrights"
    >
      {/* --- ITEM 12: TERRITORY --- */}
      <div className="mb-4">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 12: Territory
        </span>
      </div>

      {/* Q63 */}
      <RadioGroup
        label="Will the franchised location be approved by the Franchisor?"
        name="q63_location_approval"
        options={["Yes", "No"]}
        value={(data.q63_location_approval as string) || ""}
        onChange={(v) => update("q63_location_approval", v)}
      />

      {/* Q64 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the franchisee have a protected territory?"
          name="q64_protected"
          options={["Yes", "No"]}
          value={(data.q64_protected as string) || ""}
          onChange={(v) => update("q64_protected", v)}
        />
        {data.q64_protected === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="How will the territory be determined?"
              value={(data.q64_territory_method as string) || ""}
              onChange={(e) => update("q64_territory_method", e.target.value)}
              placeholder="e.g. radius, population, zip codes"
            />
          </div>
        )}
      </div>

      {/* Q65 */}
      <Input
        label="Average or minimum territory size offered?"
        value={(data.q65_territory_size as string) || ""}
        onChange={(e) => update("q65_territory_size", e.target.value)}
        placeholder="e.g. 3-mile radius, 50,000 population"
      />

      {/* Q66 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are there conditions to maintaining the territory (sales volume, penetration, etc.)?"
          name="q66_territory_conditions"
          options={["Yes", "No"]}
          value={(data.q66_territory_conditions as string) || ""}
          onChange={(v) => update("q66_territory_conditions", v)}
        />
        {data.q66_territory_conditions === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please provide details"
              value={(data.q66_conditions_desc as string) || ""}
              onChange={(e) => update("q66_conditions_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* --- ITEM 13: TRADEMARKS --- */}
      <div className="mb-4 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 13: Trademarks
        </span>
      </div>

      {/* Q67 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Have you obtained registration or filed for all primary trademarks?"
          name="q67_trademarks"
          options={["Yes", "No"]}
          value={(data.q67_trademarks as string) || ""}
          onChange={(v) => update("q67_trademarks", v)}
        />
        {data.q67_trademarks === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <RepeatingRows
              label="List all trademarks"
              columns={[
                {
                  key: "description",
                  label: "Description",
                  placeholder: "Trademark name/description",
                  width: "40%",
                },
                {
                  key: "number",
                  label: "Registration/Application Number",
                  placeholder: "Number",
                },
                { key: "owner", label: "Owner", placeholder: "Owner name" },
              ]}
              rows={(data.q67_trademark_list as Record<string, string>[]) || []}
              onChange={(rows) => update("q67_trademark_list", rows)}
              addLabel="Add Trademark"
            />
          </div>
        )}
      </div>

      {/* --- ITEM 14: PATENTS, COPYRIGHTS, PROPRIETARY INFORMATION --- */}
      <div className="mb-4 mt-10 border-t border-border pt-8">
        <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
          Item 14: Patents, Copyrights & Proprietary Information
        </span>
      </div>

      {/* Q68 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Does the Franchisor own patent rights or have pending patent applications?"
          name="q68_patents"
          options={["Yes", "No"]}
          value={(data.q68_patents as string) || ""}
          onChange={(v) => update("q68_patents", v)}
        />
        {data.q68_patents === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Provide details (number, date, duration, title, type, subject matter)"
              value={(data.q68_patents_desc as string) || ""}
              onChange={(e) => update("q68_patents_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q69 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are any copyrights filed with the US Register of Copyrights?"
          name="q69_copyrights"
          options={["Yes", "No"]}
          value={(data.q69_copyrights as string) || ""}
          onChange={(v) => update("q69_copyrights", v)}
        />
        {data.q69_copyrights === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Provide details (subject matter, registration number/date)"
              value={(data.q69_copyrights_desc as string) || ""}
              onChange={(e) => update("q69_copyrights_desc", e.target.value)}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
