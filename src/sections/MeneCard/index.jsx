import './style.css'

export default function MenuCard ({menuImg,itemTitle,itemDisc,price}) {
    return (
        <div className='menu_card'>
            <img src={menuImg} alt="menuImg" className='menuImg'/>
            <div className='item'>
                <p className='itemTitle'>{itemTitle}</p>
                <p className='itemDisc'>{itemDisc}</p>
            </div>
            <div className='line'></div>
            <span className='price'>{price}</span>
        </div>
    )
}