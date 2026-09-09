import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classNames from "classnames";
import useFormValidation from "../../../hooks/useFormValidation";
import { prepareFormData } from "../../../helpers/prepareFormData";
import { sendRequest } from "../Actions";
import TransportForm from "../../../components/form/TransportForm";
import ContactsForm from "../../../components/form/ContactsForm";
import {
  transportFields,
  contactFields,
  coffinOptions,
} from "../../../constants/form/Constants";
import "../styles/form-section.scss";

function FormSection({ selectedTransport, selectedCountry }) {
  const { t } = useTranslation();

  const [selectValues, setSelectValues] = useState({
    country: "",
    destination_country: "",
    transport: "",
    heard: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formResetKey, setFormResetKey] = useState(0);

  const { errors, validate, clearError } = useFormValidation(
    t,
    contactFields,
    transportFields,
  );

  useEffect(() => {
    if (selectedTransport) {
      setSelectValues((prev) => ({
        ...prev,
        transport: selectedTransport,
      }));
    }
  }, [selectedTransport]);

  useEffect(() => {
    if (selectedCountry) {
      setSelectValues((prev) => ({
        ...prev,
        country: selectedCountry,
      }));
    }
  }, [selectedCountry]);

  const handleSelectChange = (name, value) => {
    setSelectValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    clearError(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validate(formData)) return;

    const data = prepareFormData({
      formData,
      t,
      transportFields,
      contactFields,
      coffinOptions,
    });

    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      await sendRequest(data);

      form.reset();

      setSelectValues({
        country: "",
        destination_country: "",
        transport: "",
        heard: "",
      });

      setFormResetKey((prev) => prev + 1);
      setSubmitStatus("success");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3500);
    } catch (error) {
      console.error(error);

      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldProps = {
    t,
    errors,
    clearError,
    selectValues,
    handleSelectChange,
    formResetKey,
  };

  return (
    <section id="contacts" className="section light-section form-section">
      <div className="container reveal">
        <h1 className="main-title">{t("form.title")}</h1>
        <p className="desc">{t("form.desc")}</p>

        <form className="form-content" onSubmit={handleSubmit} noValidate>
          <TransportForm {...fieldProps} />
          <ContactsForm {...fieldProps} />

          <label className="form-accept">
            <input
              className="form-accept-input"
              type="checkbox"
              name="accept"
              required
              onChange={() => clearError("accept")}
            />
            <span className="form-accept-text">
              {t("form.accept")}{" "}
              <Link className="privacy-link" to="/privacy_policy">
                {t("form.privacy_policy")}
              </Link>
            </span>
          </label>

          {errors.accept && (
            <span className="form-error form-accept-error">
              {errors.accept}
            </span>
          )}
          <div className="form-submit">
            <button
              className="primary-btn btn form-submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("submit.sending") : t("buttons.send_btn")}
              <span className="icon icon-send" />
            </button>
            {submitStatus && (
              <div
                className={classNames(
                  "form-message",
                  `form-message-${submitStatus}`,
                )}
              >
                {submitStatus === "success" ? (
                  <span className="icon-checked form-message-icon" />
                ) : (
                  <span className="icon-error form-message-icon" />
                )}
                <div>
                  <h2 className="form-message-title">
                    {t(`submit.${submitStatus}.title`)}
                  </h2>
                  <p className="form-message-text">
                    {t(`submit.${submitStatus}.desc`)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
