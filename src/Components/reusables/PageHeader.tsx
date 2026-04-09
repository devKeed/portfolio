type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  aside?: string;
};

const PageHeader = ({ label, title, description, aside }: PageHeaderProps) => {
  return (
    <section className="page-header section">
      <div className="page-header__grid">
        <div>
          <p className="eyebrow" data-hero-fade>
            {label}
          </p>
          <div className="page-title-wrap">
            <span className="split-line">
              <span className="split-line__inner" data-hero-line>
                {title}
              </span>
            </span>
          </div>
        </div>
        <div className="page-header__support" data-hero-fade>
          <p>{description}</p>
          {aside ? <p className="page-header__aside">{aside}</p> : null}
        </div>
      </div>
      <div className="section-rule" data-hero-scale />
    </section>
  );
};

export default PageHeader;
