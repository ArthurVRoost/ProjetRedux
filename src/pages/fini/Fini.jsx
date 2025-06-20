import './fini.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export default function Fini() {
    const navigate = useNavigate()
    const handBackHome = () => {
    
      navigate('/');

  };
    
    return(
        <>
        <div className='finiDiv'>
            <FontAwesomeIcon className='finiIcon' icon={faCheck} />
            <h2 className='finiH2'>Commande Confirmée</h2>
            <p className='finiP'>Votre commande sera livrée dans les plus bref délais</p>
            <button onClick={handBackHome} className='finiBtn'>Go back to Menu</button>
        </div>
        
        </>
    )
}