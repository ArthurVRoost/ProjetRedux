import './details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Panier from '../../components/panier/Panier';
import { useDispatch, useSelector } from 'react-redux';
import { ajouter } from '../../features/pizzaSlice';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Details() {
    const { pizzaName } = useParams()
    const { state } = useLocation();
    const pizza = state?.pizza;
    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate(-1) 
    } 
    const handleGoHome = () => {
        navigate('/');
    }
    const dispatch = useDispatch()
    const selectedPizza = useSelector(state=> state.pizza.pizzaSelected)
    useEffect(() => {
    document.body.classList.add('details-page');
    
    return () => {
      document.body.classList.remove('details-page');
    };
  }, []);
    const [quantities, setQuantities] = useState(
        selectedPizza.ingredients.map(() => 1)
    );

   
    const decrement = (index) => {
        setQuantities(prev => prev.map((q, i) => i === index && q > 0 ? q - 1 : q));
    };

    
    const increment = (index) => {
        setQuantities(prev => prev.map((q, i) => i === index && q < 2 ? q + 1 : q));
    };
    return (
        <>
        <div className='divPage'>

        
            <div className='returnDiv'>
                <span onClick={handleBackClick} className='iconReturn'><FontAwesomeIcon icon={faArrowLeft} /></span>
                <span onClick={handleBackClick} className='returnText'>Retour</span>
            </div>
            
            <div className="divDetails">
                <div className="mobileHeader">
                    <span className="closeIcon" onClick={handleGoHome}>{selectedPizza.name}<span className='detailsX'>✕</span></span>
                </div>
                <div className="imgPizza">
                    <img src={selectedPizza.image} alt="Pizza" />
                </div>
                <div className="rightDiv">
                    <div className="title">
                        <h1>{selectedPizza.name}</h1>
                        <span>€{selectedPizza.price.toFixed(2)}</span>
                    </div>
                    <div className='description'>
                        {selectedPizza.description}
                    </div>
                    <div className="ingredients">
                    <h2>Ingrédients</h2>
                    <ul>
                        {selectedPizza.ingredients.map((element, index) => (
    <div className='detailsDivMap' key={index}>
        <div>
            <li className='listIngredient'><span>{element.name}</span></li>
        </div>
        <div className="compteurDetails">
            <button
                className={`btnMoins ${quantities[index] === 0 ? 'disabled' : ''}`}
                onClick={() => decrement(index)}
                disabled={quantities[index] === 0}
            >
                -
            </button>
            <span>{quantities[index]}</span>
            <button
                className={`btnPlus ${quantities[index] === 2 ? 'disabled' : ''}`}
                onClick={() => increment(index)}
                disabled={quantities[index] === 2}
            >
                +
            </button>
        </div>
    </div>
))}

                        
                        
                    </ul>
                    </div>
                    <div className="ajoutPanier" onClick={()=> dispatch(ajouter(selectedPizza),handleBackClick()
                    )}>
                        <span className="ajouterAuPanier">Ajouter au panier</span>
                        <span className="prixAjoutPanier">{selectedPizza.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
        <Panier show={false}/>
        </>
    );
}
