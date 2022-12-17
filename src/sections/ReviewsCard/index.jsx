import "./style.css";
export default function ReviewsCard({
  reviewsImg,
  nameReviewer,
  starsImg,
  reviewP,
}) {
  return (
    <div className="reviewsCard">
      <div className="rev">
        <img
          src={reviewsImg}
          alt="reviewsImg"
          className="reviewsImg"
          width="160px"
        />
        <div>
          <h5 className="nameReviewer">{nameReviewer}</h5>

          <img src={starsImg} alt="starsImg" className="starsImg" />
        </div>
      </div>
      <div>
        <p className="reviewP">{reviewP}</p>
      </div>
    </div>
  );
}
