import React from "react";
import { useTranslation } from "react-i18next";
import { Section, Card } from "./ui";

type CalendarItemKeys = {
  id: string;
  dateKey: string;
  timeKey: string;
  titleKey: string;
  typeKey: string;
  locationKey: string;
};

const ProgramCalendarSection: React.FC = () => {
  const { t } = useTranslation();

  const months = [
    t("events.calendar.months.0"),
    t("events.calendar.months.1"),
    t("events.calendar.months.2"),
  ];

  const items: CalendarItemKeys[] = [
    {
      id: "mobilePopUp",
      dateKey: "events.calendar.items.mobilePopUp.date",
      timeKey: "events.calendar.items.mobilePopUp.time",
      titleKey: "events.calendar.items.mobilePopUp.title",
      typeKey: "events.calendar.items.mobilePopUp.type",
      locationKey: "events.calendar.items.mobilePopUp.location",
    },
    {
      id: "futureLab",
      dateKey: "events.calendar.items.futureLab.date",
      timeKey: "events.calendar.items.futureLab.time",
      titleKey: "events.calendar.items.futureLab.title",
      typeKey: "events.calendar.items.futureLab.type",
      locationKey: "events.calendar.items.futureLab.location",
    },
    {
      id: "repairDay",
      dateKey: "events.calendar.items.repairDay.date",
      timeKey: "events.calendar.items.repairDay.time",
      titleKey: "events.calendar.items.repairDay.title",
      typeKey: "events.calendar.items.repairDay.type",
      locationKey: "events.calendar.items.repairDay.location",
    },
    {
      id: "openCubeDay",
      dateKey: "events.calendar.items.openCubeDay.date",
      timeKey: "events.calendar.items.openCubeDay.time",
      titleKey: "events.calendar.items.openCubeDay.title",
      typeKey: "events.calendar.items.openCubeDay.type",
      locationKey: "events.calendar.items.openCubeDay.location",
    },
    {
      id: "schoolModule",
      dateKey: "events.calendar.items.schoolModule.date",
      timeKey: "events.calendar.items.schoolModule.time",
      titleKey: "events.calendar.items.schoolModule.title",
      typeKey: "events.calendar.items.schoolModule.type",
      locationKey: "events.calendar.items.schoolModule.location",
    },
    {
      id: "afterWork",
      dateKey: "events.calendar.items.afterWork.date",
      timeKey: "events.calendar.items.afterWork.time",
      titleKey: "events.calendar.items.afterWork.title",
      typeKey: "events.calendar.items.afterWork.type",
      locationKey: "events.calendar.items.afterWork.location",
    },
  ];

  const groups: Record<string, CalendarItemKeys[]> = {
    [months[0]]: items.slice(0, 2),
    [months[1]]: items.slice(2, 4),
    [months[2]]: items.slice(4, 6),
  };

  return (
    <Section id="calendar" className="">
      <div className="px-4">
<h2 className="mt-3 text-3xl font-semibold text-[color:var(--orange-pantone)] px-4 pb-4 md:text-4xl">
            {t("events.calendar.title")}
          </h2>
        <div className="lg:col-span-7">
          <Card className="p-6">
            <div className="space-y-8">
              {Object.entries(groups).map(([month, monthItems]) => (
                <div key={month}>
                  <div className="flex items-center justify-between">
                    <div className="text-md font-semibold text-[color:var(--rusty-spicy)]">
                      {month}
                    </div>
                    <div className="ml-4 h-px flex-1 bg-[color:var(--orange-pantone)]/50" />
                  </div>

                  <div className="mt-4 divide-y divide-[color:var(--orange-pantone)]/50 rounded-2xl border border-[color:var(--orange-pantone)]/50 bg-[color:var(--atomic-tangerine)]/50">
                    {monthItems.map((it) => (
                      <div
                        key={it.id}
                        className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-12 sm:items-center"
                      >
                        <div className="sm:col-span-3">
                          <div className="text-md font-semibold text-white">
                            {t(it.dateKey)}
                          </div>
                          <div className="text-md text-[color:var(--rusty-spicy)]">
                            {t(it.timeKey)}
                          </div>
                        </div>

                        <div className="sm:col-span-7">
                          <div className="text-lg font-semibold text-[color:var(--brown)]">
                            {t(it.titleKey)}
                          </div>
                          <div className="mt-1 text-md text-[color:var(--white)]">
                            {t(it.locationKey)}
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:text-right">
                          <span className="inline-flex items-center rounded-full border border-[color:var(--orange-pantone)]/30 bg-[color:var(--orange-pantone)]/30 px-3 py-1 text-md font-semibold text-[color:var(--white)]">
                            {t(it.typeKey)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ProgramCalendarSection;
