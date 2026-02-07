/**
 * Builds a professionally formatted HTML email body from the FDD questionnaire data.
 * Organized by FDD Item sections with human-readable labels.
 */

type FormData = Record<string, unknown>;

// ─── Label Mapping ──────────────────────────────────────────

const FIELD_LABELS: Record<string, string> = {
  // Item 1
  q1_franchisor_name: "Franchisor Entity Name",
  q1_state: "State of Formation",
  q1_date_formed: "Date Entity Was Formed",
  q2_email: "General Business Email",
  q3_address: "Business Address",
  q3_telephone: "Telephone",
  q4_website: "Primary Website",
  q6_parent: "Has Parent Company?",
  q6_parent_name: "Parent Company Name",
  q6_parent_state: "Parent State of Formation",
  q6_parent_address: "Parent Principal Address",
  q7_predecessor: "Had Predecessor Company?",
  q7_predecessor_name: "Predecessor Name",
  q7_asset_date: "Date of Asset Purchase",
  q9_predecessor_business: "Predecessor Conducted Same Business?",
  q9_time_period: "Time Period",
  q10_predecessor_franchises: "Predecessor Offered Franchises?",
  q10_time_period: "Time Period",
  q11_other_lines: "Predecessor Offered Other Lines?",
  q11_other_lines_desc: "Other Lines Description",
  q12_units_sold: "Franchised Units Sold by Predecessor",
  q13_time_length: "Length of Time Offering Franchises",
  q15_affiliate_locations: "Affiliate Owns Locations?",
  q16_provide_products: "Provides Products/Services to Franchisees?",
  q16_supplier_name: "Supplier/Affiliate Name",
  q16_products_desc: "Products/Services Provided",
  q17_market: "General Market Description",
  q18_regulations: "Industry-Specific Laws/Regulations?",
  q18_regulations_desc: "Regulations Description",

  // Item 5
  q22_initial_fee: "Initial Franchise Fee",
  q23_payment_type: "Payment Method",
  q23_payment_terms: "Payment Terms",
  q24_refundable: "Initial Fee Refundable?",
  q24_refund_conditions: "Refund Conditions",
  q25_same_fee: "Same Fee for All Franchisees?",
  q25_fee_method: "Fee Method/Formula",
  q26_multi_unit: "Multi-Unit Development Agreement?",
  q27_supplier: "Franchisor Acts as Supplier?",
  q27_supplier_who: "Supplier Entity",
  q27_supplier_what: "Goods/Services Supplied",
  q27_supplier_cost: "Initial Cost",

  // Items 6-7
  q29_cooperatives: "Advertising/Purchasing Cooperatives?",
  q31_refundable: "Payments Refundable?",
  q31_refund_desc: "Refund Description",
  q32_financed: "Investment Financed by Franchisor?",
  q32_financed_what: "Expenditure Financed",
  q32_down_payment: "Down Payment Required",
  q32_duration: "Duration of Financing",
  q32_interest: "Interest Rate",

  // Item 8
  q33_supplier: "Franchisor/Affiliate Acts as Supplier?",
  q33_who: "Supplier Entity",
  q33_what: "Goods/Services",
  q34_exclusive: "Exclusive Supplier?",
  q34_desc: "Exclusive Product/Service",
  q35_officers: "Officers with Supplier Interest",
  q36_supplier_eval: "Supplier Evaluation Process",
  q37_approval_fees: "Supplier Approval Fees?",
  q37_fee_amount: "Approval Fee Amount",
  q38_initial_pct: "% of Initial Investment to Franchisor/Vendors",
  q39_ongoing_pct: "% of Ongoing Costs to Franchisor/Vendors",
  q40_revenue: "Revenue from Franchisee Purchases?",
  q40_revenue_desc: "Revenue Details",
  q41_discounts: "Discounts/Rebates from Suppliers?",
  q41_discounts_desc: "Discount Details",
  q42_purchasing: "Purchasing/Distribution Arrangements?",
  q42_purchasing_desc: "Arrangement Details",

  // Item 10
  q43_financing: "Franchisor Offers Financing?",
  q43_financing_what: "Financing Offered",
  q43_down_payment: "Down Payment",
  q43_duration: "Duration",
  q43_interest: "Interest Rate",
  q44_lender: "Written Lender Arrangements?",
  q44_lender_desc: "Lender Details",
  q45_lender_benefit: "Franchisor Benefits from Lender?",
  q45_benefit_desc: "Benefit Details",
  q46_guarantee: "Franchisor Guarantees Notes/Leases?",
  q46_guarantee_desc: "Guarantee Details",

  // Item 11
  q47_pre_opening: "Pre-Opening Services",
  q47_pre_opening_other: "Other Pre-Opening Services",
  q48_post_opening: "Post-Opening Services",
  q48_post_opening_other: "Other Post-Opening Services",
  q49_time_to_open: "Time Between Signing and Opening",
  q50_ad_fund: "Advertising Fund Required?",
  q50_ad_fund_amount: "Advertising Fund Amount",
  q51_equal_contribution: "Equal Ad Fund Contribution?",
  q52_ad_fund_solicit: "Ad Fund Used to Solicit Sales?",
  q53_computer: "Computer Systems Required?",
  q53_computer_desc: "Computer Systems Description",
  q54_maintenance: "Computer Maintenance Provided?",
  q54_maintenance_desc: "Maintenance Details",
  q55_annual_cost: "Annual Computer Costs",
  q56_access: "Franchisor Access to Systems?",
  q56_access_desc: "Access Details",
  q58_location: "Training Location",
  q58_frequency: "Training Frequency",
  q58_person: "Training Program Leader",
  q59_training_fee: "Training Fee Charged?",
  q59_training_fee_desc: "Training Fee Details",
  q60_attendees: "Who Must Attend Training",
  q61_max_trainees: "Maximum Trainees?",
  q61_max_count: "Maximum Count",

  // Items 12-14
  q63_location_approval: "Location Approved by Franchisor?",
  q64_protected: "Protected Territory?",
  q64_territory_method: "Territory Determination Method",
  q65_territory_size: "Average/Minimum Territory Size",
  q66_territory_conditions: "Conditions for Maintaining Territory?",
  q66_conditions_desc: "Territory Conditions",
  q67_trademarks: "Trademarks Registered/Filed?",
  q68_patents: "Patent Rights?",
  q68_patents_desc: "Patent Details",
  q69_copyrights: "Copyrights Filed?",
  q69_copyrights_desc: "Copyright Details",

  // Items 15-21
  q70_supervision: "On-Premises Supervision Required?",
  q71_managers: "May Hire Managers?",
  q72_public_figures: "Public Figure Endorsements?",
  q72_figures_desc: "Public Figure Details",
  q73_fpr: "Financial Performance Representations",
  q75_financial_notes: "Financial Statement Notes",

  // Exhibit A
  exA_full_name: "Full Name",
  exA_address: "Business Address",
  exA_phone: "Phone",
  exA_email: "Email",
  exA_fax: "Fax",
  exA_position: "Current Position",
  exA_position_date: "Position Start Date",
  exA_lit_a1_franchise: "Pending: Franchise Law Violation",
  exA_lit_a1_antitrust: "Pending: Antitrust Law Violation",
  exA_lit_a1_securities: "Pending: Securities Law Violation",
  exA_lit_a1_fraud: "Pending: Fraud",
  exA_lit_a1_unfair: "Pending: Unfair/Deceptive Practices",
  exA_lit_a1_comparable: "Pending: Comparable Allegations",
  exA_lit_a2_civil: "Pending: Material Civil Action",
  exA_lit_a3_criminal: "Pending: Criminal Case",
  exA_lit_b1_felony: "Convicted of Felony?",
  exA_lit_b1_nolo: "Nolo Contendere to Felony?",
  exA_lit_b3_franchise: "Held Liable: Franchise Law",
  exA_lit_b3_antitrust: "Held Liable: Antitrust Law",
  exA_lit_b3_securities: "Held Liable: Securities Law",
  exA_lit_b3_fraud: "Held Liable: Fraud",
  exA_lit_b3_unfair: "Held Liable: Unfair/Deceptive",
  exA_lit_b3_comparable: "Held Liable: Comparable",
  exA_lit_c1_injunctive: "Subject to Injunctive Order?",
  exA_lit_c2_suspension: "Subject to Suspension Order?",
  exA_lit_parties: "Parties Involved",
  exA_lit_nature: "Nature of Case",
  exA_lit_court: "Court",
  exA_lit_filing_date: "Filing Date",
  exA_lit_docket: "Docket Number",
  exA_lit_relationship: "Relationship to Defendant",
  exA_lit_status: "Status of Pending Actions",
  exA_lit_judgment_date: "Conviction/Judgment Date",
  exA_lit_penalties: "Penalties/Damages/Settlement",
  exA_lit_counsel_name: "Counsel Name",
  exA_lit_counsel_phone: "Counsel Phone",
  exA_lit_counsel_address: "Counsel Address",
  exA_lit_order_agency: "Order Issuing Agency/Court",
  exA_lit_order_allegations: "Underlying Allegations",
  exA_lit_order_date: "Order Date",
  exA_lit_order_nature: "Nature of Order",
  exA_lit_order_terms: "Order Terms/Conditions",
  exA_bank_filed: "Filed Bankruptcy?",
  exA_bank_discharge: "Obtained Discharge?",
  exA_bank_officer: "Officer of Bankrupt Company?",
  exA_bank_name: "Filer Name",
  exA_bank_relationship: "Relationship to Franchisor",
  exA_bank_court: "Court/Case Details",
  exA_bank_facts: "Material Facts",
  exA_certification: "Certification",
  exA_print_name: "Print Name",
  exA_signature: "Electronic Signature",
  exA_date: "Date",
};

