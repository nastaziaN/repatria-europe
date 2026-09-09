import classNames from "classnames";
import PhoneInput from "../phone/PhoneInput";
import CustomSelect from "../select/CustomSelect";
import CustomDatePicker from "../datepicker/DatePicker";

function FormField({
  field,
  isContactField = false,
  t,
  errors,
  clearError,
  selectValues,
  handleSelectChange,
  formResetKey,
}) {
  const { name, type, label, placeholder, required, options, maxLength } =
    field;

  const isRequired = isContactField && required;

  return (
    <div className="form-field">
      <label
        className="form-label"
        htmlFor={type === "select" ? undefined : name}
      >
        {t(label)}
        {isRequired && " *"}
      </label>

      {type === "select" ? (
        <CustomSelect
          id={name}
          name={name}
          value={selectValues[name] || ""}
          placeholder={t(placeholder)}
          options={options?.map(({ value, label }) => ({
            value,
            label: t(label),
          }))}
          onChange={(value) => handleSelectChange(name, value)}
        />
      ) : type === "date" ? (
        <CustomDatePicker
          key={`${name}-${formResetKey}`}
          id={name}
          name={name}
          placeholder={placeholder ? t(placeholder) : ""}
          error={errors[name]}
          clearError={clearError}
        />
      ) : type === "tel" ? (
        <PhoneInput
          key={`${name}-${formResetKey}`}
          id={name}
          name={name}
          placeholder={placeholder ? t(placeholder) : ""}
          required={isRequired}
          error={errors[name]}
          clearError={clearError}
        />
      ) : (
        <input
          className={classNames("form-control", {
            "form-control-error": errors[name],
          })}
          id={name}
          name={name}
          type={type}
          maxLength={maxLength}
          required={isRequired}
          placeholder={placeholder ? t(placeholder) : ""}
          onChange={() => clearError(name)}
        />
      )}

      {errors[name] && <span className="form-error">{errors[name]}</span>}
    </div>
  );
}

export default FormField;
