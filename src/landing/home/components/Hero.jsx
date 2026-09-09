import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { heroList } from "../Constants";
import "../styles/hero-section.scss";
import HeroImage from "../../../img/hero.png";
import ContactActions from "../../../components/contacts/ContactActions";

const Hero = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.state?.scrollTo;

    if (!section) return;

    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    navigate("/", {
      replace: true,
      state: null,
    });
  }, [location.state, navigate]);

  return (
    <section id="hero" className=" inner-page hero">
      <div className="container reveal">
        <div className="hero-wrap">
          <h1 className="main-title">{t("main_title")}</h1>
          <span className="hero-title main-title">
            {t("main_page.hero.title")}
          </span>
          <p className="hero-slogan">{t("slogan")}</p>
        </div>
        <div className="cover">
          <img
            className="hero-img img"
            src={HeroImage}
            alt={t("images.hero")}
          />
        </div>
        <ul className="hero-list list">
          {heroList.map(({ id, item }) => (
            <li key={id} className="hero-list-item">
              <span className="icon icon-checked" />
              {t(item)}
            </li>
          ))}
        </ul>
        <ContactActions />
      </div>
    </section>
  );
};

export default Hero;
