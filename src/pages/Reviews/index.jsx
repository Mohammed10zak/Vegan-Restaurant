import "./style.css";
import ellipImg from "./Ellipse.png";
import ellipImg2 from "./Ellipse_1.png";

import stars from "./stars.png";
import ReviewsCard from "../../sections/ReviewsCard";
export default function Reviews() {
  return (
    <div className="reviews">
      <h3 className="reviewsTitle">Reviews</h3>
      <p className="reviewsDisc">words from our food lovers</p>
      <div className="reviewsCards">
        <ReviewsCard
          reviewsImg={ellipImg}
          nameReviewer="Alex andrina"
          starsImg={stars}
          reviewP="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />

        <ReviewsCard
          reviewsImg={ellipImg}
          nameReviewer="Alex andrina"
          starsImg={stars}
          reviewP="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />

        <ReviewsCard
          reviewsImg={ellipImg2}
          nameReviewer="Alex andrina"
          starsImg={stars}
          reviewP="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
      </div>
    </div>
  );
}
