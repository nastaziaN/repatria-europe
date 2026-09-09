import { Trans, useTranslation } from "react-i18next";
import classNames from "classnames";
import "../styles/about-section.scss";
import AboutImage from "../../../img/about-mobile.png";
import ContactActions from "../../../components/contacts/ContactActions";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="inner-page dark-section about-section">
      <div className="container reveal">
        <div className="about">
          <div className="title-wrap">
            <h2 className="main-title about-page-title ">
              {t("about_page.main.title")}
            </h2>
            <div className="divider" />
          </div>
          <h1 className="about-title main-title">
            <Trans
              i18nKey="brand_name"
              components={{
                accent: <span className="accent-text" />,
              }}
            />
          </h1>
          <h2 className="about-slogan">{t("about_page.main.slogan")}</h2>
        </div>
        <div className="cover">
          <img
            className="about-img img"
            src={AboutImage}
            alt={t("images.hero")}
          />
        </div>
        <div className="about-content">
          <p className="desc about-desc-first">{t("about_page.main.desc_1")}</p>
          <p className="desc about-desc">{t("about_page.main.desc_2")}</p>
        </div>
        <ContactActions />
      </div>
    </section>
  );
};

export default About;
