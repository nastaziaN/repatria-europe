import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../components/logo/Logo";
import { useTranslation } from "react-i18next";
import { menuItems } from "../Constants";
import "./styles/menu.scss";
import classNames from "classnames";
import LanguageSwitcher from "../../../components/langSwitch/LanguageSwitcher";
import { quickContacts } from "../../../constants/contacts/Constants";

const Menu = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (e, section) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/", {
        state: { scrollTo: section },
      });
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={classNames("menu", {
        "menu-open": isOpen,
        "menu-privacy-page": location.pathname === "/privacy_policy",
      })}
    >
      <Logo />
      <div className="menu-wrapper">
        <LanguageSwitcher />
        <button
          className={classNames("burger-menu", {
            "burger-menu-open": isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span className="burger-menu-icon" />
        </button>
        <div
          className={classNames("menu-drawer", {
            "menu-drawer-open": isOpen,
          })}
        >
          <ul className="menu-list">
            {menuItems.map(({ id, key, to, section, path }) => {
              const isActive = path ? location.pathname === path : false;
              return (
                <li key={id} className="menu-item">
                  <Link
                    to={to}
                    onClick={
                      section
                        ? (e) => handleSectionClick(e, section)
                        : () => setIsOpen(false)
                    }
                    className={classNames("menu-item-link link", {
                      "menu-item-link-active": isActive,
                    })}
                  >
                    {t(key)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="menu-socials">
            {quickContacts
              .filter(({ type }) => type !== "phone")
              .map(({ id, label, icon, link }) => (
                <a
                  key={id}
                  href={link}
                  className="menu-social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={icon} />
                </a>
              ))}
          </div>
          <Link
            to="/privacy_policy"
            className="menu-privacy"
            onClick={() => setIsOpen(false)}
          >
            {t("labels.privacy_policy")}
          </Link>
        </div>
        <div
          className={classNames("menu-overlay", {
            "menu-overlay-open": isOpen,
          })}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Menu;
