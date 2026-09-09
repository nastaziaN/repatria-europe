import { Trans, useTranslation } from "react-i18next";
import "../styles/why-us-section.scss";
import { whyUsList } from "../Constants";
import WhyImg from "../../../img/why-us.png";

const WhyUs = () => {
  const { t } = useTranslation();

  const scrollToForm = () => {
    document.getElementById("contacts")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="section dark-section whyus-section">
      <div className="container reveal">
        <h1 className="main-title whyus-title">
          {t("main_page.why_us.title")}
        </h1>
        <p className="desc whyus-desc centered">{t("main_page.why_us.desc")}</p>
        <div className="benefits-wrap">
          <div className="img-wrap-dark">
            <img className="img" src={WhyImg} alt={t("images.why_us")} />
          </div>
          <div className="benefits">
            <ul className="benefits-list">
              {whyUsList.map(({ id, item }) => (
                <li key={id} className="benefits-list-item">
                  {t(item)}
                </li>
              ))}
            </ul>
            <p className="desc benefits-desc">
              <Trans
                i18nKey="main_page.why_us.sub_desc"
                components={{
                  strong: <strong />,
                }}
              />
            </p>
            <button className="btn primary-btn ask-btn" onClick={scrollToForm}>
              {t("buttons.ask_btn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
