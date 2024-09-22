
"use client"
import {useRef, useState } from "react";
import styles from "./loginForm.module.css"
import dataAuth from "../../data/dataAuth.json"
import { useRouter } from 'next/navigation'
import AppButton from "../UI/button/appButton";


const LoginForm = () => {

    const router = useRouter()

    const [user, setUser] = useState({ 
        login: '' , 
        password: ''});

    const [textError, setError] = useState('');

    const rootClasses = useRef([styles.title]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser((prevUser) => ({...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
   
        let currentUser = dataAuth.find(data => data.login == user.login); 
        if (currentUser != undefined) {
            
            if(currentUser.password !== user.password) {
                setError("Неверный пароль")
                rootClasses.current = [styles.title, styles.error]

            } else {
                localStorage.setItem('user', JSON.stringify(currentUser));
                 router.push('/account')
            }
        } else {
            setError("Пользователь не найден")
            rootClasses.current = [styles.title, styles.error];
        }

    };
    
  
    return (
        <>
        <div className={styles.title__wrapper}>
            <h2 className={rootClasses.current.join(' ')}>{textError == "" ? "Вход в аккаунт": textError} </h2>
        </div>
        
            <form className={styles.addForm} 
            onSubmit={handleSubmit} 
            action="#"method="post"   >
            
                <p>
                    <label className={styles.label} htmlFor="user-name">Логин</label>
                    <input required={true} className={styles.input} id="user-name" type="text" name="login" 
                    placeholder="user" 
                    value={user.login}
                    onChange={handleChange}
                
                    />
                </p>
                <p>
                <label className={styles.label} htmlFor="user-name">Пароль</label>
                    <input  className={styles.input} id="user-password" type="password" name="password" 
                    placeholder="********" 
                    value={user.password}
                    onChange={handleChange}
                    required={true}
                    />
					
                </p> 
                <AppButton long inverted type="submit">Войти</AppButton>
            </form>
        </>
    )
}

export default LoginForm