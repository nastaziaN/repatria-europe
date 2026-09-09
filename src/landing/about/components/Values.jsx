import { useTranslation } from "react-i18next";
import "../styles/values-section.scss";
import { valuesList } from "../Constants";
import classNames from "classnames";

const Values = () => {
  const { t } = useTranslation();

  return (
    <section className="section dark-section values-section">
      <div className="container reveal">
        <h1 className="main-title values-title">
          {t("about_page.values.title")}
        </h1>
        <p className="desc">{t("about_page.values.desc")}</p>
        <div className="grid values-list">
          {valuesList.map(({ id, icon, title, desc }) => (
            <div key={id} className="col-12 col-s-6 col-lg-3 value-card">
              <div className="value-card-header">
                <span className={classNames("icon value-card-icon", icon)} />
                <h2 className="value-card-title">{t(title)}</h2>
              </div>
              <p className="value-card-desc">{t(desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
