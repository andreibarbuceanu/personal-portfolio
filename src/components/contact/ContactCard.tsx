import "./ContactCard.css";

type ContactCardProps = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

function ContactCard({
  title,
  description,
  href,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      className="contact-card"
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <strong>{title}</strong>
      <span className="contact-description">{description}</span>
    </a>
  );
}

export default ContactCard;
