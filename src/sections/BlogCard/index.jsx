import './style.css'

export default function BlogCard ({blogImg,blogT,blogP,blogBtn}) {
    return (
        <div className='blogCard'>
            <img src={blogImg} alt="blogImg" className='blogImg' />
            <div className='blogContent'>
            <div className='blogT'>{blogT}</div>
            <p className='blogP'>{blogP}</p>
            <button className='blogBtn'>{blogBtn}</button>
            </div>
        </div>
    )
}