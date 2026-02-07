"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { CheckboxGroup } from "@/components/ui/CheckboxGroup";
import { FileUpload } from "@/components/ui/FileUpload";
import { RepeatingRows } from "@/components/ui/RepeatingRows";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

const PRE_OPENING_SERVICES = [
  "Site location assistance",
  "Obtaining permits and licenses",
  "Construction/remodeling of franchised location",
  "Hiring and training of employees",
  "Installing fixtures, furnishings and equipment",
  "Furnishing plans and specifications",
  "Pre-opening marketing and advertising",
  "Delivering/installing signs, fixtures, opening inventories",
  "Providing supplier names and contact info",
  "Management assistance at opening",
  "Assistance purchasing initial goods/supplies",
  "Furnishing bookkeeping/accounting system",
  "Others (describe below)",
];

const POST_OPENING_SERVICES = [
  "Refresher training",
  "Continuing management assistance",
  "Promotional and advertising programs",
  "Sales of goods and services",
  "Establishing/suggesting pricing",
  "Hiring and training employees",
  "Helping resolve operating problems",
  "Others (describe below)",
];

export function Item11Assistance({ data, update }: Props) {
  return (
    <SectionWrapper
      itemNumber="Item 11"
      title="Franchisor's Assistance, Advertising, Computer Systems and Training"
    >
      {/* Q47 - Pre-opening services */}
      <div className="space-y-4">
        <CheckboxGroup
          label="Identify services the Franchisor will provide PRIOR to opening"
          options={PRE_OPENING_SERVICES}
          values={(data.q47_pre_opening as string[]) || []}
          onChange={(v) => update("q47_pre_opening", v)}
          columns={2}
        />
        {((data.q47_pre_opening as string[]) || []).includes(
          "Others (describe below)",
        ) && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe other pre-opening services"
              value={(data.q47_pre_opening_other as string) || ""}
              onChange={(e) => update("q47_pre_opening_other", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q48 - Post-opening services */}
      <div className="space-y-4">
        <CheckboxGroup
          label="Identify services the Franchisor will provide AFTER opening"
          options={POST_OPENING_SERVICES}
          values={(data.q48_post_opening as string[]) || []}
          onChange={(v) => update("q48_post_opening", v)}
          columns={2}
        />
        {((data.q48_post_opening as string[]) || []).includes(
          "Others (describe below)",
        ) && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe other post-opening services"
              value={(data.q48_post_opening_other as string) || ""}
              onChange={(e) => update("q48_post_opening_other", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q49 */}
      <Input
        label="Estimated time between signing the franchise agreement and opening?"
        value={(data.q49_time_to_open as string) || ""}
        onChange={(e) => update("q49_time_to_open", e.target.value)}
        placeholder="e.g. 3-6 months"
      />

      {/* Q50 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will franchisees be required to contribute to an advertising fund?"
          name="q50_ad_fund"
          options={["Yes", "No"]}
          value={(data.q50_ad_fund as string) || ""}
          onChange={(v) => update("q50_ad_fund", v)}
        />
        {data.q50_ad_fund === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Fee amount or percentage?"
              value={(data.q50_ad_fund_amount as string) || ""}
              onChange={(e) => update("q50_ad_fund_amount", e.target.value)}
              placeholder="e.g. 2% of gross revenue"
            />
          </div>
        )}
      </div>

      {/* Q51 */}
      <RadioGroup
        label="Will Franchisor/affiliate-owned locations contribute to the advertising fund equally?"
        name="q51_equal_contribution"
        options={["Yes", "No"]}
        value={(data.q51_equal_contribution as string) || ""}
        onChange={(v) => update("q51_equal_contribution", v)}
      />

      {/* Q52 */}
      <RadioGroup
        label="Will the Franchisor use the advertising fund to solicit franchise sales?"
        name="q52_ad_fund_solicit"
        options={["Yes", "No"]}
        value={(data.q52_ad_fund_solicit as string) || ""}
        onChange={(v) => update("q52_ad_fund_solicit", v)}
      />

      {/* Q53 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Does the Franchisor require franchisees to use specific computer systems (POS, CRM, etc.)?"
          name="q53_computer"
          options={["Yes", "No"]}
          value={(data.q53_computer as string) || ""}
          onChange={(v) => update("q53_computer", v)}
        />
        {data.q53_computer === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe the computer systems requirement"
              value={(data.q53_computer_desc as string) || ""}
              onChange={(e) => update("q53_computer_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q54 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Does the Franchisor/affiliate/third party provide maintenance, repairs, or upgrades for computer systems?"
          name="q54_maintenance"
          options={["Yes", "No"]}
          value={(data.q54_maintenance as string) || ""}
          onChange={(v) => update("q54_maintenance", v)}
        />
        {data.q54_maintenance === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please provide details"
              value={(data.q54_maintenance_desc as string) || ""}
              onChange={(e) => update("q54_maintenance_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q55 */}
      <Input
        label="Annual costs for computer maintenance, support, and upgrades? (estimate or range)"
        value={(data.q55_annual_cost as string) || ""}
        onChange={(e) => update("q55_annual_cost", e.target.value)}
        placeholder="e.g. $500 - $2,000 per year"
      />

      {/* Q56 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the Franchisor have independent access to the franchisee's computer system?"
          name="q56_access"
          options={["Yes", "No"]}
          value={(data.q56_access as string) || ""}
          onChange={(v) => update("q56_access", v)}
        />
        {data.q56_access === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please provide details"
              value={(data.q56_access_desc as string) || ""}
              onChange={(e) => update("q56_access_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q57 */}
      <FileUpload
        label="Please provide the table of contents to the operations manual"
        name="q57_manual_toc"
        onFileChange={(file) => update("q57_manual_toc", file)}
        helperText="Accepted formats: PDF, DOC, DOCX"
      />

      {/* Q58 - Training Program */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <h3 className="text-lg font-semibold text-white">
          Training Program Description
        </h3>
        <Textarea
          label="A) Where will training be conducted? (Location)"
          value={(data.q58_location as string) || ""}
          onChange={(e) => update("q58_location", e.target.value)}
          placeholder="Training location(s)"
        />
        <Textarea
          label="B) How often will training be conducted?"
          value={(data.q58_frequency as string) || ""}
          onChange={(e) => update("q58_frequency", e.target.value)}
          placeholder="e.g. Monthly, Quarterly, As needed"
        />
        <Textarea
          label="C) Person in charge of training program and their experience"
          value={(data.q58_person as string) || ""}
          onChange={(e) => update("q58_person", e.target.value)}
          placeholder="Name, title, years of experience"
        />
      </div>

      {/* Q59 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will the franchisee be charged a training fee?"
          name="q59_training_fee"
          options={["Yes", "No"]}
          value={(data.q59_training_fee as string) || ""}
          onChange={(v) => update("q59_training_fee", v)}
        />
        {data.q59_training_fee === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe the charges"
              value={(data.q59_training_fee_desc as string) || ""}
              onChange={(e) => update("q59_training_fee_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q60 */}
      <Textarea
        label="Who is required to attend initial training?"
        value={(data.q60_attendees as string) || ""}
        onChange={(e) => update("q60_attendees", e.target.value)}
        placeholder="e.g. Franchise owner, general manager, key staff"
      />

      {/* Q61 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Is there a maximum number of people that can attend training?"
          name="q61_max_trainees"
          options={["Yes", "No"]}
          value={(data.q61_max_trainees as string) || ""}
          onChange={(v) => update("q61_max_trainees", v)}
        />
        {data.q61_max_trainees === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="How many?"
              type="number"
              value={(data.q61_max_count as string) || ""}
              onChange={(e) => update("q61_max_count", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q62 - Training Schedule Table */}
      <RepeatingRows
        label="Training Schedule — please detail all training subjects"
        columns={[
          {
            key: "subject",
            label: "Subject",
            placeholder: "Training topic",
            width: "30%",
          },
          {
            key: "classroom",
            label: "Hours of Classroom Training",
            placeholder: "0",
            type: "number",
          },
          {
            key: "on_job",
            label: "Hours of On-the-Job Training",
            placeholder: "0",
            type: "number",
          },
          { key: "location", label: "Location", placeholder: "Where" },
        ]}
        rows={(data.q62_training as Record<string, string>[]) || []}
        onChange={(rows) => update("q62_training", rows)}
        addLabel="Add Training Subject"
      />
    </SectionWrapper>
  );
}
