import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type FilterDropdownOption = {
  value: string;
  label: string;
};

type FilterDropdownProps = {
  label: string;
  value: string;
  options: FilterDropdownOption[];
  onChange: (value: string) => void;
  className?: string;
};

type MenuPosition = {
  top: number;
  left: number;
  width: number;
};

export default function FilterDropdown({
  label,
  value,
  options,
  onChange,
  className,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<MenuPosition | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const selectedLabel = options.find((opt) => opt.value === value)?.label ?? "–";

  useLayoutEffect(() => {
    if (!open || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const menuPortal =
    open && pos
      ? createPortal(
          <>
            <div className="fixed inset-0 z-[690]" onClick={() => setOpen(false)} />

            <div
              className="fixed z-[700]"
              style={{
                top: pos.top,
                left: pos.left,
                width: Math.min(pos.width, 220),
              }}
            >
              <div className="rounded-md bg-white/25 backdrop-blur-md shadow-lg text-sm overflow-hidden">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`block w-full px-3 py-1.5 text-left ${
                      opt.value === value
                        ? "bg-[color:var(--battleship-gray)]/60 font-medium"
                        : "bg-transparent hover:bg-[color:var(--battleship-gray)]/60"
                    }`}
                    role="option"
                    aria-selected={opt.value === value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <span className="text-md text-white">{label}</span>

      <button
        type="button"
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="relative h-9 min-w-[160px] rounded px-3 bg-white/75 shadow-sm text-left text-sm flex items-center justify-between gap-2 bg-[color:var(--battleship-gray)]/60"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{selectedLabel}</span>
        <span className="text-xs opacity-70">▾</span>
      </button>

      {menuPortal}
    </div>
  );
}
