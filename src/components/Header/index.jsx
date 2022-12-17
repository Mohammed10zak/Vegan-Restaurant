import "./style.css";
import Navbar from "../../sections/Navbar";
import Button from "../../sections/Button";
export default function Header() {
  return (
    <>
      <div className="headbg"></div>
      <Navbar />
      <h1 className="title">Welcome To Golden View Dine</h1>
      <p className="headp">
        Explore the authentic vegan dishes with your friends and family
      </p>
      <div className="head_btn">
        <Button myBtn="Read more" />
      </div>
    </>
  );
}
