import "./style.css"
export default function Card ({cardImg,cardTitle,cardContent}) {
    return (
        <div className="card">
            <img src={cardImg} alt="cardImg" className="cardImg" />
            <h4 className="cardTitle">{cardTitle}</h4>
            <div className="cardContent">{cardContent}</div>
        </div>
    )
}