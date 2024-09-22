
import { montserrat } from "./fonts/fonts";
import './global.css'


export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (

        <html>
            <body className={montserrat.variable}>
               {children}
            </body>
        </html>
    
    )
}