// ─── Section Definitions ────────────────────────────────────

interface Section {
  title: string;
  subtitle?: string;
  fields: string[];
  tables?: { key: string; label: string; columns: string[] }[];
}

const SECTIONS: Section[] = [
  {
    title: "Item 1 — The Franchisor",
    subtitle: "The Franchisor, Parent, Predecessors & Affiliates",
    fields: [
      "q1_franchisor_name",
      "q1_state",
      "q1_date_formed",
      "q2_email",
      "q3_address",
      "q3_telephone",
      "q4_website",
      "q6_parent",
      "q6_parent_name",
      "q6_parent_state",
      "q6_parent_address",
      "q7_predecessor",
      "q7_predecessor_name",
      "q7_asset_date",
      "q9_predecessor_business",
      "q9_time_period",
      "q10_predecessor_franchises",
      "q10_time_period",
      "q11_other_lines",
      "q11_other_lines_desc",
      "q12_units_sold",
      "q13_time_length",
      "q15_affiliate_locations",
      "q16_provide_products",
      "q16_supplier_name",
      "q16_products_desc",
      "q17_market",
      "q18_regulations",
      "q18_regulations_desc",
    ],
    tables: [
      {
        key: "q14_affiliates",
        label: "Affiliate Companies",
        columns: ["name", "state", "address"],
      },
      {
        key: "q15_locations",
        label: "Affiliate-Owned Locations",
        columns: ["name", "state", "address", "opening_date"],
      },
    ],
  },
  {
    title: "Items 2–4 — Experience, Litigation & Bankruptcy",
    subtitle: "File uploads only (Exhibit A)",
    fields: [],
  },
  {
    title: "Item 5 — Initial Fees",
    fields: [
      "q22_initial_fee",
      "q23_payment_type",
      "q23_payment_terms",
      "q24_refundable",
      "q24_refund_conditions",
      "q25_same_fee",
      "q25_fee_method",
      "q26_multi_unit",
      "q27_supplier",
      "q27_supplier_who",
      "q27_supplier_what",
      "q27_supplier_cost",
    ],
  },
  {
    title: "Items 6–7 — Other Fees & Initial Investment",
    fields: [
      "q29_cooperatives",
      "q31_refundable",
      "q31_refund_desc",
      "q32_financed",
      "q32_financed_what",
      "q32_down_payment",
      "q32_duration",
      "q32_interest",
    ],
    tables: [
      {
        key: "q28_fees",
        label: "Fee Schedule",
        columns: ["name", "amount", "due_date", "remarks"],
      },
      {
        key: "q30_investment",
        label: "Estimated Initial Investment",
        columns: ["type", "amount", "method", "when_due", "to_whom"],
      },
    ],
  },
  {
    title: "Item 8 — Restrictions on Sources",
    fields: [
      "q33_supplier",
      "q33_who",
      "q33_what",
      "q34_exclusive",
      "q34_desc",
      "q35_officers",
      "q36_supplier_eval",
      "q37_approval_fees",
      "q37_fee_amount",
      "q38_initial_pct",
      "q39_ongoing_pct",
      "q40_revenue",
      "q40_revenue_desc",
      "q41_discounts",
      "q41_discounts_desc",
      "q42_purchasing",
      "q42_purchasing_desc",
    ],
  },
  {
    title: "Item 10 — Financing",
    fields: [
      "q43_financing",
      "q43_financing_what",
      "q43_down_payment",
      "q43_duration",
      "q43_interest",
      "q44_lender",
      "q44_lender_desc",
      "q45_lender_benefit",
      "q45_benefit_desc",
      "q46_guarantee",
      "q46_guarantee_desc",
    ],
  },
  {
    title: "Item 11 — Assistance, Advertising & Training",
    fields: [
      "q47_pre_opening",
      "q47_pre_opening_other",
      "q48_post_opening",
      "q48_post_opening_other",
      "q49_time_to_open",
      "q50_ad_fund",
      "q50_ad_fund_amount",
      "q51_equal_contribution",
      "q52_ad_fund_solicit",
      "q53_computer",
      "q53_computer_desc",
      "q54_maintenance",
      "q54_maintenance_desc",
      "q55_annual_cost",
      "q56_access",
      "q56_access_desc",
      "q58_location",
      "q58_frequency",
      "q58_person",
      "q59_training_fee",
      "q59_training_fee_desc",
      "q60_attendees",
      "q61_max_trainees",
      "q61_max_count",
    ],
    tables: [
      {
        key: "q62_training",
        label: "Training Schedule",
        columns: ["subject", "classroom", "on_job", "location"],
      },
    ],
  },
  {
    title: "Items 12–14 — Territory, Trademarks & IP",
    fields: [
      "q63_location_approval",
      "q64_protected",
      "q64_territory_method",
      "q65_territory_size",
      "q66_territory_conditions",
      "q66_conditions_desc",
      "q67_trademarks",
      "q68_patents",
      "q68_patents_desc",
      "q69_copyrights",
      "q69_copyrights_desc",
    ],
    tables: [
      {
        key: "q67_trademark_list",
        label: "Trademarks",
        columns: ["description", "number", "owner"],
      },
    ],
  },
  {
    title: "Items 15–21 — Operations & More",
    subtitle: "Operations, Public Figures, Financial Performance & Outlets",
    fields: [
      "q70_supervision",
      "q71_managers",
      "q72_public_figures",
      "q72_figures_desc",
      "q73_fpr",
      "q75_financial_notes",
    ],
    tables: [
      {
        key: "q74_projections",
        label: "Projected Franchised Units by State",
        columns: ["state", "units"],
      },
    ],
  },
  {
    title: "Exhibit A — Management Questionnaire",
    fields: [
      "exA_full_name",
      "exA_address",
      "exA_phone",
      "exA_email",
      "exA_fax",
      "exA_position",
      "exA_position_date",
      "exA_lit_a1_franchise",
      "exA_lit_a1_antitrust",
      "exA_lit_a1_securities",
      "exA_lit_a1_fraud",
      "exA_lit_a1_unfair",
      "exA_lit_a1_comparable",
      "exA_lit_a2_civil",
      "exA_lit_a3_criminal",
      "exA_lit_b1_felony",
      "exA_lit_b1_nolo",
      "exA_lit_b3_franchise",
      "exA_lit_b3_antitrust",
      "exA_lit_b3_securities",
      "exA_lit_b3_fraud",
      "exA_lit_b3_unfair",
      "exA_lit_b3_comparable",
      "exA_lit_c1_injunctive",
      "exA_lit_c2_suspension",
      "exA_lit_parties",
      "exA_lit_nature",
      "exA_lit_court",
      "exA_lit_filing_date",
      "exA_lit_docket",
      "exA_lit_relationship",
      "exA_lit_status",
      "exA_lit_judgment_date",
      "exA_lit_penalties",
      "exA_lit_counsel_name",
      "exA_lit_counsel_phone",
      "exA_lit_counsel_address",
      "exA_lit_order_agency",
      "exA_lit_order_allegations",
      "exA_lit_order_date",
      "exA_lit_order_nature",
      "exA_lit_order_terms",
      "exA_bank_filed",
      "exA_bank_discharge",
      "exA_bank_officer",
      "exA_bank_name",
      "exA_bank_relationship",
      "exA_bank_court",
      "exA_bank_facts",
      "exA_certification",
      "exA_print_name",
      "exA_signature",
      "exA_date",
    ],
    tables: [
      {
        key: "exA_positions",
        label: "Positions Held (Past 5 Years)",
        columns: ["title", "company", "type", "location", "start", "end"],
      },
    ],
  },
];

