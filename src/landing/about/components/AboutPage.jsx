import { useTranslation } from "react-i18next";
import Seo from "../../../components/seo/Seo";
import AnimationGlobal from "../../../components/animation/AnimationGlobal";
import About from "./About";
import History from "./History";
import Values from "./Values";
import Benefits from "./Benefits";
import Cta from "./Cta";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        canonical="/about"
      />
      <AnimationGlobal />
      <About />
      <History />
      <Values />
      <Benefits />
      <Cta />
    </>
  );
};

export default AboutPage;
