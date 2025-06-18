import { useState } from "react"
import "./panier.css"


export default function Panier(){

    const [added, setAdded] = useState(false)


    return(

        <>
        
            <div className="panierCard">
                <div className="contentPanier">



                
                    <h1>Panier d'achat</h1>

                    <div className="pizzaPanier">
                        {/* Créer un tableau avec les pizzas ajoutés afin de map dessus
                        selectedPizza.map{(item) =>(
                            <h3>item.nom</h3>
                            <span>item.price</span>
                            <p>Sans "ingrédient supprimé"</p>
                        )} */}
                    
                    </div>

                    {!added && 
                    <div className="addPizza">
                    

                        <div className="compteur">
                            <button>+</button>
                            <span>"Compteur"</span>
                            <button>-</button>
                        </div>

                        <div className="modifier">
                            <span>Modifier</span>
                            <span>Supprimer</span>
                            
                        </div>
                        
                    </div> }

                    <div className="couponDiv">
                        <h3>Coupon</h3>
                        <input type="text" placeholder="Entrez un coupon" /> <button>ADD</button>
                    </div>
                    
                </div>
            </div>

        </>
    )
}