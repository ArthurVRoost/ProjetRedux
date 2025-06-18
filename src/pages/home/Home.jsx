import './home.css'
import data from '/src/data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
    const pizzaMap = data.map(pizza=>({
        image: pizza.image,
        name: pizza.name,
        price: pizza.price
    }))
    return(
        <>
            <div className='divHome'>
                {data.map((pizza, index)=>(
                    <div key={index}className='homeDivP'>
                        <img className='homeImg' src={pizza.image} alt={pizza.image} />
                        <div className='homeDiv1'>
                            <h3 className='homeNom'>{pizza.name}</h3>
                            <div className='homeDiv2'>
                                <p className='homeP1'>à partir de</p>
                                <p className='homePrix'>{pizza.price}</p>
                                <FontAwesomeIcon className='homeIcon' icon={faPlus} />
                            </div>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </>
    )
}