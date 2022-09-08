import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

// Components
import Header from '../../header/Header';


// Functions
import { validate } from '../../../helpers/functions/validate';

// Styles
import styles from './order.module.css'

const Order = () => {

    const [data, setData] = useState({
        user: localStorage.getItem("user"),
        fabricType: "",
        typeOfClothing: "",
        desiredTime: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(validate(data, "order"))
    }, [data])

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: true,
    })
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const [submitMassage, setSubmitMassage] = useState({
        massage: "درخواست شما با موفیت ثبت شد. تاریخ و ساعت نوبت شما پس از بررسی در سریع ترین زمان ممکن به ایمیل شما ارسال خواهد شد",
        massageCon: "",
    });
    const [serverResponse, setServerResponse] = useState({status: ""});
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const orderData = data;
            axios.post("https://jsonplaceholder.typicode.com/posts", orderData)
                .then(setButtonDisable(!buttonDisable))
                .then(response => setServerResponse({
                    ...serverResponse, status: response.status, 
                }))
                    setSubmitMassage({
                        ...submitMassage, massageCon: true
                    })
                // Uncomment the line below to see if the POST method is working
                // console.log(serverResponse);
        } else {
            setTouched({
                fabricType: true,
                typeOfClothing: true,
            })
        }
    }

    return ( 
        <div>
            <div>
                < Header/>
            </div>
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h2>با وارد کردن مشخصات خواسته شده نوبت خود را دریافت کنید</h2>
                    <div>
                        <p>:نوع پارچه</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='fabricType'
                            value={data.fabricType}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.fabricType && touched.fabricType && <h6>{errors.fabricType}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>:مدل لباس</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='typeOfClothing'
                            value={data.typeOfClothing}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.typeOfClothing && touched.typeOfClothing && <h6>{errors.typeOfClothing}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>:اگر زمان خاصی برای مراجعه حضوری مد نظرتان است وارد کنید</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='desiredTime'
                            value={data.desiredTime}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="submit" className={styles.submitButton}>ثبت درخواست</button>
                    </div>
                    {submitMassage.massageCon && <h5>{submitMassage.massage}</h5>}
                </form>
            </div>
        </div>
     );
}
 
export default Order;