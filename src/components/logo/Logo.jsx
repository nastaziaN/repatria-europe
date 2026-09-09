import { useTranslation } from "react-i18next";
import "./styles.scss";
import LogoImg from "../../img/main-logo.png";
import { BRAND } from "../../constants/general/Constants";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="logo-wrapper">
      <img src={LogoImg} alt="logo" className="logo-img" />
      <div className="brand">
        <span className="brand-name">{BRAND.name}</span>
        <span className="brand-location">{BRAND.location}</span>
      </div>
    </div>
  );
};

export default Logo;
