import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../styles/history-section.scss";
import HistoryImg from "../../../img/history-img.png";

const History = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const toServices = () => {
    navigate("/#services");
  };

  return (
    <section className="section light-section history-section">
      <div className="container reveal">
        <div className="history">
          <div className="history-content">
            <div className="title-wrap">
              <h1 className="main-title history-title">
                {t("about_page.history.title")}
              </h1>
              <div className="divider" />
            </div>
            <div className="desc-wrap">
              <p className="desc history-desc-first">
                {t("about_page.history.desc_1")}
              </p>
              <p className="desc history-desc">
                {t("about_page.history.desc_2")}
              </p>
            </div>
            <div className="btn-group history-btn-group">
              <button
                onClick={toServices}
                className="btn secondary-btn services-btn"
              >
                {t("buttons.services_btn")}
              </button>
            </div>
          </div>
        </div>
        <div className="history-img-wrap img-wrap-light">
          <img
            src={HistoryImg}
            className="img"
            alt={t("images.about.history")}
          />
        </div>
      </div>
    </section>
  );
};

export default History;
