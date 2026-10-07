import ContactCard from "../contact/ContactCard";
import SectionHeader from "../ui/SectionHeader";
import "./Contact.css";

const contactItems = [
  {
    title: "Phone",
    description: "+40 771 642 396",
    href: "tel:+40771642396",
  },
  {
    title: "Email",
    description: "andrei_barbuceanu@yahoo.com",
    href: "mailto:andrei_barbuceanu@yahoo.com",
  },
  {
    title: "LinkedIn",
    description: "Alin Andrei Barbuceanu",
    href: "https://www.linkedin.com/in/alin-andrei-barbuceanu-96a473388/",
    external: true,
  },
  {
    title: "GitHub",
    description: "Projects and source code",
    href: "https://github.com/andreibarbuceanu",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <SectionHeader
        title="Contact"
        description="Ways to get in touch with me."
        variant="compact"
      />

      <div className="contact-grid">
        {contactItems.map((item) => (
          <ContactCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Contact;
