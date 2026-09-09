import { useTranslation } from "react-i18next";
import "../styles/process-section.scss";
import CarsImage from "../../../img/about-mobile.png";
import { processList } from "../Constants";

const Process = () => {
  const { t } = useTranslation();

  const scrollToForm = () => {
    document.getElementById("contacts")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="section dark-section process-section">
      <div className="container reveal">
        <div className="header-wrap section-offset">
          <h1 className="main-title">{t("main_page.process.title")}</h1>
          <p className="desc ">{t("main_page.process.desc")}</p>
        </div>
        <div className="process-content">
          <div className="process-content-cta">
            <div className="img-wrap-dark">
              <img
                className="process-img img"
                src={CarsImage}
                alt={t("images.how_it_works")}
              />
            </div>
            <div className="btn-group">
              <button
                className="ask-btn primary-btn btn"
                onClick={scrollToForm}
              >
                {t("buttons.ask_btn")}
              </button>
            </div>
          </div>
          <ul className="process-list list">
            {processList.map(({ id, title, desc }) => (
              <li key={id} className="process-step">
                <span className="process-step-number">{id}</span>
                <h3 className="process-step-title">{t(title)}</h3>
                <p className="process-step-desc">{t(desc)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
