import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "../styles/services.scss";
import { servicesList } from "../Constants";
import Slider from "../../../components/swiper/Slider.jsx";
const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section light-section services">
      <div className="container reveal">
        <h1 className="main-title spacing">{t("main_page.services.title")}</h1>
        <p className="desc spacing services-desc">
          {t("main_page.services.desc")}
        </p>
        <div className="services-cards">
          <Slider
            items={servicesList}
            renderItem={({ title, desc, img }) => (
              <div
                className="service-card reveal"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="service-card-desc">
                  <h2 className="card-title">{t(title)}</h2>
                  <p className="card-desc">{t(desc)}</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
