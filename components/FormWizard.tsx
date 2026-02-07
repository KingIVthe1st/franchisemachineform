"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

import { Item1Franchisor } from "@/components/sections/Item1Franchisor";
import { Items2to4 } from "@/components/sections/Items2to4";
import { Item5InitialFees } from "@/components/sections/Item5InitialFees";
import { Items6to7 } from "@/components/sections/Items6to7";
import { Item8Restrictions } from "@/components/sections/Item8Restrictions";
import { Item10Financing } from "@/components/sections/Item10Financing";
import { Item11Assistance } from "@/components/sections/Item11Assistance";
import { Items12to14 } from "@/components/sections/Items12to14";
import { Items15to21 } from "@/components/sections/Items15to21";
import { ExhibitA } from "@/components/sections/ExhibitA";

const STEPS = [
  { id: "welcome", label: "Welcome" },
  { id: "item1", label: "The Franchisor" },
  { id: "items2-4", label: "Experience & History" },
  { id: "item5", label: "Initial Fees" },
  { id: "items6-7", label: "Fees & Investment" },
  { id: "item8", label: "Suppliers" },
  { id: "item10", label: "Financing" },
  { id: "item11", label: "Assistance & Training" },
  { id: "items12-14", label: "Territory & IP" },
  { id: "items15-21", label: "Operations & More" },
  { id: "exhibitA", label: "Exhibit A" },
];

const WEB3FORMS_KEY = "640b6e44-f07d-4161-a972-2e297273fd85";

function flattenData(data: Record<string, unknown>, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(data)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value === null || value === undefined) continue;
    if (value instanceof File) continue; // files handled separately
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      if (typeof value[0] === "string") {
        result[fullKey] = value.join(", ");
      } else {
        value.forEach((item, i) => {
          if (typeof item === "object") {
            Object.entries(item).forEach(([k, v]) => {
              if (v) result[`${fullKey}[${i}].${k}`] = String(v);
            });
          }
        });
      }
    } else if (typeof value === "object") {
      Object.assign(result, flattenData(value as Record<string, unknown>, fullKey));
    } else {
      result[fullKey] = String(value);
    }
  }
  return result;
}

