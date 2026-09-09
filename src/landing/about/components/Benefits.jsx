import { useTranslation } from "react-i18next";
import "../styles/benefits-section.scss";
import { benefitsList } from "../Constants";

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className="section light-section benefits-section">
      <div className="container reveal">
        <h1 className="main-title benefits-title section-offset">
          {t("about_page.why_us.title")}
        </h1>
        <p className="desc section-offset">{t("about_page.why_us.desc")}</p>
        <div className="grid benefits-list">
          {benefitsList.map(({ id, title, desc }) => (
            <div key={id} className="col-12 col-s-6 col-lg-3 benefit-card">
              <h2 className="benefit-card-title">{t(title)}</h2>
              <div className="divider" />
              <p className="benefit-card-desc">{t(desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
