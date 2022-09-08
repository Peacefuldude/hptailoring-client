import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// Styles
import styles from './newsletter.module.css'

// functions
import { validate } from '../../../helpers/functions/validate';

const Newsletter = () => {

    const [data, setData] = useState({
        email: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(validate(data, "newsletter"));
    }, [data])

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: true,
    })
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const [emailSubmitedMassage, setEmailSubmitedMassage] = useState(false)
    const [serverResponse, setServerResponse] = useState({ status: "" })
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const newsLetterData = data;
            axios.post("https://jsonplaceholder.typicode.com/posts", newsLetterData)
                .then(response => setServerResponse({
                    ...serverResponse, status: response.status, 
                }))
                .then(setButtonDisable(!buttonDisable))
                .then(setEmailSubmitedMassage(true));
                // Uncomment the line below to see if the POST method is working
                // console.log(serverResponse);
        } else {
            setTouched({
                email: true,
            })
        }
    }

    return (
        <div>
            <h2>با یک ایمیل آخرین اخبار را دریافت کنید</h2>
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <div className={buttonDisable ? styles.submitDisable : styles.submitDiv}>
                        <button type="submit">ثبت ایمیل</button>
                    </div>
                    <div className={styles.formdiv}>
                        {emailSubmitedMassage && <h6>!ایمیل شما با موفقیت ثبت شد</h6>}
                    </div>
                    <div className={styles.inputDiv}>
                        <input
                            className={styles.formInput}
                            type='email'
                            name='email'
                            value={data.email}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            />
                        <div classemail={styles.formdiv}>
                            {errors.email && touched.email && <h6>{errors.email}</h6>}
                        </div>
                    </div>
                </form>
                <section className={styles.formLabel}>
                    <p>آخرین تخفیفات، برنامه های کاری، پیشنهاد های شگفت انگیز و هر اتفاقی که برای شما جذاب است را در سریع ترین زمان ممکن دریافت کنید. فقط کافیست ایمیل خود را در کادر رو به رو وارد کنید</p>
                </section>   
            </div>
        </div> 
     );
}
 
export default Newsletter;