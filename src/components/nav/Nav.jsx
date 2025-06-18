import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '/src/assets/img/logoPH.png'
export default function Nav() {
    

    return(
        <>
            <div>
                <img src={Logo} alt="" />
            </div>
        </>
    )
}
<FontAwesomeIcon icon={faArrowDown} />