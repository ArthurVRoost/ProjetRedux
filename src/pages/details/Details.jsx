import './details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Panier from '../../components/panier/Panier';
import { useDispatch, useSelector } from 'react-redux';
import { ajouter, modifierQuantiteIngredient } from '../../features/pizzaSlice';
import { useEffect, useState } from 'react';


export default function Details() {
    const { pizzaName } = useParams()
    const { state } = useLocation();
    const pizza = state?.pizza;
    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate(-1) 
    } 

    const location = useLocation()
    const handleGoHome = () => {
        navigate('/');
    }
    const dispatch = useDispatch()
    const selectedPizza = useSelector(state=> state.pizza.pizzaSelected)
   const pizzaToAdd = {
    ...selectedPizza,
    customIngredients: selectedPizza.ingredients
        .filter(i => i.quantite !== undefined && i.quantite !== 1)
        .map(i => ({
        name: i.name,
        type: i.quantite === 0 ? "sans" : "supplément"
        })),
    idPanier: selectedPizza.idPanier ?? Date.now() 
    };



    useEffect(() => {
    document.body.classList.add('details-page');
    
    return () => {
      document.body.classList.remove('details-page');
    };
  }, []);

    {console.log(location)
    }
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
                    <img className='imgPizza1' src={selectedPizza.image} alt="Pizza" />
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
                                        className={`btnMoins ${element.quantite=== 0 ? 'disabled' : ''}`}
                                        onClick={() => dispatch(modifierQuantiteIngredient({ name: element.name, operation: "moins" }))}
                                        disabled={element.quantite === 0}
                                    >
                                        -
                                    </button>
                                    <span>{element.quantite ?? 1}</span>
                                    <button
                                        className={`btnPlus ${element.quantite === 2 ? 'disabled' : ''}`}
                                        onClick={() => dispatch(modifierQuantiteIngredient({ name: element.name, operation: "plus" }))}
                                        disabled={element.quantite === 2}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}



                    </ul>
                        
                    
                    </div>
                    <div
                    className="ajoutPanier"
                    onClick={() => {
                        dispatch(ajouter(pizzaToAdd));
                        handleBackClick();
                    }}
                    >

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
