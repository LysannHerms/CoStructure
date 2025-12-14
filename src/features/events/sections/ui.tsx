import React from "react";

export function Section({
  id,
  className = "",
  children,
}: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-16">{children}</div>
    </section>
  );
}

export function Card({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={[
        "rounded-3xl border border-[color:var(--orange-pantone)]/35",
        "bg-[color:var(--atomic-tangerine)]/20 backdrop-blur-sm",
        "shadow-2xl",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
