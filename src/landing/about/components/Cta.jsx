import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../styles/cta-section.scss";
import CtaImg from "../../../img/cta-about.png";

const Cta = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const toForm = () => {
    navigate("/#contacts");
  };

  return (
    <section className="section dark-section cta-section ">
      <div className="container reveal">
        <div className="cta">
          <div className="cta-content">
            <div className="title-wrap">
              <h1 className="main-title cta-title">
                {t("about_page.cta.title")}
              </h1>
              <div className="divider" />
            </div>
            <p className="desc cta-desc">{t("about_page.cta.desc")}</p>
          </div>
          <div className="btn-group cta-btn-group">
            <button className="btn primary-btn cta-btn" onClick={toForm}>
              {t("buttons.ask_btn")}
            </button>
          </div>
        </div>
        <div className="img-wrap-dark">
          <img src={CtaImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
