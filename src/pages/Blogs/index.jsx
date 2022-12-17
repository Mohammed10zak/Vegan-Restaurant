import "./style.css";
import BlogCard from "../../sections/BlogCard";
import blog1 from "./blog1.png";
import blog2 from "./blog2.png";
import blog3 from "./blog3.png";

export default function Blogs() {
  return (
    <div className="blogs" id="blogs">
      <h3 className="blogsTitle">Blogs</h3>
      <p className="blogsDisc">words from our food lovers</p>
      <div className="cardBlog">
        <BlogCard
          blogImg={blog1}
          blogT="Cooking Dining Experience"
          blogP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          blogBtn="Read More"
        />

         <div className='blogCard'>
            <div className='blogContent'>
            <div className='blogT'>Cooking Dining Experience</div>
            <p className='blogP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
            <button className='blogBtn'>Read More</button>
            <img src={blog2} alt="blogImg" className='blogImgReverse' />

            </div>
        </div>
        <BlogCard
          blogImg={blog3}
          blogT="Cooking Dining Experience"
          blogP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          blogBtn="Read More"
        />
      </div>
    </div>
  );
}
