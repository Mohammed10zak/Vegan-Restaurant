import './style.css'
export default function Chef({chefImg,num,content}) {
    return (
    <div className='chef'>
        <img src={chefImg} alt="chefImg" className='chefImg'/>
        <div className='chefNum'>
            <p className='num'>{num}</p>
            <p className='content'>{content}</p>
        </div>
    </div>
    )
}