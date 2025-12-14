import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


type PillProps = { children: React.ReactNode };
const Pill: React.FC<PillProps> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-[color:var(--peach-fuzz)]/60 bg-white px-3 py-1 text-xs lg:text-sm text-[color:var(--black-bean)] shadow-sm">
    {children}
  </span>
);

type CardProps = {
  title: string;
  kicker?: string;
  children: React.ReactNode;
};
const Card: React.FC<CardProps> = ({ title, kicker, children }) => (
  <section className="rounded-3xl bg-white shadow-lg border border-black/5 p-6 lg:p-10">
    {kicker && (
      <div className="text-xs tracking-[0.18em] uppercase text-[color:var(--rusty-spicy)]">
        {kicker}
      </div>
    )}
    <h2 className="mt-2 text-xl lg:text-2xl font-semibold text-[color:var(--black-bean)]">
      {title}
    </h2>
    <div className="mt-4 text-sm lg:text-base text-[color:var(--black-bean)]/90 leading-relaxed">
      {children}
    </div>
  </section>
);

const AboutPage: React.FC = () => {
  const { t } = useTranslation("common");

  const quickFacts = t("aboutNew.quickFacts", { returnObjects: true }) as string[];
  const howItems = t("aboutNew.howItems", { returnObjects: true }) as Array<{ title: string; body: string }>;
  const impactItems = t("aboutNew.impactItems", { returnObjects: true }) as Array<{ title: string; body: string }>;
  const steps = t("aboutNew.steps", { returnObjects: true }) as Array<{ title: string; body: string }>;
  const whyBullets = t("aboutNew.whyApproachBullets", { returnObjects: true }) as string[];
  const faqs = t("aboutNew.faqs", { returnObjects: true }) as Array<{ q: string; a: string }>;

  return (
    <div className="min-h-screen bg-[color:var(--anti-flash-white)]">
      <main className="px-4 py-14 lg:py-20">
        {/* HERO */}
        <header className="mx-auto w-full max-w-5xl">
          <div className="rounded-3xl bg-white shadow-lg border border-black/5 p-8 lg:p-12">
            <div className="text-xs tracking-[0.18em] uppercase text-[color:var(--rusty-spicy)]">
              {t("aboutNew.kicker")}
            </div>

            <h1 className="mt-3 text-3xl lg:text-5xl font-semibold tracking-tight text-[color:var(--black-bean)]">
              {t("aboutNew.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-base lg:text-lg text-[color:var(--black-bean)]/85">
              {t("aboutNew.lead")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {quickFacts.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/map"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium text-white shadow-md bg-[color:var(--orange-pantone)] hover:opacity-95"
              >
                {t("aboutNew.ctaMap")}
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium text-[color:var(--black-bean)] border border-[color:var(--peach-fuzz)]/80 bg-white hover:bg-[color:var(--misty-rose)]/40"
              >
                {t("aboutNew.ctaEvents")}
              </Link>
            </div>
          </div>
        </header>

        {/* HOW + WHY */}
        <section className="mx-auto mt-10 lg:mt-14 w-full max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title={t("aboutNew.howTitle")} kicker={t("aboutNew.howKicker")}>
              <div className="space-y-4">
                {howItems.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-black/5 bg-[color:var(--anti-flash-white)] p-4">
                    <div className="font-semibold text-[color:var(--black-bean)]">{item.title}</div>
                    <div className="mt-1 text-[color:var(--black-bean)]/80">{item.body}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title={t("aboutNew.whyTitle")} kicker={t("aboutNew.whyKicker")}>
              <div className="space-y-4">
                <div className="rounded-2xl border border-black/5 bg-[color:var(--misty-rose)]/40 p-4">
                  <div className="font-semibold text-[color:var(--black-bean)]">
                    {t("aboutNew.whyProblemTitle")}
                  </div>
                  <p className="mt-1 text-[color:var(--black-bean)]/80">
                    {t("aboutNew.whyProblemBody")}
                  </p>
                </div>

                <div className="rounded-2xl border border-black/5 bg-[color:var(--anti-flash-white)] p-4">
                  <div className="font-semibold text-[color:var(--black-bean)]">
                    {t("aboutNew.whyApproachTitle")}
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-[color:var(--black-bean)]/80 space-y-1">
                    {whyBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4">
                  <div className="font-semibold text-[color:var(--rusty-spicy)]">
                    {t("aboutNew.whyQuoteLabel")}
                  </div>
                  <p className="mt-2 italic text-[color:var(--black-bean)]/85">
                    {t("aboutNew.whyQuote")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* IMPACT */}
        <section className="mx-auto mt-10 lg:mt-14 w-full max-w-5xl">
          <Card title={t("aboutNew.impactTitle")} kicker={t("aboutNew.impactKicker")}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {impactItems.map((x) => (
                <div key={x.title} className="rounded-2xl border border-black/5 bg-[color:var(--anti-flash-white)] p-5">
                  <div className="font-semibold text-[color:var(--black-bean)]">{x.title}</div>
                  <div className="mt-2 text-[color:var(--black-bean)]/80">{x.body}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* STATUS */}
        <section className="mx-auto mt-10 lg:mt-14 w-full max-w-5xl">
          <Card title={t("aboutNew.statusTitle")} kicker={t("aboutNew.statusKicker")}>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((s, idx) => (
                <li key={s.title} className="rounded-2xl border border-black/5 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--orange-pantone)] text-white font-semibold">
                      {idx + 1}
                    </span>
                    <div className="font-semibold text-[color:var(--black-bean)]">{s.title}</div>
                  </div>
                  <div className="mt-2 text-[color:var(--black-bean)]/80">{s.body}</div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-[color:var(--peach-fuzz)]/70 bg-[color:var(--misty-rose)]/35 p-5">
              <div className="font-semibold text-[color:var(--black-bean)]">
                {t("aboutNew.getInvolvedTitle")}
              </div>
              <p className="mt-1 text-[color:var(--black-bean)]/80">
                {t("aboutNew.getInvolvedBody")}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="mailto:lysann.herms@fh-potsdam.de"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium text-white shadow-md bg-[color:var(--rusty-spicy)] hover:opacity-95"
                >
                  {t("aboutNew.getInvolvedCta")}
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-10 lg:mt-14 w-full max-w-5xl">
          <Card title={t("aboutNew.faqTitle")} kicker={t("aboutNew.faqKicker")}>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-black/5 bg-white p-5">
                  <summary className="cursor-pointer list-none font-semibold text-[color:var(--black-bean)] flex items-center justify-between">
                    <span>{f.q}</span>
                    <span className="text-[color:var(--orange-pantone)] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[color:var(--black-bean)]/80">{f.a}</p>
                </details>
              ))}
            </div>
          </Card>
        </section>

        {/* FOOTER NOTE */}
        <footer className="mx-auto mt-10 lg:mt-14 w-full max-w-5xl text-center text-xs text-[color:var(--black-bean)]/60">
          {t("aboutNew.footerNote")}
        </footer>
      </main>
    </div>
  );
};

export default AboutPage;
