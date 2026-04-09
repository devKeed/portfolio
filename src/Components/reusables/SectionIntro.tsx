type SectionIntroProps = {
  label: string;
  title: string;
  copy: string;
};

const SectionIntro = ({ label, title, copy }: SectionIntroProps) => {
  return (
    <div className="section-intro">
      <p className="eyebrow" data-animate="up">
        {label}
      </p>
      <div className="section-intro__grid">
        <h2 className="section-title" data-animate="up">
          {title}
        </h2>
        <p className="section-copy" data-animate="up">
          {copy}
        </p>
      </div>
      <div className="section-rule" data-animate="line" />
    </div>
  );
};

export default SectionIntro;