export function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = useCallback((key: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const goNext = () => {
    setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPrev = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const flat = flattenData(formData);
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_KEY);
      fd.append("subject", "New FDD Questionnaire Submission");
      fd.append("from_name", (formData.q1_franchisor_name as string) || "FDD Applicant");
      fd.append("replyto", (formData.q2_email as string) || "");

      // Add all flattened text fields
      for (const [key, value] of Object.entries(flat)) {
        fd.append(key, value);
      }

      // Add file uploads
      for (const [key, value] of Object.entries(formData)) {
        if (value instanceof File) {
          fd.append(key, value);
        }
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Submission failed. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const renderStep = () => {
    switch (STEPS[currentStep].id) {
      case "welcome":
        return <WelcomeStep />;
      case "item1":
        return <Item1Franchisor data={formData} update={update} />;
      case "items2-4":
        return <Items2to4 data={formData} update={update} />;
      case "item5":
        return <Item5InitialFees data={formData} update={update} />;
      case "items6-7":
        return <Items6to7 data={formData} update={update} />;
      case "item8":
        return <Item8Restrictions data={formData} update={update} />;
      case "item10":
        return <Item10Financing data={formData} update={update} />;
      case "item11":
        return <Item11Assistance data={formData} update={update} />;
      case "items12-14":
        return <Items12to14 data={formData} update={update} />;
      case "items15-21":
        return <Items15to21 data={formData} update={update} />;
      case "exhibitA":
        return <ExhibitA data={formData} update={update} />;
      default:
        return null;
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-cyan/20">
            <CheckCircle2 className="h-10 w-10 text-brand-cyan" />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-white">
            Questionnaire Submitted
          </h2>
          <p className="text-text-secondary">
            Thank you for completing the FDD Questionnaire. Your responses have
            been sent to the Franchise Machine&trade; team. We will review your
            submission and follow up with you shortly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-brand-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Image
            src="/logo.jpg"
            alt="Franchise Machine™"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-text-muted sm:block">
              Step {currentStep + 1} of {STEPS.length}
            </span>
            <div className="h-2 w-32 overflow-hidden rounded-full bg-surface-card sm:w-48">
              <motion.div
                className="progress-shimmer h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:flex lg:gap-8">
        {/* Sidebar Navigation */}
        <nav className="mb-8 lg:mb-0 lg:w-64 lg:shrink-0">
          <div className="sticky top-20 space-y-1 overflow-x-auto lg:overflow-visible">
            <div className="flex gap-2 lg:flex-col lg:gap-1">
              {STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
                    index === currentStep
                      ? "bg-brand-cyan/10 text-brand-cyan"
                      : index < currentStep
                        ? "text-text-secondary hover:bg-surface-hover hover:text-white"
                        : "text-text-muted hover:bg-surface-hover hover:text-text-secondary"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      index === currentStep
                        ? "bg-brand-cyan text-black"
                        : index < currentStep
                          ? "bg-brand-cyan/20 text-brand-cyan"
                          : "bg-surface-card text-text-muted"
                    }`}
                  >
                    {index < currentStep ? "✓" : index + 1}
                  </span>
                  <span className="hidden lg:block">{step.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Form Content */}
        <main className="min-w-0 flex-1">
          <div className="rounded-2xl border border-border bg-surface-card/50 p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={STEPS[currentStep].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {/* Error message */}
            {submitStatus === "error" && (
              <div className="mt-6 flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
              <button
                onClick={goPrev}
                disabled={currentStep === 0}
                className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:bg-surface-hover hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              {currentStep === STEPS.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={submitStatus === "submitting"}
                  className="flex items-center gap-2 rounded-lg bg-brand-cyan px-8 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-brand-cyan-light disabled:opacity-50 shadow-lg shadow-brand-cyan/25"
                >
                  {submitStatus === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Questionnaire
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 rounded-lg bg-brand-cyan px-8 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-brand-cyan-light shadow-lg shadow-brand-cyan/25"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 text-center text-xs text-text-muted">
        &copy; {new Date().getFullYear()} Franchise Machine&trade; &mdash; All Rights Reserved
      </footer>
    </div>
  );
}

/* ─── Welcome Step ───────────────────────────────────────────── */
function WelcomeStep() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Image
          src="/logo.jpg"
          alt="Franchise Machine™"
          width={120}
          height={120}
          className="mx-auto mb-6 rounded-2xl"
        />
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Initial FDD Questionnaire
        </h1>
        <p className="mt-4 text-lg text-brand-cyan font-medium">
          Franchise Machine&trade;
        </p>
      </div>

      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-surface-card p-6">
        <p className="leading-relaxed text-text-secondary">
          Welcome to the Franchise Machine&trade; FDD intake process. This questionnaire
          is designed to gather the information that we will need in order to prepare
          the Franchise Disclosure Document (or &ldquo;FDD&rdquo;) for your franchise program in
          accordance with the Federal Trade Commission&apos;s (&ldquo;FTC&rdquo;) amended Franchise
          Rule and applicable state law.
        </p>
        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20">
              <span className="text-xs font-bold text-brand-cyan">1</span>
            </div>
            <p className="text-sm text-text-secondary">
              Complete each section to the best of your ability. You can navigate
              between sections at any time.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20">
              <span className="text-xs font-bold text-brand-cyan">2</span>
            </div>
            <p className="text-sm text-text-secondary">
              Some questions have conditional fields that appear based on your answers.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20">
              <span className="text-xs font-bold text-brand-cyan">3</span>
            </div>
            <p className="text-sm text-text-secondary">
              When finished, submit the form. Your responses will be sent directly
              to our team for review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
