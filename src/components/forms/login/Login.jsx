import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Functions
import { validate } from '../../../helpers/functions/validate';

// Styles
import styles from './login.module.css'

const Login = () => {

    const [data, setData] = useState({
        name: "",
        password: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(validate(data, "login"))
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
            const loginData = data;
            axios.post("https://jsonplaceholder.typicode.com/posts", loginData)
                .then(response => setServerResponse({
                    ...serverResponse, status: response.status, 
                }))
                .then(setButtonDisable(!buttonDisable))
                .then(setWelcomeMassage(true))
                .then(setTimeout(()=>Navigate("/"), 3000));
                // Uncomment the line below to see if the POST method is working
                // console.log(serverResponse);
        } else {
            setTouched({
                name: true,
                password: true
            })
        }
    }

    return ( 
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2>وارد شوید</h2>
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
                <div className={buttonDisable && styles.submitButton}>
                    <button type="submit">ورود</button>
                </div>
                <div className={styles.formdiv}>
                        {welcomeMassage && <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>}
                </div>
            </form>
        </div>
     );
}
 
export default Login;