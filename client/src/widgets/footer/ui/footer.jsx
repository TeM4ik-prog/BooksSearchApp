import "./footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__nav">
        <Link to={""} className="footer__nav-link">
          About us
        </Link>
        <Link to={""} className="footer__nav-link">
          Contacts{" "}
        </Link>
      </div>

      <div className="footer__contacts">
        <img src="icons/links/telegram.svg" className="footer__contact-icon" />
        <img src="icons/links/gitHub.svg" className="footer__contact-icon" />
        <img src="icons/links/mail.svg" className="footer__contact-icon" />
      </div>
    </div>
  );
}

export default Footer;
