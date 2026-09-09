import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames";
import { quickContacts } from "../../constants/contacts/Constants";
import "./styles/contact-actions.scss";

const ContactActions = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toForm = () => {
    if (location.pathname === "/") {
      document.getElementById("contacts")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/#contacts");
    }
  };

  const phone = quickContacts.find(({ type }) => type === "phone");
  const messengers = quickContacts.filter(({ type }) => type !== "phone");

  return (
    <div className="grid contact-actions">
      <div className="col-12 col-s-6 col-md-4 col-lg-3">
        <button onClick={toForm} className="ask-btn primary-btn btn">
          {t("buttons.ask_btn")}
        </button>
      </div>
      {phone && (
        <div className="quick-contact-phone col-12 col-s-6 col-md-4 col-lg-2">
          <a href={phone.link} className="quick-contact contact-link">
            <span className={classNames("icon-contacts", phone.icon)} />
            <span className="quick-contact-content">
              <span className="quick-contact-label">{t(phone.label)}</span>
              <span className="quick-contact-value contact">
                {phone.contact}
              </span>
            </span>
          </a>
        </div>
      )}
      <div className="messenger-actions col-12 col-s-12 col-md-4 col-lg-7">
        {messengers.map(({ id, label, type, icon, contact, link }) => (
          <a
            key={id}
            href={link}
            className={classNames(
              "quick-contact",
              "contact-link",
              `quick-contact-${type}`,
            )}
          >
            <span className={classNames("icon-contacts", icon)} />
            <span className="quick-contact-content">
              <span className="quick-contact-label">{t(label)}</span>
              {contact && (
                <span className="quick-contact-value contact">{contact}</span>
              )}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactActions;
