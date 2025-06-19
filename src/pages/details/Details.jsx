import './details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Panier from '../../components/panier/Panier';
import { useDispatch } from 'react-redux';
import { ajouter } from '../../features/pizzaSlice';


export default function Details() {
    const { pizzaName } = useParams()
    const { state } = useLocation();
    const pizza = state?.pizza;
    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate(-1) 
    } 
    const dispatch = useDispatch()
    return (
        <>
        <div className='divPage'>

        
            <div className='returnDiv'>
                <span onClick={handleBackClick} className='iconReturn'><FontAwesomeIcon icon={faArrowLeft} /></span>
                <span onClick={handleBackClick} className='returnText'>Retour</span>
            </div>
            
            <div className="divDetails">
                <div className="imgPizza">
                    <img src={pizza.image} alt="Pizza" />
                </div>
                <div className="rightDiv">
                    <div className="title">
                        <h1>{pizza.name}</h1>
                        <span>€{pizza.price.toFixed(2)}</span>
                    </div>
                    <div className='description'>
                        {pizza.description}
                    </div>
                    <div className="ingredients">
                    <h2>Ingrédients</h2>
                    <ul>
                        {pizza.ingredients.map((element,index )=>(
                            <div className='detailsDivMap'>
                                <div>
                                    <li className='listIngredient' key={index}><span>{element.name}</span></li>
                                </div>
                                <div className="compteurDetails">
                                    <button className='btnMoins'>-</button>
                                    <span>1</span>
                                    <button className='btnPlus' >+</button>
                                </div>
                            </div>
                        ))}

                        
                        
                    </ul>
                    </div>
                    <div className="ajoutPanier" onClick={()=> dispatch(ajouter(pizza),console.log(pizza)
                    )}>
                        <span className="ajouterAuPanier">Ajouter au panier</span>
                        <span className="prixAjoutPanier">{pizza.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
        <Panier/>
        </>
    );
}
