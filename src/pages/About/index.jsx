import './style.css'
import Button from '../../sections/Button'
export default function About ({mainTitle,mainP,mainContent,mainImg}) {
    return (
        <div className='about' id="about">
        <h3 className='mainTitle'>{mainTitle}</h3>
        <p className='mainP'>{mainP}</p>
        <div className='mainContent'>{mainContent}</div>
        <div className='mainBtn'><Button myBtn="Read more" /></div>
        <img src={mainImg} alt="mainImg" className='mainImg'/>
        </div>
        
    )
}