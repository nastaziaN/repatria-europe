import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import "./styles/custom-select.scss";

function CustomSelect({ id, name, value, options, placeholder, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options?.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!selectRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={classNames("custom-select", {
        "custom-select-open": isOpen,
      })}
    >
      <button
        id={id}
        aria-labelledby={`${id}-label`}
        className="custom-select-trigger"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={classNames("custom-select-value", {
            placeholder: !selectedOption,
          })}
        >
          {selectedOption?.label || placeholder}
        </span>
        <span className="icon icon-arrow-down" />
      </button>
      {isOpen && (
        <div className="custom-select-dropdown">
          {options?.map(({ value: optionValue, label }) => (
            <button
              key={optionValue}
              type="button"
              className={classNames("custom-select-option", {
                active: value === optionValue,
              })}
              onClick={() => handleSelect(optionValue)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <input type="hidden" name={name} value={value || ""} />
    </div>
  );
}

export default CustomSelect;
