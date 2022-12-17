import "./style.css";
import MenuCard from "../../sections/MeneCard";
import item1 from "./item1.png";
import item2 from "./item2.png";
import item3 from "./item3.png";
import item4 from "./item4.png";
import item5 from "./item5.png";
import item6 from "./item6.png";

export default function Menu() {
  return (
    <div className="menu" id="menu">
      <h3 className="menuTitle">Straight From Kitchen</h3>
      <p className="subTitle">Our Menu</p>
      <div className="Menus">
        <div>
          <MenuCard
            menuImg={item1}
            itemTitle="Lorem ipsum dolor sit amet"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 222"
          />

          <MenuCard
            menuImg={item2}
            itemTitle="Vivamus sodales augue vita"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 590"
          />

          <MenuCard
            menuImg={item3}
            itemTitle="Pellentesque semper semper"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 130"
          />

          <MenuCard
            menuImg={item4}
            itemTitle="Phasellus convallis maximus"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 222"
          />

          <MenuCard
            menuImg={item5}
            itemTitle="Vestibulum est turpis"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 148"
          />

          <MenuCard
            menuImg={item6}
            itemTitle="Nullam elementum magna"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 200"
          />
        </div>
        <div>
          <MenuCard
            menuImg={item6}
            itemTitle="Nullam elementum magna"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 200"
          />

          <MenuCard
            menuImg={item5}
            itemTitle="Nullam elementum magna"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 471"
          />
          <MenuCard
            menuImg={item3}
            itemTitle="Nullam elementum magna"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 898"
          />
          <MenuCard
            menuImg={item2}
            itemTitle="Nullam elementum magna"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 566"
          />
          <MenuCard
            menuImg={item4}
            itemTitle="Nullam elementum magna"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 400"
          />
          <MenuCard
            menuImg={item1}
            itemTitle="Nullam elementum magna"
            itemDisc="Lorem ipsum dolor sit amet"
            price="Rs 255"
          />
        </div>
      </div>
    </div>
  );
}
