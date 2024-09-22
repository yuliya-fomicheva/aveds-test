import { montserrat } from '../fonts/fonts';
import Header from './header/header';

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (

        <div className={montserrat.variable}> 
        <Header/>
                <main>{children}</main>
                </div>
    )
}