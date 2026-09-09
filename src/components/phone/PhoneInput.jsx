import { useMemo, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import classNames from "classnames";
import CustomSelect from "../select/CustomSelect";
import "./phone-input.scss";

function PhoneInput({ id, name, placeholder, required, error, clearError }) {
  const [country, setCountry] = useState("UA");
  const [phone, setPhone] = useState("");

  const countries = useMemo(
    () =>
      getCountries().map((countryCode) => ({
        country: countryCode,
        callingCode: `+${getCountryCallingCode(countryCode)}`,
      })),
    [],
  );

  const parsedPhone = phone ? parsePhoneNumberFromString(phone, country) : null;

  const fullPhone = parsedPhone?.number || "";

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");

    setPhone(digits);
    clearError(name);
  };

  const handleCountryChange = (value) => {
    setCountry(value);
    setPhone("");
    clearError(name);
  };

  return (
    <>
      <div
        className={classNames("phone-control", {
          "form-control-error": error,
        })}
      >
        <div className="phone-code">
          <CustomSelect
            value={country}
            options={countries.map(({ country, callingCode }) => ({
              value: country,
              label: `${country} ${callingCode}`,
            }))}
            onChange={handleCountryChange}
          />
        </div>
        <input
          id={id}
          className="phone-input"
          type="tel"
          inputMode="numeric"
          value={phone}
          maxLength={15}
          required={required}
          placeholder={placeholder}
          onChange={handlePhoneChange}
        />
      </div>
      <input type="hidden" name={name} value={fullPhone} />
    </>
  );
}

export default PhoneInput;
