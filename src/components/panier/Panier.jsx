import { useState } from "react"
import "./panier.css"
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

export default function Panier() {
    const [added, setAdded] = useState(true)
    const [paiement, setPaiement] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [couponCode, setCouponCode] = useState("")
    
    
    //Pour tester le panier, à jeter pour remplacer par du redux
    const pizzaPrice = 12.99
    const deliveryPrice = 1.99
    const totalPrice = (pizzaPrice * quantity) + deliveryPrice
    const minimumOrder = 15.00

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change
        if (newQuantity > 0) {
            setQuantity(newQuantity)
        }
    }

    return (<>
    

        <div className="panierAll">


        
            <div className="panierCard">
                <div className="contentPanier">
                    <h1>Panier d'achat</h1>

                

                    {added ? (<>
                        <div className="pizzaPanier">
                            <div className="nameAndPrice">
                                <h3>Pizza Margherita</h3>
                                <span className="price">€{pizzaPrice}</span>
                            </div>
                            
                            <p className="ingredientSuppr">Sans champignons</p>

                            <div className="addPizza">
                                <div className="compteur">
                                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => handleQuantityChange(1)}>+</button>
                                </div>

                                <div className="modifier">
                                    <span className="modifierBtn">Modifier</span>
                                    <span className="suppr" onClick={() => setAdded(false)}>Supprimer</span>
                                </div>
                            </div>
                        </div>
                        
                        </>
                    ) : (
                        <div className="panierVide">
                            <p>Panier vide</p>
                        </div>
                    )}

                    
                    {!paiement && added && (
                        <div className="couponDiv">
                            <input 
                                type="text" 
                                placeholder="Vous pouvez entrer votre coupon"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                            />
                            <button>AJOUTER</button>
                        </div>
                    )}
                </div>

                
                <div className="footerPanier">
                    <div className="totalPrix">
                        {totalPrice < minimumOrder && <div className="label livraison">
                            <span>Livraison</span>
                            <span>€{deliveryPrice}</span>
                        </div>}
                        
                        <div className="label">
                            <strong>Total</strong>
                            <strong>€{added ? totalPrice.toFixed(2): '0,00'}</strong>
                        </div>
                    </div>

                

                    
                    
                </div>
                    
                </div>
                <div className="btnCommander">
                                <span className="quantite">{added ? quantity : 0}</span>
                                <span className="commander">Commander</span>
                                <span className="prixFinal">€{added ? totalPrice.toFixed(2) : '0,00'}</span>
                        </div>

                        {totalPrice < minimumOrder && (
                            <div className="commandeMinimum">
                                <FontAwesomeIcon icon={faMotorcycle} />
                                <div className="text">
                                    <h4>Commander</h4>
                                    <p>Livraison à partir d'un montant minimum de commande de €{minimumOrder}.</p>
                                </div>
                            </div>
                        )}
        </div>
        </>
    )
}