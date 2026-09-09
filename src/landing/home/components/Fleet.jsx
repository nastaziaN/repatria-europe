import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "../styles/fleet-section.scss";
import { fleetList } from "../Constants";
import Slider from "../../../components/swiper/Slider.jsx";

const Fleet = ({ onSelectTransport }) => {
  const { t } = useTranslation();

  return (
    <section id="fleet" className="section light-section fleet-section reveal">
      <div className="container">
        <h1 className="main-title spacing">{t("main_page.cars.title")}</h1>
        <p className="desc spacing services-desc">{t("main_page.cars.desc")}</p>
        <div className="fleet-cards">
          <Slider
            items={fleetList}
            disableFrom="large"
            renderItem={({ id, title, model, desc, specifications, img }) => (
              <div key={id} className="car-card">
                <img className="car-card-img" src={img} />
                <div className="car-card-desc">
                  <h2 className="car-title">{t(title)}</h2>
                  <span className="car-model">{t(model)}</span>
                  <p className="car-desc">{t(desc)}</p>
                  <ul className="car-card-specif">
                    {specifications.map((item) => (
                      <li className="list-item" key={item}>
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn secondary-btn more-btn"
                    onClick={() => {
                      onSelectTransport(id);

                      document.getElementById("contacts")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {t("buttons.more_btn")}
                    <span className="icon icon-arrow" />
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Fleet;
