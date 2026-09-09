import { useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";

const useFormValidation = (t, contactFields, transportFields) => {
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};

    contactFields.forEach(({ name, required, type }) => {
      const value = formData.get(name)?.trim();

      if (required && !value) {
        newErrors[name] = t("form.errors.required");
        return;
      }

      if (!value) return;

      if (type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
          newErrors[name] = t("form.errors.email");
        }
      }

      if (type === "tel") {
        try {
          if (!isValidPhoneNumber(value)) {
            newErrors[name] = t("form.errors.phone");
          }
        } catch {
          newErrors[name] = t("form.errors.phone");
        }
      }
    });

    transportFields.forEach(({ name }) => {
      const value = formData.get(name)?.trim();

      if (name.includes("city") && value) {
        const cityRegex = /^[\p{L}\s.'’()-]{2,}$/u;

        if (!cityRegex.test(value)) {
          newErrors[name] = t("form.errors.city");
        }
      }
    });

    if (!formData.get("accept")) {
      newErrors.accept = t("form.errors.accept");
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const clearError = (name) => {
    setErrors((prev) => {
      if (!prev[name]) return prev;

      const next = { ...prev };
      delete next[name];

      return next;
    });
  };

  return {
    errors,
    validate,
    clearError,
  };
};

export default useFormValidation;
