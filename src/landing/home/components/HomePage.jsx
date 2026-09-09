import { useState } from "react";
import { useTranslation } from "react-i18next";
import Seo from "../../../components/seo/Seo";
import AnimationGlobal from "../../../components/animation/AnimationGlobal";
import Hero from "./Hero";
import Services from "./Services";
import Fleet from "./Fleet";
import WhyUs from "./WhyUs";
import Countries from "./Countries";
import Process from "./Process";
import Documents from "./Documents";
import DocsProcess from "./DocsProcess";
import FormSection from "./FormSection";

const HomePage = () => {
  const { t } = useTranslation();

  const [selectedTransport, setSelectedTransport] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <>
      <Seo
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        canonical="/"
      />
      <AnimationGlobal />
      <Hero />
      <Services />
      <Fleet onSelectTransport={setSelectedTransport} />
      <WhyUs />
      <Countries onSelectCountry={setSelectedCountry} />
      <Process />
      <Documents />
      <DocsProcess />
      <FormSection
        selectedTransport={selectedTransport}
        selectedCountry={selectedCountry}
      />
    </>
  );
};

export default HomePage;
