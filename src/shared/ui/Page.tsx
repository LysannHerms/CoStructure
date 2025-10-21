import type { ReactNode } from "react";


type PageProps = {
  title: string;
  children?: ReactNode;
};

export default function Page({ title, children }: PageProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
