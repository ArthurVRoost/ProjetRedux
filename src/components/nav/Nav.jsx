import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '/src/assets/img/logoPH.png'
import './nav.css'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {

    const navigate = useNavigate() 
    const handleGoHome = () => {
        navigate('/');
    }
    const location = useLocation()
    return(
        <>
            <div className='navDiv'>
                <img className='imgNav' onClick={handleGoHome} src={Logo} alt="" />
                {!location.pathname.startsWith('/details') && (
                    <div className='navDiv1'>
                        <p className='navDiv1P'>Menus</p>
                        <p className='navDiv1P'>Entrées</p>
                        <p className='navDiv1P'>Pizza</p>
                        <p className='navDiv1P'>Spécialités</p>
                        <p className='navDiv1P'>Boissons</p>
                        <p className='navDiv1P'>Desserts</p>
                    </div>
                )}
                <div className='navDiv2'>
                    <p className='navDiv2P1'>Se connecter</p>
                    <p className='navDiv2P2'>FR</p>
                    <FontAwesomeIcon className='navDiv2Icon' icon={faArrowDown} />
                </div>
                
            </div>
        </>
    )
}
