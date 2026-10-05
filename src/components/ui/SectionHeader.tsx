import type { ReactNode } from "react";
import "./SectionHeader.css";

type SectionHeaderProps = {
  title: string;
  description: string;
  children?: ReactNode;
  variant?: "default" | "compact";
};

function SectionHeader({
  title,
  description,
  children,
  variant = "default",
}: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${variant}`}>
      <h2>{title}</h2>
      <p>{description}</p>

      {children && <div className="section-header-actions">{children}</div>}
    </header>
  );
}

export default SectionHeader;
