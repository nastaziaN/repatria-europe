import { countriesList } from "../../landing/home/Constants";
export const countryOptions = countriesList.map((code) => ({
  value: code,
  label: `main_page.countries.list.${code}`,
}));

export const SourceList = [
  {
    value: 1,
    label: "form.contacts.inputs.source.options.google",
  },
  {
    value: 2,
    label: "form.contacts.inputs.source.options.social_media",
  },
  {
    value: 3,
    label: "form.contacts.inputs.source.options.recommendation",
  },
  {
    value: 4,
    label: "form.contacts.inputs.source.options.funeral_agency",
  },
  {
    value: 5,
    label: "form.contacts.inputs.source.options.partner",
  },
  {
    value: 6,
    label: "form.contacts.inputs.source.options.other",
  },
];

export const transportFields = [
  {
    name: "country",
    type: "select",
    label: "form.transport.inputs.country.label",
    placeholder: "form.transport.inputs.country.placeholder",
    required: true,
    options: countryOptions,
  },
  {
    name: "destination_country",
    type: "select",
    label: "form.transport.inputs.destination_country.label",
    placeholder: "form.transport.inputs.destination_country.placeholder",
    required: true,
    options: countryOptions,
  },
  {
    name: "transport",
    type: "select",
    label: "form.transport.inputs.transport.label",
    placeholder: "form.transport.inputs.transport.placeholder",
    required: true,
    options: [
      {
        value: 1,
        label: "form.transport.inputs.transport.list.1",
      },
      {
        value: 2,
        label: "form.transport.inputs.transport.list.2",
      },
      {
        value: 3,
        label: "form.transport.inputs.transport.list.3",
      },
    ],
  },
  {
    name: "city",
    type: "text",
    maxLength: 50,
    label: "form.transport.inputs.city.label",
    placeholder: "form.transport.inputs.city.placeholder",
    required: true,
  },
  {
    name: "destination_city",
    type: "text",
    maxLength: 50,
    label: "form.transport.inputs.destination_city.label",
    placeholder: "form.transport.inputs.destination_city.placeholder",
    required: true,
  },
  {
    name: "date",
    type: "date",
    label: "form.transport.inputs.date.label",
    placeholder: "form.transport.inputs.date.placeholder",
  },
];

export const contactFields = [
  {
    name: "phone",
    type: "tel",
    maxLength: 15,
    label: "form.contacts.inputs.phone.label",
    placeholder: "form.contacts.inputs.phone.placeholder",
    required: true,
  },
  {
    name: "name",
    type: "text",
    maxLength: 60,
    label: "form.contacts.inputs.name.label",
    placeholder: "form.contacts.inputs.name.placeholder",
    required: true,
  },
  {
    name: "email",
    type: "email",
    maxLength: 100,
    label: "form.contacts.inputs.email.label",
    placeholder: "form.contacts.inputs.email.placeholder",
    required: true,
  },
  {
    name: "heard",
    type: "select",
    label: "form.contacts.inputs.source.label",
    placeholder: "form.contacts.inputs.source.placeholder",
    options: SourceList,
  },
];

export const coffinOptions = [
  {
    id: "1",
    label: "form.transport.inputs.coffin.coffin_list.1",
    icon: "icon-coffin1",
  },
  {
    id: "2",
    label: "form.transport.inputs.coffin.coffin_list.2",
    icon: "icon-coffin2",
  },
  {
    id: "3",
    label: "form.transport.inputs.coffin.coffin_list.3",
    icon: "icon-ashes",
  },
];
