import classNames from "classnames";
import FormField from "./FormField";
import { transportFields, coffinOptions } from "../../constants/form/Constants";

function TransportForm({
  t,
  errors,
  clearError,
  selectValues,
  handleSelectChange,
  formResetKey,
}) {
  const fieldProps = {
    t,
    errors,
    clearError,
    selectValues,
    handleSelectChange,
    formResetKey,
  };

  return (
    <div className="form-block transport-form">
      <div className="form-block-header">
        <span className="form-block-icon icon-globe" />
        <h3 className="form-block-title">{t("form.transport.form_title")}</h3>
      </div>
      <div className="transport-fields grid">
        {transportFields.map((field) => (
          <div
            key={field.name}
            className={classNames("transport-field", "col-12", "col-md-6")}
          >
            <FormField field={field} {...fieldProps} />
          </div>
        ))}
        <div className="coffin-field col-12 col-md-6">
          <p className="form-label">
            {t("form.transport.inputs.coffin.label")}
          </p>
          <div className="coffin-list">
            {coffinOptions.map(({ id, label, icon }) => (
              <label key={id} className="coffin-option">
                <input
                  className="coffin-input"
                  type="radio"
                  name="coffin"
                  value={id}
                />
                <span className={classNames("icon coffin-option-icon", icon)} />
                <span className="coffin-option-label">{t(label)}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="additional-field col-12 col-md-6">
          <div className="form-field">
            <label className="form-label" htmlFor="additional_info">
              {t("form.transport.inputs.additional_info.label")}
            </label>
            <textarea
              className="form-control form-textarea"
              id="additional_info"
              name="additional_info"
              maxLength={500}
              placeholder={t(
                "form.transport.inputs.additional_info.placeholder",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransportForm;
