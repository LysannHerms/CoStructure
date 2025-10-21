import { Link, type LinkProps } from "react-router-dom";

type Props = (LinkProps | React.AnchorHTMLAttributes<HTMLAnchorElement>) & { children: React.ReactNode };

export default function TextLink(props: Props) {
  const cls = "underline underline-offset-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black";
  if ("to" in props) {
    const { to, className, ...rest } = props as LinkProps & { className?: string };
    return <Link to={to} className={`${cls} ${className ?? ""}`} {...rest} />;
  }
  const { className, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string };
  return <a className={`${cls} ${className ?? ""}`} {...rest} />;
}
