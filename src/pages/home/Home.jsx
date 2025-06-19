import './home.css'
import data from '/src/data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Panier from '../../components/panier/Panier';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    
    const navigate = useNavigate()
    const handleDetails = (pizza) => {
    navigate(`/details/${pizza.name}`, { state: { pizza } })
}
    
    return(
        <>
            <div className='pageHome'>
                <div className='divHome'>
                    {data.map((pizza, index)=>(
                        <div key={index} className='homeDivP'>
                            <img className='homeImg' src={pizza.image} alt={pizza.image} />
                            <div className='homeDiv1'>
                                <h3 className='homeNom'>{pizza.name}</h3>
                                <div className='homeDescription'>
                                        <p>{pizza.description}</p>
                                </div>
                                <div className='homeDiv2'>
                                    <div className='homeContent'>
                                        <p className='homeP1'>à partir de</p>
                                        <p className='homePrix'>€{pizza.price}</p>
                                        
                                        
                                        <FontAwesomeIcon onClick={() => handleDetails(pizza)} className='homeIcon'  icon={faPlus} />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='divHome3'>
                    <Panier/>
                </div>
                
            </div>
          
        </>
    )
}