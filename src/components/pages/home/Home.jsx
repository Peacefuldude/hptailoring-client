import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './home.module.css'

// Functions
import Map from '../../../helpers/functions/map';

// Components
import Header from '../../header/Header';
import Login from '../../forms/login/Login';
import Social from '../../socialMedia/Social';
import Newsletter from '../../forms/newsletter/Newsletter';
import TimeLine from '../../timeLine/TimeLine';
import Footer from '../../footer/Footer';

// Images
import HomePic from '../../../helpers/images/HomePic.jpg'
import AddressPic from '../../../helpers/images/map.png'
import OrderNowPic from '../../../helpers/images/tailoring.png'

const Home = () => {
    return ( 
        <div className={styles.container}>
            < Header/>
            <main>
                <section className={styles.leftSection}>
                    <div className={styles.loginSec}>
                        < Login/>
                    </div>
                    <div className={styles.socialSec}>
                        < Social/>
                    </div>
                </section>
                <section className={styles.middleSection}>
                    <img src={HomePic} alt="simple tailoring" />
                    <p>به آسانی نوبت بگیرید و در سریع ترین زمان ممکن به لباس خود برسید. فقط کافیست در صورت نداشتن حساب کاربری ثبت نام کنید و سفارش خود را ثبت کنید</p>
                </section>
                <section className={styles.mapSection1}>
                    <div className={styles.mapSec}>
                        {Map()}
                    </div>
                    <div className={styles.addressSec}>
                        <p>به گیلان، آستانه اشرفیه، خیابان شهدا، کوچه عظمی، پلاک 101 بیایید</p>
                        <img src={AddressPic} alt="map icon" onClick={() =>  navigator.clipboard.writeText('37.26281828307743, 49.9492527672349')} />
                        <h6>با کلیک بر آیکون بالا آدرس حقیقت را کپی کنید</h6>
                    </div>
                </section>
            </main>
            <div className={styles.newsLetterDiv}>
                < Newsletter/>
            </div>
            <div className={styles.oderNowDiv}>
                <div>
                    <img src={OrderNowPic} alt="tailoring" />
                </div>
                <div>
                    <h2>!همین حالا سفارش دهید</h2>
                    <p>حقیقت سریع ترین راه را برای شما انتخاب کرده است تا هرچه زودتر به مراد دلتان برسید. نیازی به نوبت گرفتن های حضوری یا سر زده رفتن به مغازه کسی نیست. به راحتی می توانید از طریف کلید زیر وارد حساب کاربری خود شوید و با گرفتن نوبت ثبت سفارش خود را انجام دهید</p>
                    <Link to="/order"><button>سفارش</button></Link>
                </div>
            </div>
            <div className={styles.timeLineDiv}>
                <h2>:خط زمانی زندگی شخصیت اصلی داستان را بخوانید</h2>
                <p>.او دلایل خود را برای شروع به کار از سنین پایین داشت</p>
                <section className={styles.timeLineSec}>
                    < TimeLine/>
                </section>
            </div>
            <section className={styles.mapSection2}>
                    <div className={styles.mapSec}>
                        {Map()}
                    </div>
                    <div className={styles.addressSec}>
                        <p>به گیلان، آستانه اشرفیه، خیابان شهدا، کوچه عظمی، پلاک 101 بیایید</p>
                        <img src={AddressPic} alt="map icon" onClick={() =>  navigator.clipboard.writeText('37.26281828307743, 49.9492527672349')} />
                        <h6>با کلیک بر آیکون بالا آدرس حقیقت را کپی کنید</h6>
                    </div>
                </section>
            <footer>
                < Footer/>
            </footer>
        </div>
     );
}
 
export default Home;