import './details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Details() {
    return (
        <>
        <div className='divPage'>

        
            <div className='returnDiv'>
                <span className='iconReturn'><FontAwesomeIcon icon={faArrowLeft} /></span>
                <span className='returnText'>Retour</span>
            </div>
            
            <div className="divDetails">
                <div className="imgPizza">
                    <img src="https://cdn-catalog.pizzahut.be/images/be/20220712142929671.jpg" alt="Pizza" />
                </div>
                <div className="rightDiv">
                    <div className="title">
                        <h1>Margherita</h1>
                        <span>14€</span>
                    </div>
                    <div className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aperiam iure laboriosam perspiciatis quae, 
                    </div>
                    <div className="ingredients">
                    <h2>Ingrédients</h2>
                    <ul>
                        <li className='listIngredient'>
                            <img src="https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Champignons-700x700.png" alt="" style={{width:50}}/>
                            <span>Champignons</span>
                            <div className="compteurDetails">
                                        <button className='btnMoins'>-</button>
                                        <span>1</span>
                                        <button className='btnPlus' >+</button>
                                    </div>

                        </li>

                        <li className='listIngredient'>
                            <img src="https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Champignons-700x700.png" alt="" style={{width:50}}/>
                            <span>Champignons</span>
                            <div className="compteurDetails">
                                        <button className='btnMoins'>-</button>
                                        <span>1</span>
                                        <button className='btnPlus' >+</button>
                                    </div>

                        </li>

                        <li className='listIngredient'>
                            <img src="https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Champignons-700x700.png" alt="" style={{width:50}}/>
                            <span>Champignons</span>
                            <div className="compteurDetails">
                                        <button className='btnMoins'>-</button>
                                        <span>1</span>
                                        <button className='btnPlus' >+</button>
                                    </div>

                        </li>
                        <li className='listIngredient'>
                            <img src="https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Champignons-700x700.png" alt="" style={{width:50}}/>
                            <span>Champignons</span>
                            <div className="compteurDetails">
                                        <button className='btnMoins'>-</button>
                                        <span>1</span>
                                        <button className='btnPlus' >+</button>
                                    </div>

                        </li>
                        <li className='listIngredient'>
                            <img src="https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Champignons-700x700.png" alt="" style={{width:50}}/>
                            <span>Champignons</span>
                            <div className="compteurDetails">
                                        <button className='btnMoins'>-</button>
                                        <span>1</span>
                                        <button className='btnPlus' >+</button>
                                    </div>

                        </li>

                        
                        
                    </ul>
                    </div>
                    <div className="ajoutPanier">
                        <span className="ajouterAuPanier">Ajouter au panier</span>
                        <span className="prixAjoutPanier">€14.00</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
