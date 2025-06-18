import { useState } from "react"
import "./panier.css"


export default function Panier(){

    const [added, setAdded] = useState(true)
    const [paiement, setPaiement] = useState(false)


    return(

        <>
        
            <div className="panierCard">
                <div className="contentPanier">



                
                    <h1>Panier d'achat</h1>


                    {added? <> 
                    <div className="pizzaPanier">
                        {/* Créer un tableau avec les pizzas ajoutés afin de map dessus
                        selectedPizza.map{(item) =>(
                            <div className="nameAndPrice">
                                <h3>item.nom</h3>
                                <h3>item.price</h3>
                            </div>
                        
                        <p>Sans "ingrédient supprimé"</p>
                        )} */}
                        <div className="nameAndPrice">
                            <h3>item.nom</h3>
                            <h3>item.price</h3>
                        </div>
                        
                        <p className="ingredientSuppr">Sans "ingrédient supprimé"</p>

                        <div className="addPizza">
                    

                        <div className="compteur">
                            
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <div className="modifier">
                            <span>Modifier</span>
                            <span className="suppr">Supprimer</span>
                            
                        </div>
                        
                    </div>


        
                    
                    </div>

                    
                     </> : 
                    
                        <>
                        <div className="panierVide">
                            <p>Panier vide</p>
                        </div>
                        </>
                    }

                   
                    
                    {!paiement && 
                    <div className="couponDiv">
                        <h4>Coupon</h4>
                        <input type="text" placeholder="Entrez un coupon" /> 
                        <button>AJOUTER</button>
                    </div>  
                    }   
                    

               

                     
                    

                </div>

                <div className="footerPanier">
                    <div className="totalPrix">
                        <div className="label livraison">
                            <span>Livraison</span>
                            <span>€1,99</span>
                        </div>
                        <div className="label">
                            <strong>Total</strong>
                            <strong>prix dynamique</strong>
                        </div>
                    </div>

                    <div className="btnCommander">
                        <span className="quantite">Quantité </span>
                        <span className="commander">Commander</span>
                        <span className="prixFinal">prix dynamique</span>
                    </div>
                </div>

            </div>

        </>
    )
}