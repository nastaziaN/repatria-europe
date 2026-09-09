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
  const [activeSection, setActiveSection] = useState("hero");

  const handleSectionClick = (e, section) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${section}`);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = menuItems
      .filter(({ section }) => section)
      .map(({ section }) => section);

    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const offset = window.innerHeight * 0.3;

      let currentSection = sections[0];

      sections.forEach((section) => {
        if (
          Math.abs(section.getBoundingClientRect().top - offset) <
          Math.abs(currentSection.getBoundingClientRect().top - offset)
        ) {
          currentSection = section;
        }
      });

      const section = currentSection.id;

      setActiveSection(section);

      const url = section === "hero" ? "/" : `/#${section}`;
      window.history.replaceState(null, "", url);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
              const isActive = path
                ? location.pathname === path
                : location.pathname === "/" && activeSection === section;

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
