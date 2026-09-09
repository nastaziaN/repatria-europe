import { useTranslation } from "react-i18next";
import "../styles/docs-process.scss";
import { docsProcessList } from "../Constants";

function DocsProcess() {
  const { t } = useTranslation();

  return (
    <section className="section dark-section docs-process">
      <div className="container reveal">
        <h1 className="main-title spacing">
          {t("main_page.docs_process.title")}
        </h1>
        {/* <div className="docs-process-content"> */}
        <ul className="process-list list">
          {docsProcessList.map(({ id, title, desc }) => (
            <li key={id} className="process-item">
              <span className="process-item-number">{id}</span>
              <h3 className="process-item-title">{t(title)}</h3>
              <p className="process-item-desc">{t(desc)}</p>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </section>
  );
}

export default DocsProcess;
