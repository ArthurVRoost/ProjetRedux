import './home.css'
import data from '/src/data/data.json'
export default function Home() {
    const pizzaMap = data.map(pizza=>({
        image: pizza.image,
        name: pizza.name,
        price: pizza.price
    }))
    return(
        <>
            <div className='pizza-container'>
                {data.map((pizza, index)=>(
                    <div key={index}className='pizza-card'>
                        <img src={pizza.image} alt="" />
                        <h3>{pizza.name}</h3>
                        <p>{pizza.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}