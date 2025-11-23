import React from "react";

export interface AboutCardProps {
  title: string;
  children: React.ReactNode;
  images?: React.ReactNode; // optional: ein oder mehrere Bilder / Image-Components
}

const AboutCard: React.FC<AboutCardProps> = ({ title, children, images }) => {
  return (
    <section className="flex flex-col gap-4 bg-[color:var(--anti-flash-white)]/20 backdrop-blur-sm  rounded-3xl p-6 lg:p-10 shadow-lg w-full">
      <h2 className="text-xl lg:text-2xl font-semibold uppercase tracking-wide text-white">
        {title}
      </h2>

      {images && (
        <div className="flex flex-wrap gap-4">
          {images}
        </div>
      )}

      <div className="text-sm lg:text-base text-white leading-relaxed ">
        {children}
      </div>
    </section>
  );
};

export default AboutCard;
