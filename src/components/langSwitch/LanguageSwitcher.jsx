import { useTranslation } from "react-i18next";
import "./styles/lang-switcher.scss";
import classNames from "classnames";
import { useState } from "react";

const languages = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find(({ code }) => code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button
        className="language-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {currentLanguage.label}
        <span
          className={classNames("language-switcher-arrow", {
            "language-switcher-arrow-open": isOpen,
          })}
        />
      </button>
      <ul
        className={classNames("language-switcher-list", {
          "language-switcher-list-open": isOpen,
        })}
      >
        {languages.map(({ code, label }) => (
          <li className="language-switcher-list-item" key={code}>
            <button className="switch-btn" onClick={() => changeLanguage(code)}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
