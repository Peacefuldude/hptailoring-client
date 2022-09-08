import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

// Components
import Social from '../socialMedia/Social';

// Styles
import styles from './header.module.css'
import hamStyles from './hamMenu.module.css'

const Header = () => {

    const burger = useRef();
    const [menus, setMenu] = useState(false);

    const toggleMenu = () => {
        if (menus) {
            burger.current.classList.add(hamStyles.burgerActive);
            setMenu(false);
            return;
        }

        if (!menus) {
            burger.current.classList.remove(hamStyles.burgerActive);
            setMenu(true);
            return;
        }
    }

    return ( 
        <div className={styles.container}>
            <div onClick={toggleMenu} className={hamStyles.toggleDiv}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={hamStyles.burger} ref={burger}>
                <div onClick={toggleMenu} className={hamStyles.toggleDivInMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>فهرست</p>
                <nav className={hamStyles.nav}>
                    <Link to="/signup"><button>ثبت نام</button></Link>
                    <Link to="/home"><button>خانه</button></Link>
                    <Link to="/checkIfLoggedIn"><button>سفارش</button></Link>
                </nav>
                <Social/>
            </div>
            <nav className={styles.nav}>
                <Link to="/signup"><button>ثبت نام</button></Link>
                <Link to="/home"><button>خانه</button></Link>
                <Link to="/checkIfLoggedIn"><button>سفارش</button></Link>
            </nav>
                <h1>دوخت حقیقت</h1>
                <p>چند کوک ساده به رویای شما حقیقت می بخشد</p>
        </div>
     );
}
 
export default Header;