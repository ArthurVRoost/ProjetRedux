

import { useState } from "react"
import "./panier.css"
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { supprimer, ajoutEncore, retirerPizza } from "../../features/pizzaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Panier({ onClose }) {
    const [added, setAdded] = useState(true)
    const [paiement, setPaiement] = useState(false)
    const [couponCode, setCouponCode] = useState("")
    
    const dispatch = useDispatch();
    const allPanier = useSelector(state => state.pizza.panier)
    const navigate = useNavigate()
    console.log(allPanier);
   

    const handleCommander = () => {
        // Logique de commande
        console.log("Commande passée!");
        if (onClose) {
            onClose(); // Fermer le modal sur mobile après commande
        }
    }

    // Calculer le total
    const calculateTotal = () => {
        return allPanier.reduce((total, item) => {
            return total + (item.price * (item.quantite || 1));
        }, 0);
    }

    const totalPrice = calculateTotal();
    const totalItems = allPanier.reduce((total, item) => total + (item.quantite || 1), 0);

    return (
        <div className="panierAll">
            <div className="panierCard">
                <div className="contentPanier">
                    <h1>Panier d'achat</h1>

                    {added && allPanier.length > 0 ? (
                        <>
                            {allPanier.map((element, index) => (
                                <div key={index} className="pizzaPanier">
                                    <div className="nameAndPrice">
                                        {console.log(element)}
                                        <h3>{element.name}</h3>
                                        <span className="price">€{(element.price * (element.quantite || 1)).toFixed(2)}</span>
                                    </div>
                                    
                                    <p className="ingredientSuppr">Sans champignons</p>

                                    <div className="addPizza">
                                        <div className="compteur">
                                            <button onClick={() => dispatch(retirerPizza(element))}>-</button>
                                            <span>{element.quantite || 1}</span>
                                            <button onClick={() => dispatch(ajoutEncore(element))}>+</button>
                                        </div>

                                        <div className="modifier">
                                            <span className="modifierBtn" onClick={()=>navigate(`/details/${element.name}`, { state: { element } })}>Modifier</span>
                                            <span className="suppr" onClick={() => dispatch(supprimer(element))}>Supprimer</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="panierVide">
                            <p>Panier vide</p>
                        </div>
                    )}

                    {!paiement && added && allPanier.length > 0 && (
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

                {added && allPanier.length > 0 && (
                    <div className="footerPanier">
                        <div className="totalPrix">
                            <div className="label">
                                <strong>Total</strong>
                                <strong>€{totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {added && allPanier.length > 0 && (
                <div className="btnCommander" onClick={handleCommander}>
                    <span className="quantite">{totalItems}</span>
                    <span className="commander">Commander</span>
                    <span className="prixFinal">€{totalPrice.toFixed(2)}</span>
                </div>
            )}
        </div>
    )
}