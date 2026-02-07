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
      <div className="border-b border-border pb-6">
        {itemNumber && (
          <span className="mb-2 inline-block rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-cyan">
            {itemNumber}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {subtitle}
          </p>
        )}
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
