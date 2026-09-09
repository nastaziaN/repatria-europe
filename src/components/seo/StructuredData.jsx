import { useEffect } from "react";
import { CONTACTS, SOCIAL_LINKS } from "../../constants/general/Constants";

const StructuredData = () => {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://repatria-europe.com/#organization",
      name: "Repatria Europe",
      url: "https://repatria-europe.com/",
      logo: "https://repatria-europe.com/favicon.png",
      email: CONTACTS.email.value,
      telephone: CONTACTS.phone.value,
      sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACTS.phone.value,
        contactType: "customer service",
        availableLanguage: ["Ukrainian", "English"],
      },
    };

    let script = document.querySelector('script[data-schema="organization"]');

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.schema = "organization";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
