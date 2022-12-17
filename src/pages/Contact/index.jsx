import "./style.css";
import resLogo from "./resLogo.png";
import insta from "./insta.svg";
import twitter from "./tweitter.svg";
import tube from "./tube.svg";
import msg from "./msg.svg";
import loc from "./loc.svg";
import phone from "./phone.svg";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact_1">
        <img src={resLogo} className="logo" alt="logo" />
        <span className="resName">Golden View Dine</span>
        <div className="resDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
        </div>
        <div className="socialIcon">
          <img src={insta} alt="insta" className="insta" />
          <img src={twitter} alt="twitter" className="twitter" />
          <img src={tube} alt="tube" className="tube" />
        </div>
      </div>

      <div className="links">
        <div>
          <p className="linkTitle">Other Links</p>
          <div>
            <li>Privacy&Policy</li>
            <li>Terms & conditions</li>
            <li>Blogs</li>
            <li>our team</li>
            <li>Our kitchen</li>
          </div>
        </div>
      </div>

      <div className="contact_2">
        <p className="contact2_Title">Contact Us</p>
        <div>
          <li>
            <img className="con" alt="loc" src={msg} />
            <a href="/#">Gogreendineservice@gmail.com</a>
          </li>
          <li>
            <img className="con" alt="loc" src={loc} />
            <a href="/#">
              AZ complex bylane3 Mandari Rd Mumbai 1100867
            </a>
          </li>
          <li>
            <img className="con" alt="loc" src={phone} />
            <a href="/#">+1800 287 256</a>
          </li>
        </div>
      </div>
    </div>
  );
}
