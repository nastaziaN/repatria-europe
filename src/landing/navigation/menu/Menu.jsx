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

      window.history.replaceState(null, "", `#${section}`);
    } else {
      navigate(`/#${section}`);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const section = location.hash.slice(1);

    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.pathname, location.hash]);

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

    const sections = menuItems
      .filter(({ section }) => section)
      .map(({ section }) => document.getElementById(section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
