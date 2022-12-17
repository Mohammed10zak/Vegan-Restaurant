import "./style.css";
import email from "./email.svg";
import Button from "../../sections/Button";


export default function Subscribe() {

  return (
    <div className="subscribe">
      <div className="sub_msg">
        <li >
          <img className="email" alt="email" src={email} />
          <a href="/#" className="email_anchor">Subscribe to our Newsletter</a>
        </li>
      </div>

      <div>
        <input placeholder="Your Email id" className="email_id"></input>
      </div>
      <div>
        <Button myBtn="Subscribe"/>
      </div>
    </div>
  );
}
