import { forwardRef, useMemo, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { useTranslation } from "react-i18next";
import { uk, enUS } from "date-fns/locale";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/date-picker.scss";

registerLocale("uk", uk);
registerLocale("en", enUS);

const DateInput = forwardRef(
  ({ value, onClick, placeholder, error, id }, ref) => (
    <button
      ref={ref}
      id={id}
      type="button"
      className={classNames("form-control datepicker-input", {
        "form-control-error": error,
      })}
      onClick={onClick}
    >
      <span
        className={classNames("datepicker-value", {
          "datepicker-placeholder": !value,
        })}
      >
        {value || placeholder}
      </span>
      <span className="icon-calendar datepicker-icon" />
    </button>
  ),
);

DateInput.displayName = "DateInput";

const CustomDatePicker = ({ id, name, placeholder, error, clearError }) => {
  const { i18n } = useTranslation();
  const [date, setDate] = useState(null);

  const locale = useMemo(() => {
    const language = i18n.resolvedLanguage || i18n.language || "uk";
    return language.startsWith("en") ? "en" : "uk";
  }, [i18n.resolvedLanguage, i18n.language]);

  const handleChange = (value) => {
    setDate(value);
    clearError?.(name);
  };

  return (
    <>
      <DatePicker
        id={id}
        selected={date}
        onChange={handleChange}
        placeholderText={placeholder}
        dateFormat="dd.MM.yyyy"
        minDate={new Date()}
        locale={locale}
        customInput={<DateInput placeholder={placeholder} error={error} />}
        calendarClassName="custom-calendar"
        wrapperClassName="datepicker-wrap"
        popperPlacement="bottom"
        showPopperArrow={false}
      />
      <input type="hidden" name={name} value={date ? date.toISOString() : ""} />
    </>
  );
};

export default CustomDatePicker;
