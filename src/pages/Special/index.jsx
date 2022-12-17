import "./style.css";
import cardImg1 from "./card1.png";
import cardImg2 from "./card2.png"
import cardImg3 from "./card3.png"

import Card from "../../sections/Card";
export default function Special() {
  return (
    <div className="special" id="special">
      <h3 className="sTitle">Special</h3>
      <p>What makes us special</p>
      <div className="cards">
        <Card
          cardImg={cardImg1}
          cardTitle="Fresh food"
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
        />

        <Card
          cardImg={cardImg2}
          cardTitle="skilled Chef"
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
        />

        <Card
          cardImg={cardImg3}
          cardTitle="Exotic dishes"
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
        />
      </div>
    </div>
  );
}
