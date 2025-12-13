type SectionProps = { title?: string; subtitle?: string; children: React.ReactNode };
export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="py-10 backdrop-blur-sm  rounded-3xl p-6 lg:p-10 shadow-lg md:py-14">
      {(title || subtitle) && (
        <header className="mb-6">
          {title && (
            <h2 className="text-xl md:text-2xl font-semibold text-[color:var(--black-bean)]">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-1 text-[color:var(--black-beane)]/70">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
