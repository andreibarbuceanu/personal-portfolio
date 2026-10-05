import "./TechBadge.css";

type TechBadgeProps = {
  label: string;
};

function TechBadge({ label }: TechBadgeProps) {
  return <span className="tech-badge">{label}</span>;
}

export default TechBadge;
