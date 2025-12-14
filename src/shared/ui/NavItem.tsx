import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "px-2 py-1 rounded " + (isActive ? "font-semibold" : "opacity-80 hover:opacity-100")
      }
    >
      {children}
    </NavLink>
  );
}