// ─── Column Display Names ────────────────────────────────────

const COL_LABELS: Record<string, string> = {
  name: "Name",
  state: "State",
  address: "Address",
  opening_date: "Opening Date",
  amount: "Amount",
  due_date: "Due Date",
  remarks: "Remarks",
  type: "Type",
  method: "Method",
  when_due: "When Due",
  to_whom: "To Whom",
  subject: "Subject",
  classroom: "Classroom Hrs",
  on_job: "On-the-Job Hrs",
  location: "Location",
  description: "Description",
  number: "Reg. Number",
  owner: "Owner",
  units: "Units",
  title: "Title",
  company: "Company",
  start: "Start",
  end: "End",
};

// ─── Styles ─────────────────────────────────────────────────

const S = {
  body: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #0a0a0f; color: #e2e8f0; margin: 0; padding: 0;',
  container: "max-width: 700px; margin: 0 auto; padding: 20px;",
  header:
    "text-align: center; padding: 30px 20px; border-bottom: 1px solid rgba(255,255,255,0.08);",
  logo: "font-size: 24px; font-weight: 700; color: #00d4ff; letter-spacing: -0.5px;",
  subtitle: "font-size: 14px; color: #94a3b8; margin-top: 4px;",
  sectionHeader:
    "background: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,212,255,0.03)); border-left: 3px solid #00d4ff; padding: 12px 16px; margin: 24px 0 12px 0; border-radius: 0 6px 6px 0;",
  sectionTitle: "font-size: 16px; font-weight: 700; color: #00d4ff; margin: 0;",
  sectionSub: "font-size: 12px; color: #64748b; margin-top: 2px;",
  row: "padding: 8px 16px; border-bottom: 1px solid rgba(255,255,255,0.04);",
  rowAlt:
    "padding: 8px 16px; border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(255,255,255,0.02);",
  label:
    "font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;",
  value: "font-size: 14px; color: #e2e8f0; margin-top: 2px;",
  tableWrap: "padding: 12px 16px; overflow-x: auto;",
  tableLabel:
    "font-size: 13px; font-weight: 600; color: #94a3b8; margin-bottom: 8px;",
  table: "width: 100%; border-collapse: collapse; font-size: 13px;",
  th: "text-align: left; padding: 6px 10px; background: rgba(0,212,255,0.08); color: #00d4ff; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(0,212,255,0.15);",
  td: "padding: 6px 10px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #cbd5e1;",
  footer:
    "text-align: center; padding: 24px 20px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 24px;",
  footerText: "font-size: 12px; color: #475569;",
  badge:
    "display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;",
  badgeYes: "background: rgba(34,197,94,0.15); color: #4ade80;",
  badgeNo: "background: rgba(239,68,68,0.1); color: #f87171;",
};

