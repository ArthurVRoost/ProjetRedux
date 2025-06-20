

import { useState } from "react"
import "./panier.css"
import { useSelector, useDispatch } from "react-redux";
import { ajoutEncore, pizzaSelection, retirerPizza, supprimer,appliquerCoupon } from "../../features/pizzaSlice";

import { useNavigate } from "react-router-dom";


export default function Panier({ onClose, show }) {
    const [added, setAdded] = useState(true)
    const [paiement, setPaiement] = useState(false)
    const [couponCode, setCouponCode] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const allPanier = useSelector(state => state.pizza.panier)
    const totalPanier = useSelector(state => state.pizza.totalPanier);
    const realCoupon = useSelector(state => state.pizza.coupon)

    const applyCoupon = () => {
        console.log(realCoupon, couponCode, totalPanier)
        
        if (realCoupon == couponCode)
            dispatch(appliquerCoupon({ code: couponCode }));

    }


    const handleCommander = () => {
        // Logique de commande
        console.log("Commande passée!");
        if (onClose) {
            onClose(); // Fermer le modal sur mobile après commande
        }
        if (allPanier.length > 0) {
        navigate('/fini');  // Navigation vers la page 'fini'
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
        {show === true ? (
            <>
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

                                        {element.customIngredients && element.customIngredients.length > 0 && (
                                        <p className="ingredientSuppr">
                                            {element.customIngredients.map((i, idx) => (
                                            <span key={idx}>
                                                {i.type === "sans" ? `Sans ${i.name}` : `Supplément ${i.name}`}
                                                {idx < element.customIngredients.length - 1 && ', '}
                                            </span>
                                            ))}
                                        </p>
                                        )}


                                        <div className="addPizza">
                                            <div className="compteur">
                                                <button onClick={() => dispatch(retirerPizza(element))}>-</button>
                                                <span>{element.quantite || 1}</span>
                                                <button onClick={() => dispatch(ajoutEncore(element))}>+</button>
                                            </div>
                                            {console.log(element)}
                                            <div className="modifier">
                                                <span className="modifierBtn" onClick={() => handleDetails(element)}>Modifier</span>
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
                                <button onClick={applyCoupon}>AJOUTER</button>
                            </div>
                        )}
                    </div>

                    {added && allPanier.length > 0 && (
                        <div className="footerPanier">
                            <div className="totalPrix">
                                <div className="label">
                                    <strong>Total</strong>
                                    <strong>
                                        {totalPanier.toFixed(2)}

                                        </strong>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ✅ Le bouton Commander est maintenant à la bonne place */}
                {added && allPanier.length > 0 && (
                    <div className="btnCommander" onClick={handleCommander}>
                        <span className="quantite">{totalItems}</span>
                        <span className="commander">Commander</span>
                        <span className="prixFinal">€{totalPanier.toFixed(2)}</span>
                    </div>
                )}
            </>
        ) : (
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

                                    {element.customIngredients && element.customIngredients.length > 0 && (
                                        <p className="ingredientSuppr">
                                            {element.customIngredients.map((i, idx) => (
                                            <span key={idx}>
                                                {i.type === "sans" ? `Sans ${i.name}` : `Supplément ${i.name}`}
                                                {idx < element.customIngredients.length - 1 && ', '}
                                            </span>
                                            ))}
                                        </p>
                                        )}
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="panierVide">
                            <p>Panier vide</p>
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
        )}
        {console.log("SHOW => " + show)}
    </div>
);


}