import { CONTACTS, SOCIAL_LINKS } from "../general/Constants";

export const quickContacts = [
  {
    id: 1,
    label: "Whatsapp",
    type: "whatsapp",
    icon: "icon-whatsapp",
    link: SOCIAL_LINKS.whatsapp,
  },
  {
    id: 2,
    label: "Viber",
    type: "viber",
    icon: "icon-viber",
    link: SOCIAL_LINKS.viber,
  },
  {
    id: 3,
    label: "Telegram",
    type: "telegram",
    icon: "icon-telegram",
    link: SOCIAL_LINKS.telegram,
  },
  {
    id: 4,
    label: "labels.phone",
    type: "phone",
    contact: CONTACTS.phone.value,
    icon: "icon-phone",
    link: CONTACTS.phone.link,
  },
];

export const contacts = [
  {
    id: 1,
    type: "phone",
    label: "labels.phone",
    contact: CONTACTS.phone.value,
    icon: "icon-phone",
    link: CONTACTS.phone.link,
  },
  {
    id: 2,
    label: "Whatsapp",
    contact: CONTACTS.phone.value,
    icon: "icon-whatsapp",
    link: SOCIAL_LINKS.whatsapp,
  },
  {
    id: 3,
    label: "Email",
    contact: CONTACTS.email.value,
    icon: "icon-email",
    link: CONTACTS.email.link,
  },
];

export const socials = [
  {
    id: 1,
    messenger: "Viber",
    icon: "icon-viber",
    link: SOCIAL_LINKS.viber,
  },
  {
    id: 2,
    messenger: "Telegram",
    icon: "icon-telegram",
    link: SOCIAL_LINKS.telegram,
  },
  {
    id: 3,
    messenger: "Instagram",
    icon: "icon-instagram",
    link: SOCIAL_LINKS.instagram,
  },
  {
    id: 4,
    messenger: "Facebook",
    icon: "icon-facebook",
    link: SOCIAL_LINKS.facebook,
  },
];
