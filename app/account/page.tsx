"use client"
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import styles from "../styles/main.module.css"
import LoginButton from "../components/UI/button/loginButton";
import useModal from "../hooks/useModal";
import AppButton from "../components/UI/button/appButton";
import Link from "next/link";

const Account = () => {

const { isOpen, toggle } = useModal();

    const [user, setUser] = useState({ 
        login: '' , 
        password: '',
        name:''});

   useEffect(() => {
    if(localStorage.getItem('user')!== null) {
        const savedUser = JSON.parse(localStorage.getItem('user') || " ");
        setUser(savedUser)
    }
  }, [])

  return (
    (localStorage.getItem('user')!== null) ? <Layout>
            <div className="main__wrapper">
                <h1 className="main__title">Привет, {user.name}</h1>
                <div className={styles.main__buttonWrapper}>
                    <LoginButton toggle={toggle} exitText="Выйти из аккаунта" inverted></LoginButton>
                    <Link href="/contacts">
                        <AppButton type='button'>Перейти в контакты</AppButton>
                    </Link>

                </div>
            </div>
        </Layout> : 
        
            <div className="main__wrapper">
                <h1 className="main__title">404 - Page Not Found</h1> 
            </div>
       
    ) } 
  
export default Account;