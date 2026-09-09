import FormField from "./FormField";
import { contactFields } from "../../constants/form/Constants";

function ContactsForm({
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
    <div className="form-block contacts-form">
      <div className="form-block-header">
        <span className="icon form-block-icon icon-person" />
        <h3 className="form-block-title">{t("form.contacts.form_title")}</h3>
      </div>
      <p className="form-block-desc">{t("form.contacts.sub_desc")}</p>
      <div className="contacts-fields grid">
        {contactFields.map((field) => (
          <div key={field.name} className="contact-field col-12 col-md-6">
            <FormField field={field} isContactField {...fieldProps} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsForm;
