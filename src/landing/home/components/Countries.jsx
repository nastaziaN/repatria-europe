import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "../styles/countries-section.scss";
import { countriesList } from "../Constants";
import MapImg from "../../../img/map-img.png";

const Countries = ({ onSelectCountry }) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const visibleCountries = showAll ? countriesList : countriesList.slice(0, 10);

  return (
    <section id="countries" className="section light-section countries-section">
      <div className="container reveal">
        <div className="countries">
          <div className="countries-wrap">
            <h1 className="main-title">{t("main_page.countries.title")}</h1>
            <p className="desc countries-desc">
              {t("main_page.countries.desc")}
            </p>
            <div className="grid countries-grid">
              {visibleCountries.map((code) => (
                <div className="country col-6 col-s-4 col-md-6" key={code}>
                  <button
                    key={code}
                    className="country-btn"
                    onClick={() => {
                      onSelectCountry(code);

                      document.getElementById("contacts")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    <span
                      className={classNames("country-icon", `icon-${code}`)}
                    >
                      {Array.from({ length: 52 }, (_, index) => (
                        <span key={index} className={`path${index + 1}`} />
                      ))}
                    </span>
                    <span className="country-name">
                      {t(`main_page.countries.list.${code}`)}
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <button
              className="countries-toggle"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll
                ? t("main_page.countries.collapse")
                : t("main_page.countries.view_all")}
              <span
                className={classNames("icon", "icon-arrow-down", {
                  "icon-open": showAll,
                })}
              />
            </button>
          </div>
          <div className="countries-img">
            <img
              className="map-img"
              src={MapImg}
              alt={t("images.europe_map")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
