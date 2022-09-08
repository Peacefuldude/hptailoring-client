import React from 'react';

// Images
import Instagram from '../../helpers/images/instagram.png'
import Facebook from '../../helpers/images/facebook.png'
import Whatsapp from '../../helpers/images/whatsapp.png'

// Styles
import styles from './social.module.css'

const Social = () => {
    return ( 
        <div className={styles.container}>
            <h4>شبکه های اجتماعی</h4>
            <a href="#">
                <img src={Instagram} alt="Instagram icon" />
            </a>
            <a href="#">
                <img src={Facebook} alt="Facebook icon" />
            </a>
            <a href="#">
                <img src={Whatsapp} alt="Whatsapp icon" />
            </a>
        </div>
     );
}
 
export default Social;