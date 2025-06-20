import { useState } from "react"
import "./panier.css"
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { ajoutEncore, pizzaSelection, retirerPizza, supprimer } from "../../features/pizzaSlice";
import { useNavigate } from "react-router-dom";

export default function Panier({ onClose }) {
    const [added, setAdded] = useState(true)
    const [paiement, setPaiement] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [couponCode, setCouponCode] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const allPanier = useSelector(state => state.pizza.panier)

    
    const handleQuantityChange = (change, itemIndex) => {
        // Cette fonction devrait mettre à jour la quantité dans Redux
        // Vous devrez adapter selon votre structure Redux
        const newQuantity = allPanier[itemIndex].quantite + change;
        if (newQuantity > 0) {
            // Dispatch action pour mettre à jour la quantité
            // dispatch(updateQuantity({ index: itemIndex, quantite: newQuantity }));
        }
    }

    const handleRemoveItem = (itemIndex) => {
        // Dispatch action pour supprimer l'item
        // dispatch(removeFromPanier(itemIndex));
        if (allPanier.length === 1) {
            setAdded(false);
        }
    }

    const handleCommander = () => {
        // Logique de commande
        console.log("Commande passée!");
        if (onClose) {
            onClose(); // Fermer le modal sur mobile après commande
        }
    }
    const handleDetails = (pizza) => {
            dispatch(pizzaSelection(pizza))
            navigate(`/details/${pizza.name}`)
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
                                            <button onClick={() => dispatch(retirerPizza(element)) }>-</button>
                                            <span>{element.quantite || 1}</span>
                                            <button onClick={() =>dispatch(ajoutEncore(element)) }>+</button>
                                        </div>
                                        {console.log(element)}
                                        <div className="modifier">
                                            <span className="modifierBtn" onClick={()=>handleDetails(element)
                                            }>Modifier</span>
                                            <span className="suppr" onClick={() =>dispatch(supprimer(element)) }>Supprimer</span>
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