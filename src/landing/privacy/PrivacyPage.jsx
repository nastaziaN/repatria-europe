import { useTranslation } from "react-i18next";
import AnimationGlobal from "../../components/animation/AnimationGlobal";
import { CONTACTS } from "../../constants/general/Constants";
import Seo from "../../components/seo/Seo";
import "./styles/privacy.scss";

function PrivacyPage() {
  const { t } = useTranslation();

  const sections = t("privacy.sections", {
    returnObjects: true,
  });

  return (
    <>
      <AnimationGlobal />
      <Seo
        title={t("seo.privacy.title")}
        description={t("seo.privacy.description")}
        canonical="/privacy_policy"
        noindex
      />
      <main className="privacy-main">
        <section className="inner-page light-section privacy">
          <div className="container privacy-content reveal">
            <div className="privacy-header">
              <h1 className="main-title">{t("privacy.title")}</h1>
              <div className="privacy-intro">
                <p className="privacy-intro-desc">
                  {t("privacy.intro.description")}
                </p>
                <p className="privacy-intro-desc">
                  {t("privacy.intro.controller_before")}{" "}
                  <strong>{t("privacy.company_name")}</strong>{" "}
                  {t("privacy.intro.controller_after")}
                </p>
                <p className="privacy-intro-desc">
                  {t("privacy.intro.consent")}
                </p>
              </div>
            </div>
            <div className="privacy-sections">
              {sections.map((section) => (
                <div className="privacy-section" key={section.number}>
                  <div className="privacy-section-head">
                    <span className="privacy-section-number">
                      {section.number}
                    </span>
                    <h2 className="privacy-section-title">{section.title}</h2>
                  </div>
                  <div className="privacy-section-content">
                    {section.paragraphs.map((paragraph) => (
                      <div className="privacy-paragraph" key={paragraph.number}>
                        <p className="privacy-section-desc">
                          <span className="privacy-paragraph-number">
                            {paragraph.number}.
                          </span>{" "}
                          {paragraph.text}
                        </p>
                        {paragraph.items && (
                          <ul className="privacy-section-list">
                            {paragraph.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    {section.number === "8" && (
                      <div className="privacy-contacts">
                        <ul className="privacy-section-list">
                          <li>
                            <strong>{t("privacy.company_name")}</strong>
                          </li>
                          <li>
                            <a href={CONTACTS.email.link}>
                              {CONTACTS.email.value}
                            </a>
                          </li>
                          <li>
                            <a href={CONTACTS.phone.link}>
                              {CONTACTS.phone.value}
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="privacy-updated">{t("privacy.updated")}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default PrivacyPage;
