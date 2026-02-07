"use client";

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  itemNumber?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  title,
  subtitle,
  itemNumber,
  children,
}: SectionWrapperProps) {
  return (
    <div className="space-y-8">
      <div className="relative pb-8">
        {itemNumber && (
          <span className="mb-3 inline-block rounded-full bg-brand-cyan/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">
            {itemNumber}
          </span>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {subtitle}
          </p>
        )}
        {/* Gradient divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-brand-cyan/40 via-border to-transparent" />
      </div>
      <div className="space-y-7">{children}</div>
    </div>
  );
}
