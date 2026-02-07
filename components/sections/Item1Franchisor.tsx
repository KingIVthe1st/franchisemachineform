"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { FileUpload } from "@/components/ui/FileUpload";
import { RepeatingRows } from "@/components/ui/RepeatingRows";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

export function Item1Franchisor({ data, update }: Props) {
  return (
    <SectionWrapper
      itemNumber="Item 1"
      title="The Franchisor, and Any Parent, Predecessors, and Affiliates"
    >
      {/* Q1 */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Input
          label="Name of the entity that will serve as the Franchisor?"
          value={(data.q1_franchisor_name as string) || ""}
          onChange={(e) => update("q1_franchisor_name", e.target.value)}
          placeholder="Entity name"
        />
        <Input
          label="State of formation?"
          value={(data.q1_state as string) || ""}
          onChange={(e) => update("q1_state", e.target.value)}
          placeholder="e.g. Delaware"
        />
        <Input
          label="Date entity was formed?"
          type="date"
          value={(data.q1_date_formed as string) || ""}
          onChange={(e) => update("q1_date_formed", e.target.value)}
        />
      </div>

      {/* Q2 */}
      <Input
        label="What is the Franchisor's general business email address?"
        type="email"
        value={(data.q2_email as string) || ""}
        onChange={(e) => update("q2_email", e.target.value)}
        placeholder="email@company.com"
      />

      {/* Q3 */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Address"
          value={(data.q3_address as string) || ""}
          onChange={(e) => update("q3_address", e.target.value)}
          placeholder="Full business address"
        />
        <Input
          label="Telephone"
          type="tel"
          value={(data.q3_telephone as string) || ""}
          onChange={(e) => update("q3_telephone", e.target.value)}
          placeholder="(555) 555-5555"
        />
      </div>

      {/* Q4 */}
      <Input
        label="What is the Franchisor's primary website?"
        type="url"
        value={(data.q4_website as string) || ""}
        onChange={(e) => update("q4_website", e.target.value)}
        placeholder="https://www.example.com"
      />

      {/* Q5 */}
      <FileUpload
        label="Please send us a JPEG of your primary logo"
        name="q5_logo"
        accept="image/*"
        onFileChange={(file) => update("q5_logo", file)}
      />

      {/* Q6 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Does the Franchisor have a parent company?"
          name="q6_parent"
          options={["Yes", "No"]}
          value={(data.q6_parent as string) || ""}
          onChange={(v) => update("q6_parent", v)}
        />
        {data.q6_parent === "Yes" && (
          <div className="conditional-enter space-y-4 border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Name of parent company"
              value={(data.q6_parent_name as string) || ""}
              onChange={(e) => update("q6_parent_name", e.target.value)}
            />
            <Input
              label="State of formation"
              value={(data.q6_parent_state as string) || ""}
              onChange={(e) => update("q6_parent_state", e.target.value)}
            />
            <Input
              label="Principal Business Address"
              value={(data.q6_parent_address as string) || ""}
              onChange={(e) => update("q6_parent_address", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q7 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Did the Franchisor have a predecessor company?"
          name="q7_predecessor"
          options={["Yes", "No"]}
          value={(data.q7_predecessor as string) || ""}
          onChange={(v) => update("q7_predecessor", v)}
        />
        {data.q7_predecessor === "Yes" && (
          <div className="conditional-enter space-y-4 border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Name of predecessor"
              value={(data.q7_predecessor_name as string) || ""}
              onChange={(e) => update("q7_predecessor_name", e.target.value)}
            />
            <Input
              label="Date of Asset Purchase"
              type="date"
              value={(data.q7_asset_date as string) || ""}
              onChange={(e) => update("q7_asset_date", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q9 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Did the predecessor conduct a business of the type to be operated by franchisee?"
          name="q9_predecessor_business"
          options={["Yes", "No"]}
          value={(data.q9_predecessor_business as string) || ""}
          onChange={(v) => update("q9_predecessor_business", v)}
        />
        {data.q9_predecessor_business === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Time period (month/year)"
              value={(data.q9_time_period as string) || ""}
              onChange={(e) => update("q9_time_period", e.target.value)}
              placeholder="e.g. January 2020"
            />
          </div>
        )}
      </div>

      {/* Q10 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Did predecessor offer franchises for same type of business?"
          name="q10_predecessor_franchises"
          options={["Yes", "No"]}
          value={(data.q10_predecessor_franchises as string) || ""}
          onChange={(v) => update("q10_predecessor_franchises", v)}
        />
        {data.q10_predecessor_franchises === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Time period (month/year)"
              value={(data.q10_time_period as string) || ""}
              onChange={(e) => update("q10_time_period", e.target.value)}
              placeholder="e.g. March 2019"
            />
          </div>
        )}
      </div>

      {/* Q11 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Did predecessor offer franchises in other lines of business?"
          name="q11_other_lines"
          options={["Yes", "No"]}
          value={(data.q11_other_lines as string) || ""}
          onChange={(v) => update("q11_other_lines", v)}
        />
        {data.q11_other_lines === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Describe such other lines"
              value={(data.q11_other_lines_desc as string) || ""}
              onChange={(e) => update("q11_other_lines_desc", e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Q12 */}
      <Input
        label="How many franchised units were sold by predecessor?"
        type="number"
        value={(data.q12_units_sold as string) || ""}
        onChange={(e) => update("q12_units_sold", e.target.value)}
        placeholder="0"
      />

      {/* Q13 */}
      <Input
        label="Length of time predecessor offered franchises?"
        value={(data.q13_time_length as string) || ""}
        onChange={(e) => update("q13_time_length", e.target.value)}
        placeholder="e.g. 5 years"
      />

      {/* Q14 */}
      <RepeatingRows
        label="List all affiliate companies"
        columns={[
          {
            key: "name",
            label: "Name of Affiliate",
            placeholder: "Company name",
          },
          {
            key: "state",
            label: "State of Incorporation",
            placeholder: "State",
          },
          {
            key: "address",
            label: "Principal Place of Business Address",
            placeholder: "Address",
          },
        ]}
        rows={(data.q14_affiliates as Record<string, string>[]) || []}
        onChange={(rows) => update("q14_affiliates", rows)}
        addLabel="Add Affiliate"
      />

      {/* Q15 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Does any affiliate own a location/corporate unit?"
          name="q15_affiliate_locations"
          options={["Yes", "No"]}
          value={(data.q15_affiliate_locations as string) || ""}
          onChange={(v) => update("q15_affiliate_locations", v)}
        />
        {data.q15_affiliate_locations === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <RepeatingRows
              label="Affiliate-owned locations"
              columns={[
                { key: "name", label: "Name", placeholder: "Name" },
                { key: "state", label: "State", placeholder: "State" },
                { key: "address", label: "Address", placeholder: "Address" },
                {
                  key: "opening_date",
                  label: "Opening Date",
                  placeholder: "MM/YYYY",
                },
              ]}
              rows={(data.q15_locations as Record<string, string>[]) || []}
              onChange={(rows) => update("q15_locations", rows)}
              addLabel="Add Location"
            />
          </div>
        )}
      </div>

      {/* Q16 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Will Franchisor or affiliate provide products/services to franchisees?"
          name="q16_provide_products"
          options={["Yes", "No"]}
          value={(data.q16_provide_products as string) || ""}
          onChange={(v) => update("q16_provide_products", v)}
        />
        {data.q16_provide_products === "Yes" && (
          <div className="conditional-enter space-y-4 border-l-2 border-brand-cyan/30 pl-5">
            <Input
              label="Name of supplier/affiliate"
              value={(data.q16_supplier_name as string) || ""}
              onChange={(e) => update("q16_supplier_name", e.target.value)}
              placeholder="Entity name"
            />
            <Textarea
              label="Specific products/services provided"
              value={(data.q16_products_desc as string) || ""}
              onChange={(e) => update("q16_products_desc", e.target.value)}
              placeholder="Describe the products or services"
            />
          </div>
        )}
      </div>

      {/* Q17 */}
      <Textarea
        label="Describe the general market for the product or service"
        value={(data.q17_market as string) || ""}
        onChange={(e) => update("q17_market", e.target.value)}
        placeholder="Describe target market, industry trends, competition, etc."
      />

      {/* Q18 */}
      <div className="space-y-4 rounded-lg border border-border p-5">
        <RadioGroup
          label="Are there laws/regulations specific to the industry?"
          name="q18_regulations"
          options={["Yes", "No"]}
          value={(data.q18_regulations as string) || ""}
          onChange={(v) => update("q18_regulations", v)}
        />
        {data.q18_regulations === "Yes" && (
          <div className="conditional-enter border-l-2 border-brand-cyan/30 pl-5">
            <Textarea
              label="Please describe"
              value={(data.q18_regulations_desc as string) || ""}
              onChange={(e) => update("q18_regulations_desc", e.target.value)}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
