export const prepareFormData = ({
  formData,
  t,
  transportFields,
  contactFields,
  coffinOptions,
}) => {
  const data = Object.fromEntries(formData.entries());

  const getOptionLabel = (fields, fieldName, value) => {
    const option = fields
      .find((field) => field.name === fieldName)
      ?.options?.find((option) => String(option.value) === String(value));

    return option ? t(option.label) : value;
  };

  data.country = getOptionLabel(transportFields, "country", data.country);

  data.destination_country = getOptionLabel(
    transportFields,
    "destination_country",
    data.destination_country,
  );

  data.transport = getOptionLabel(transportFields, "transport", data.transport);

  data.heard = getOptionLabel(contactFields, "heard", data.heard);

  const coffinOption = coffinOptions.find(
    (option) => String(option.id) === String(data.coffin),
  );

  if (coffinOption) {
    data.coffin = t(coffinOption.label);
  }

  if (data.date) {
    const date = new Date(data.date);

    data.date = new Intl.DateTimeFormat("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  }

  return data;
};
