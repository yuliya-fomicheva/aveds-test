"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import styles from './button.module.css'

interface ILoginButton {
    exitText?: string;
    loginText?: string;
    inverted?: boolean;
    long?: boolean;
    toggle: () => void;
  }

const LoginButton = (props:ILoginButton) => {


    const [isAuth, setAuth] = useState(localStorage.getItem('user') != null)

    const router = useRouter();

    const rootClasses = [styles.button]
    if (props.inverted) {
        rootClasses.push(styles.button_inverted)
    }
    if (props.long) {
        rootClasses.push(styles.button_long)
    }
       

    const exit = () => {
            localStorage.removeItem('user');
            setAuth(false);
             router.push('/')}


    useEffect(() => {
        setAuth(localStorage.getItem('user') != null);
    }, [isAuth])

    return (
        !isAuth ?
        <button  type='button' className={rootClasses.join(' ')}  onClick={props.toggle}>{props.loginText ? props.loginText: "Войти" }</button> : 
        <button  type='button' className={rootClasses.join(' ')}  onClick={exit}>{props.exitText ? props.exitText: "Выйти" }</button>
    )

}

export default LoginButton;
