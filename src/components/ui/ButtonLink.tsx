import type { ReactNode } from "react";
import "./ButtonLink.css";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  centered?: boolean;
  download?: boolean;
  external?: boolean;
  size?: "small" | "medium";
};

function ButtonLink({
  children,
  href,
  centered = false,
  download = false,
  external = false,
  size = "medium",
}: ButtonLinkProps) {
  const className = [
    "button-link",
    `button-link--${size}`,
    centered ? "button-link--centered" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={className}
      download={download || undefined}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
