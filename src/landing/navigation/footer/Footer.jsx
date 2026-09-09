import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../components/logo/Logo";
import "./styles/footer.scss";
import { servicesList } from "./Constants";
import { menuItems } from "../Constants";
import { contacts, socials } from "../../../constants/contacts/Constants";
import classNames from "classnames";

const Footer = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, to, section) => {
    if (!section) return;

    e.preventDefault();

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", to);
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="grid">
          <div className="footer-column col-4 col-xs-12 col-s-6 col-md-3 col-lg-3">
            <Logo />
            <p className="footer-slogan">{t("slogan")}</p>
            <div className="footer-socials">
              {socials.map(({ id, icon, link }) => (
                <a key={id} href={link} className="social-link">
                  <span className={classNames("icon-link", icon)} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-column col-6 col-md-3 col-lg-3">
            <h3 className="footer-title">{t("labels.links")}</h3>
            <ul className="footer-list">
              {menuItems.map(({ id, key, to, section }) => (
                <li key={id} className="footer-list-item">
                  <Link
                    className="link"
                    to={to}
                    onClick={(e) => handleNavigation(e, to, section)}
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column col-6 col-md-3 col-lg-3">
            <h3 className="footer-title">{t("labels.services")}</h3>
            <ul className="footer-list">
              {servicesList.map(({ id, key, to, section }) => (
                <li key={id} className="footer-list-item">
                  <Link
                    to={to}
                    className="link"
                    onClick={(e) => handleNavigation(e, to, section)}
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column col-6 col-xs-12 col-s-6 col-md-3 col-lg-3">
            <h3 className="footer-title">{t("labels.contacts")}</h3>
            {contacts.map(({ id, label, contact, icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                className="contact-link footer-contact"
              >
                <span className={classNames("icon icon-contact", icon)} />
                <div className="contact-wrapper">
                  <span className="contact-label">{t(label)}</span>
                  <p className="contact">{contact}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright">{t("labels.copyright")}</span>
        <Link className="privacy-link" to="/privacy_policy">
          {t("form.privacy_policy")}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
