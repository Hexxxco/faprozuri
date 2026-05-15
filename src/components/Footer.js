import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/logo.svg";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/*<a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>*/}
              {/*<a href="#" onClick={() => openInNewTab('https://www.instagram.com/sports_livesur/')}><img src={navIcon3} alt="Icon" /></a>*/}
            </div>
            <p> faproplus v20 2024.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