// ─── Helpers ────────────────────────────────────────────────

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatValue(val: unknown): string {
  if (val === null || val === undefined || val === "") return "";
  if (Array.isArray(val)) {
    if (val.length === 0) return "";
    if (typeof val[0] === "string") return val.map(esc).join(", ");
    return "";
  }
  const s = String(val);
  if (s === "Yes") return `<span style="${S.badge} ${S.badgeYes}">Yes</span>`;
  if (s === "No") return `<span style="${S.badge} ${S.badgeNo}">No</span>`;
  return esc(s);
}

// ─── Main Builder ───────────────────────────────────────────

export function buildEmailHtml(data: FormData): string {
  const franchisorName = (data.q1_franchisor_name as string) || "Unknown";
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  let html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="${S.body}">
<div style="${S.container}">

<!-- Header -->
<div style="${S.header}">
  <div style="${S.logo}">Franchise Machine&trade;</div>
  <div style="${S.subtitle}">FDD Questionnaire Submission</div>
  <div style="margin-top: 12px; font-size: 13px; color: #94a3b8;">
    <strong style="color: #e2e8f0;">${esc(franchisorName)}</strong><br>
    Submitted ${submittedAt}
  </div>
</div>
`;

  for (const section of SECTIONS) {
    // Check if section has any data
    const hasFieldData = section.fields.some((f) => {
      const v = data[f];
      return v !== null && v !== undefined && v !== "";
    });
    const hasTableData = (section.tables || []).some((t) => {
      const rows = data[t.key] as Record<string, string>[] | undefined;
      return rows && rows.length > 0;
    });
    if (!hasFieldData && !hasTableData) continue;

    // Section header
    html += `\n<div style="${S.sectionHeader}">
  <div style="${S.sectionTitle}">${esc(section.title)}</div>
  ${section.subtitle ? `<div style="${S.sectionSub}">${esc(section.subtitle)}</div>` : ""}
</div>\n`;

    // Fields
    let rowIdx = 0;
    for (const field of section.fields) {
      const val = data[field];
      if (val === null || val === undefined || val === "") continue;
      const formatted = formatValue(val);
      if (!formatted) continue;
      const label = FIELD_LABELS[field] || field;
      const rowStyle = rowIdx % 2 === 0 ? S.row : S.rowAlt;
      html += `<div style="${rowStyle}">
  <div style="${S.label}">${esc(label)}</div>
  <div style="${S.value}">${formatted}</div>
</div>\n`;
      rowIdx++;
    }

    // Tables
    for (const table of section.tables || []) {
      const rows = data[table.key] as Record<string, string>[] | undefined;
      if (!rows || rows.length === 0) continue;

      html += `<div style="${S.tableWrap}">
  <div style="${S.tableLabel}">${esc(table.label)}</div>
  <table style="${S.table}">
    <thead><tr>`;
      for (const col of table.columns) {
        html += `<th style="${S.th}">${esc(COL_LABELS[col] || col)}</th>`;
      }
      html += `</tr></thead><tbody>`;
      for (const row of rows) {
        html += "<tr>";
        for (const col of table.columns) {
          html += `<td style="${S.td}">${esc(row[col] || "—")}</td>`;
        }
        html += "</tr>";
      }
      html += `</tbody></table></div>\n`;
    }
  }

  // Footer
  html += `
<div style="${S.footer}">
  <div style="${S.footerText}">
    This submission was generated by the Franchise Machine&trade; FDD Intake Form.<br>
    &copy; ${new Date().getFullYear()} Franchise Machine&trade; &mdash; All Rights Reserved
  </div>
</div>

</div>
</body>
</html>`;

  return html;
}
