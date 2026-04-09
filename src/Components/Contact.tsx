import MyButton from "./reusables/MyButton";
import SectionIntro from "./reusables/SectionIntro";
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
    label: "GitHub",
    value: "github.com/pledreDev",
    href: "https://github.com/pledreDev",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fortuneadebiyi",
    href: "https://www.linkedin.com/in/fortuneadebiyi",
  },
];

const Contact = () => {
  const scopeRef = usePageMotion<HTMLElement>();

  return (
    <section className="section shell" ref={scopeRef}>
      <SectionIntro
        label="Contact"
        title="If the brief is serious, I’m interested."
        copy="I work best with teams that care about the craft of the product and the quality of the implementation. If that sounds like your project, let’s talk."
      />

      <div className="contact-rail">
        {channels.map((channel) => (
          <a
            className="contact-rail__item"
            href={channel.href}
            key={channel.label}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
            data-animate="up"
          >
            <span className="contact-rail__label">{channel.label}</span>
            <span className="contact-rail__value">{channel.value}</span>
          </a>
        ))}
      </div>

      <div className="section-actions" data-animate="up">
        <MyButton text="Open contact page" link="/contact" />
      </div>
    </section>
  );
};

export default Contact;
