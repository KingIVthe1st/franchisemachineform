"use client";

import { FileUpload } from "@/components/ui/FileUpload";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Props {
  data: Record<string, unknown>;
  update: (key: string, value: unknown) => void;
}

export function Items2to4({ data, update }: Props) {
  void data;
  return (
    <SectionWrapper
      itemNumber="Items 2–4"
      title="Business Experience, Litigation & Bankruptcy"
      subtitle="Please upload the completed Management Questionnaire forms for each of the following items. These exhibits collect detailed background information on key personnel."
    >
      {/* Q19 - Item 2 */}
      <div className="space-y-3 rounded-lg border border-border p-5">
        <div className="mb-2">
          <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
            Item 2: Business Experience
          </span>
        </div>
        <FileUpload
          label="Please upload completed Management Questionnaire (Exhibit A) for Item 2"
          name="q19_exhibit_a"
          helperText="Accepted formats: PDF, DOC, DOCX, XLS, XLSX"
          onFileChange={(file) => update("q19_exhibit_a", file)}
        />
      </div>

      {/* Q20 - Item 3 */}
      <div className="space-y-3 rounded-lg border border-border p-5">
        <div className="mb-2">
          <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
            Item 3: Litigation
          </span>
        </div>
        <FileUpload
          label="Please upload Exhibit A for litigation-related information for Item 3"
          name="q20_litigation"
          helperText="Accepted formats: PDF, DOC, DOCX, XLS, XLSX"
          onFileChange={(file) => update("q20_litigation", file)}
        />
      </div>

      {/* Q21 - Item 4 */}
      <div className="space-y-3 rounded-lg border border-border p-5">
        <div className="mb-2">
          <span className="inline-block rounded bg-brand-cyan/10 px-2 py-0.5 text-xs font-semibold text-brand-cyan">
            Item 4: Bankruptcy
          </span>
        </div>
        <FileUpload
          label="Please upload Exhibit A for bankruptcy-related information for Item 4"
          name="q21_bankruptcy"
          helperText="Accepted formats: PDF, DOC, DOCX, XLS, XLSX"
          onFileChange={(file) => update("q21_bankruptcy", file)}
        />
      </div>
    </SectionWrapper>
  );
}
