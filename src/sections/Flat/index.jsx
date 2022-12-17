import './style.css'
import Button from '../Button'
import image from './removebg-2.png'
export default function Flat () {
    return (
        <div className="flat">
            <div className="logoFlat">
                <img src={image} alt="" />
            </div>
            <div className="contentFlat">
                <h3 className="flatTitle">Come join us for a lunch this weekend and enjoy</h3>
                <p className="flatSale">FLAT 10% OFF</p>
                <div className="flatBtn"><Button myBtn="Book Table" /></div>
            </div>
            <div className="logoFlat">
                <img src={image} alt="" />
            </div>
        </div>
    )
}