import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './checkIfLoggedIn.module.css'

const CheckIfLoggedIn = () => {

    const [changer, setChanger] = useState(1)
    const [styler, setStyler] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setChanger(changer + 1)
        }, 1500)
        setStyler(!styler)
    }, [changer])

    const user = localStorage.getItem("user");
    const Navigate = useNavigate();
    setTimeout(()=> {
        if (user) {
            Navigate("/order");
        } else {
            Navigate("/signup");
        }
    }, 4020)

    return ( 
        <div className={styles.container}>
            <h2>منتظر بمانید</h2>
            <h5>اگر به حساب کاریری خود وارد نشده اید به بخش ساخت حساب منتقل می شوید</h5>
            <div className={styler ? styles.lineLeftTransformed : styles.waitingLeftDiv}>
            </div>
        </div>
     );
}
 
export default CheckIfLoggedIn;