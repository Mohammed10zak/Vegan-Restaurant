import "./style.css";
import aboutUs from "./aboutus.png";
import cookingImg from "./cooking.png";
import cheaf1 from "./cheaf1.png";
import cheaf2 from "./cheaf2.png";
import cheaf3 from "./cheaf3.png";
import Header from "../Header";
import About from "../../pages/About";
import Container from "../Container";
import Special from "../../pages/Special";
import Menu from "../../pages/Menu";
import Flat from "../../sections/Flat";
import Chef from "../../sections/Chef";
import Reviews from "../../pages/Reviews";
import Blogs from "../../pages/Blogs";
import Contact from "./../../pages/Contact/index";
import Subscribe from "../../sections/Subscribe";
import Footer from "../../pages/Footer";
export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <About
          mainTitle="About us"
          mainP="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
          mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interpharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
          mainImg={aboutUs}
        />
        <Special />
        <Menu />
        <Flat />
        <About
          mainTitle="Cooking ingredients"
          mainP="What goes in"
          mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
          mainImg={cookingImg}
        />
        <div className="chefs">
          <Chef chefImg={cheaf3} num="250+" content="Delicacy" />

          <Chef chefImg={cheaf2} num="10+" content="renowed chefs" />

          <Chef chefImg={cheaf1} num="30+" content="Members" />
        </div>
        <Reviews />
        <Blogs />
        <Contact />
        <Subscribe />
        <Footer />
      </Container>
    </>
  );
}
