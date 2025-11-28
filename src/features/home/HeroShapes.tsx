import type { FC } from "react";

/**
 * Abstrakte Form-Komposition im Warm–Kalt-Hybrid.
 * Nutzt deine CSS-Variablen für Orange/Braun + Grau-Grün.
 */
const HeroShapes: FC = () => {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-64 w-full max-w-sm md:h-72"
    >
      <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-3">
        {/* oben links – abgerundetes Grau-Grün */}
        <div className="col-span-2 row-span-2 rounded-3xl bg-[color:var(--ash-gray2)]" />

        {/* oben rechts – Rautenmuster in hellgrau-grün */}
        <div className="col-span-2 row-span-2 flex items-center justify-center">
          <div className="h-20 w-20 rotate-45 rounded-[1.25rem] bg-[color:var(--platinum)] md:h-24 md:w-24" />
        </div>

        {/* Mitte links – Rahmen in Braun */}
        <div className="col-span-2 row-span-2 flex items-center justify-center">
          <div className="h-24 w-24 rounded-3xl border-[6px] border-[color:var(--caput-mortuum)] bg-white md:h-28 md:w-28" />
        </div>

        {/* Mitte rechts – Kreis in Atomic Tangerine */}
        <div className="col-span-2 row-span-2 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-[color:var(--atomic-tangerine)] md:h-24 md:w-24" />
        </div>

        {/* unten links – dunkler Brown-Block */}
        <div className="col-span-2 row-span-2 rounded-[2rem] bg-[color:var(--caput-mortuum)]" />

        {/* unten Mitte – Dreieck in Orange */}
        <div className="col-span-1 row-span-2 flex items-end justify-center">
          <div className="mb-1 h-0 w-0 border-l-[28px] border-r-[28px] border-b-[52px] border-l-transparent border-r-transparent border-b-[color:var(--orange-pantone)] md:border-l-[32px] md:border-r-[32px] md:border-b-[60px]" />
        </div>

        {/* unten rechts – Halbkreis in Rostbraun */}
        <div className="col-span-1 row-span-2 flex items-end justify-end">
          <div className="h-16 w-full rounded-t-[2rem] bg-[color:var(--rusty-spicy)] md:h-20" />
        </div>
      </div>
    </div>
  );
};

export default HeroShapes;
