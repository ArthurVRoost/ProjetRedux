// import { useState } from "react"
// import "./panier.css"
// import data from '../../data/data.json'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
// import { useSelector } from "react-redux";

// export default function Panier() {
//     const [added, setAdded] = useState(true)
//     const [paiement, setPaiement] = useState(false)
//     const [quantity, setQuantity] = useState(1)
//     const [couponCode, setCouponCode] = useState("")
    
    
//     const allPanier = useSelector(state=> state.pizza.panier)
//     console.log(allPanier);
    
//     const handleQuantityChange = (change) => {
//         const newQuantity = quantity + change
//         if (newQuantity > 0) {
//             setQuantity(newQuantity)
//         }
//     }

//     return (<>
    

//         <div className="panierAll">


        
//             <div className="panierCard">
//                 <div className="contentPanier">
//                     <h1>Panier d'achat</h1>

                

//                     {added ? (<>
//                         {/* <div className="pizzaPanier">
//                             <div className="nameAndPrice">
//                                 <h3>{allPanier.name}</h3>
//                                 <span className="price"></span>
//                             </div>
                            
//                             <p className="ingredientSuppr">Sans champignons</p>

//                             <div className="addPizza">
//                                 <div className="compteur">
//                                     <button onClick={() => handleQuantityChange(-1)}>-</button>
//                                     <span></span>
//                                     <button onClick={() => handleQuantityChange(1)}>+</button>
//                                 </div>

//                                 <div className="modifier">
//                                     <span className="modifierBtn">Modifier</span>
//                                     <span className="suppr" onClick={() => setAdded(false)}>Supprimer</span>
//                                 </div>
//                             </div>
//                         </div> */}
//                         {allPanier.map((element,index)=>(
//                             <>
//                             <div className="pizzaPanier">
//                             <div className="nameAndPrice">
//                                { console.log(element)}
                                
//                                 <h3>{element.name}</h3>
//                                 <span className="price"></span>
//                             </div>
                            
//                             <p className="ingredientSuppr">Sans champignons</p>

//                             <div className="addPizza">
//                                 <div className="compteur">
//                                     <button onClick={() => handleQuantityChange(-1)}>-</button>
//                                     <span>{element.quantite}</span>
//                                     <button onClick={() => handleQuantityChange(1)}>+</button>
//                                 </div>

//                                 <div className="modifier">
//                                     <span className="modifierBtn">Modifier</span>
//                                     <span className="suppr" onClick={() => setAdded(false)}>Supprimer</span>
//                                 </div>
//                             </div>
//                         </div>
//                             </>
//                         ))}
//                         </>
//                     ) : (
//                         <div className="panierVide">
//                             <p>Panier vide</p>
//                         </div>
//                     )}

                    
//                     {!paiement && added && (
//                         <div className="couponDiv">
//                             <input 
//                                 type="text" 
//                                 placeholder="Vous pouvez entrer votre coupon"
//                                 value={couponCode}
//                                 onChange={(e) => setCouponCode(e.target.value)}
//                             />
//                             <button>AJOUTER</button>
//                         </div>
//                     )}
//                 </div>

                
//                 <div className="footerPanier">
//                     <div className="totalPrix">
//                         {/* {totalPrice < minimumOrder && <div className="label livraison">
//                             <span>Livraison</span>
//                             <span></span>
//                         </div>} */}
                        
//                         <div className="label">
//                             <strong>Total</strong>
//                             {/* <strong>€{added ? totalPrice.toFixed(2): '0,00'}</strong> */}
//                         </div>
//                     </div>

                

                    
                    
//                 </div>
                    
//                 </div>
//                 <div className="btnCommander">
//                                 <span className="quantite">{added ? quantity : 0}</span>
//                                 <span className="commander">Commander</span>
//                                {/* ` <span className="prixFinal">€{added ? totalPrice.toFixed(2) : '0,00'}</span>` */}
//                         </div>

//                         {/* {totalPrice < minimumOrder && (
//                             <div className="commandeMinimum">
//                                 <FontAwesomeIcon icon={faMotorcycle} />
//                                 <div className="text">
//                                     <h4>Commander</h4>
//                                     <p>Livraison à partir d'un montant minimum de commande de €{minimumOrder}.</p>
//                                 </div>
//                             </div>
//                         )} */}
//         </div>
//         </>
//     )
// }

import { useState } from "react"
import "./panier.css"
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";

export default function Panier({ onClose }) {
    const [added, setAdded] = useState(true)
    const [paiement, setPaiement] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [couponCode, setCouponCode] = useState("")
    
    const dispatch = useDispatch();
    const allPanier = useSelector(state => state.pizza.panier)
    console.log(allPanier);
    
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
                                            <button onClick={() => handleQuantityChange(-1, index)}>-</button>
                                            <span>{element.quantite || 1}</span>
                                            <button onClick={() => handleQuantityChange(1, index)}>+</button>
                                        </div>

                                        <div className="modifier">
                                            <span className="modifierBtn">Modifier</span>
                                            <span className="suppr" onClick={() => handleRemoveItem(index)}>Supprimer</span>
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