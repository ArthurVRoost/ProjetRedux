import './fini.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function Fini() {
    
    return(
        <>
        <div className='finiDiv'>
            <FontAwesomeIcon className='finiIcon' icon={faCheck} />
            <h2 className='finiH2'>Commande Confirmée</h2>
            <p className='finiP'>Votre commande sera livrée dans les plus bref délais</p>
            <button className='finiBtn'>Go back to Menu</button>
        </div>
        
        </>
    )
}