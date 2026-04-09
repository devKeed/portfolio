import { useState, type ChangeEvent, type FormEvent } from "react";
import SEO from "./SEO";
import PageHeader from "./reusables/PageHeader";
import { usePageMotion } from "./reusables/usePageMotion";

const channels = [
  {
    label: "Email",
    value: "fortuneadebiyi@gmail.com",
    href: "mailto:fortuneadebiyi@gmail.com",
  },
  {
    label: "Phone",
    value: "+234 706 380 7894",
    href: "tel:+2347063807894",
  },
  {
    label: "WhatsApp",
    value: "+234 802 772 5422",
    href: "https://wa.me/2348027725422",
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: "https://maps.google.com/?q=Lagos,Nigeria",
  },
];

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const scopeRef = usePageMotion<HTMLDivElement>();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Your name is required.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "An email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "A short project note is required.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const subject = encodeURIComponent(
      formData.subject.trim() || `Project enquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:fortuneadebiyi@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEO
        title="Contact | Fortune Adebiyi"
        description="Get in touch with Fortune Adebiyi for product, frontend, backend, and collaboration enquiries."
        keywords="Fortune Adebiyi, contact, software engineer, frontend, backend, collaboration"
      />

      <div className="page-shell" ref={scopeRef}>
        <PageHeader
          label="Contact"
          title="Start the conversation with enough context to move quickly."
          description="If you have a product, platform, or website brief that needs clean execution and clear thinking, send it through. The more specific the context, the better the response."
          aside="The form opens your mail client so the message goes somewhere real."
        />

        <section className="section shell">
          <div className="contact-page__grid">
            <div className="contact-page__info">
              <div className="contact-page__panel" data-animate="up">
                <p className="eyebrow">Direct</p>
                <div className="contact-page__list">
                  {channels.map((channel) => (
                    <a
                      key={channel.label}
                      className="contact-page__link"
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span>{channel.label}</span>
                      <strong>{channel.value}</strong>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-page__panel" data-animate="up">
                <p className="eyebrow">Best fit</p>
                <p className="contact-page__note">
                  Product builds, frontend-heavy systems, backend-backed features,
                  platform refactors, and websites that need a better standard
                  than the default agency output.
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} data-animate="up">
              <label className="field">
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.name ? <small>{errors.name}</small> : null}
              </label>

              <label className="field">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                />
                {errors.email ? <small>{errors.email}</small> : null}
              </label>

              <label className="field">
                <span>Subject</span>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What are we building?"
                />
              </label>

              <label className="field">
                <span>Project note</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Scope, timeline, current state, and where you need help."
                  rows={8}
                />
                {errors.message ? <small>{errors.message}</small> : null}
              </label>

              <button type="submit" className="button-link form-submit">
                <span>Send enquiry</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
