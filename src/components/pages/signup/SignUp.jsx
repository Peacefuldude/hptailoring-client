import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Components
import Header from '../../header/Header';


// Functions
import { validate } from '../../../helpers/functions/validate';

// Styles
import styles from './signup.module.css'

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        password: "",
        confirmPassword: "",
        email: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data])

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: true,
    })
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false)
    const [serverResponse, setServerResponse] = useState({status: ""});
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const signUpData = data;
            axios.post("https://dead-lime-walrus-ring.cyclic.app/api/register", signUpData).then((response) => {
				setServerResponse({
					...serverResponse,
					status: response.status
				});
				console.log(response);
				localStorage.setItem("user", response.data.id);
			})
                .then(setButtonDisable(!buttonDisable))
                .then(setWelcomeMassage(true))
                .then(setTimeout(()=>Navigate("/"), 3000))
                // Uncomment the line below to see if the POST method is working
                // console.log(serverResponse);
        } else {
            setTouched({
                name: true,
                password: true,
                confirmPassword: true,
                email: true
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
                    <h2>برای ثبت سفارش ابتدا باید حساب ایجاد کنید</h2>
                    <div>
                        <p>:نام</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='name'
                            value={data.name}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.name && touched.name && <h6>{errors.name}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>:ایمیل</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='email'
                            value={data.email}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.email && touched.email && <h6>{errors.email}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>:رمز عبور</p>
                        <input 
                            className={styles.formInput}
                            type='password'
                            name='password'
                            value={data.password}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.password && touched.password && <h6>{errors.password}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>:تکرار رمز عبور</p>
                        <input
                            className={styles.formInput}
                            type="password"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.confirmPassword && touched.confirmPassword && <h6>{errors.confirmPassword}</h6>}
                        </div>
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="button" className={styles.loginButton}><Link to="/login">حساب دارید؟</Link></button>
                        <button type="submit" className={styles.submitButton}>تایید</button>
                    </div>
                    <div className={styles.formdiv}>
                        {welcomeMassage && <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>}
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;