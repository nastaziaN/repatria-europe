import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "../styles/documents-section.scss";
import DocsImg from "../../../img/docs.png";
import { docsList } from "../Constants";

function Documents() {
  const { t } = useTranslation();

  return (
    <section id="documents" className="section light-section docs-section">
      <div className="container reveal">
        <h1 className="main-title">{t("main_page.docs.title")}</h1>
        <p className="desc">{t("main_page.docs.desc")}</p>
        <div className="docs-content">
          <div className="docs-img-wrap">
            <img
              className="docs-img img"
              src={DocsImg}
              alt={t("images.documents")}
            />
          </div>
          <ul className="docs-list list">
            {docsList.map(({ id, title, desc, icon }) => (
              <li key={id} className="docs-item">
                <div className="docs-item-wrap">
                  <span className={classNames("docs-item-icon", icon)} />
                  <h2 className="docs-item-title">{t(title)}</h2>
                </div>
                <p className="docs-item-desc">{t(desc)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Documents;
