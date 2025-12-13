import React from "react";
import { useTranslation } from "react-i18next";
import { Section, Card } from "./ui";

const EventContributeSection: React.FC = () => {
  const { t } = useTranslation();

  const bullets = [0, 1, 2, 3].map((i) => t(`events.contribute.bullets.${i}`));

  return (
    <Section id="contribute">
    <div className="px-4">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="text-sm font-semibold tracking-[0.22em] text-white">
            {t("events.contribute.sectionKicker")}
          </div>

          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            {t("events.contribute.title")}
          </h2>

          <p className="mt-4 max-w-3xl text-md leading-relaxed text-white md:text-base">
            {t("events.contribute.lead")}
          </p>

          <ul className="mt-7 space-y-3 text-md text-white">
            {bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-white" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--atomic-tangerine)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(255,85,0,0.25)] transition hover:translate-y-[-1px]"
            >
              {t("events.contribute.ctaPrimary")}
              <span className="ml-2">→</span>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--orange-pantone)]/45 bg-[color:var(--peach-fuzz)]/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--black-coffee)]/15"
            >
              {t("events.contribute.ctaSecondary")}
              <span className="ml-2">→</span>
            </a>
          </div>

          <p className="mt-4 text-sm text-white">
            {t("events.contribute.note")}
          </p>
        </div>

        <div className="lg:col-span-5 py-16">
          <Card className="p-6">
            <div className="text-sm font-semibold tracking-[0.22em] text-white">
              {t("events.contribute.exampleTitle")}
            </div>

            <blockquote className="mt-4 rounded-2xl border border-[color:var(--orange-pantone)]/20 bg-[color:var(--atomic-tangerine)]/50 p-4 text-sm leading-relaxed text-white">
              “{t("events.contribute.exampleQuote")}”
            </blockquote>

            <p className="mt-4 text-white leading-relaxed text-white">
              {t("events.contribute.exampleNote")}
            </p>
          </Card>
        </div>
      </div>
        </div>
    </Section>
  );
};

export default EventContributeSection;
