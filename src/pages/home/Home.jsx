import './home.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Panier from '../../components/panier/Panier';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pizzaSelection } from '../../features/pizzaSlice';

export default function Home() {
    const [showPanier, setShowPanier] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDetails = (pizza) => {
        dispatch(pizzaSelection(pizza))
        navigate(`/details/${pizza.name}`)
    }
    
    const myBigPizza = useSelector(state=> state.pizza.allPizzas)
    const allPanier = useSelector(state=> state.pizza.panier)
    
    // Calculer le nombre total d'articles dans le panier
    const totalItems = allPanier.reduce((total, item) => total + (item.quantite || 1), 0);
    
    return(
        <>
            <div className='pageHome'>
                <div className='divHome'>
                    {myBigPizza.map((pizza, index)=>(
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
                                        <p className='homePrix'>€{pizza.price.toFixed(2)}</p>
                                        
                                        <FontAwesomeIcon onClick={() => handleDetails(pizza)} className='homeIcon'  icon={faPlus} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Panier desktop - affiché uniquement sur desktop */}
                <div className='divHome3 desktop-only'>
                    <Panier show={true}/>
                </div>
                
                {/* Bouton Commander mobile - toujours présent sur mobile */}
                <div 
                    className={`mobile-commander-btn mobile-only ${allPanier.length === 0 ? 'disabled' : ''}`}
                    onClick={allPanier.length > 0 ? () => setShowPanier(true) : undefined}
                >
                    <span className='commander-text'>Commander</span>
                    {allPanier.length > 0 && <span className='commander-count'>{totalItems}</span>}
                </div>
                
                {/* Modal Panier mobile */}
                {showPanier && (
                    <div className='panier-modal'>
                        <div className='panier-modal-content'>
                            <button className='close-panier' onClick={() => setShowPanier(false)}>
                                ×
                            </button>
                            <Panier onClose={() => setShowPanier(false)} show={true} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}