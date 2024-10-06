import { useState } from "react"
const Card = ({ id, name, info, image, price, remove }) => {

    const [read, setRead] = useState(false)
    const desc = read ? info : info.substring(0, 100) + "...."

    // console.log(name , price)
    return (
        <div>
            <section className="card">
                <img src={image} alt="image" />
                <div style={{width:'96%',margin:'auto'}}>
                    <h4 className="title">{name}</h4>
                    <p className="price">₹{price}</p>
                    <div className="info">{desc} {read ? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { setRead(false) }}>read less</span> : <span onClick={() => { setRead(true) }} style={{ color: 'green', cursor: 'pointer' }}>read more</span>} </div>
                </div>
                <button className="card_button" onClick={() => { remove(id) }}>Delete</button>
            </section>
        </div>
    )
}
export default Card