import { ReactNode } from "react";
import styles from "./button.module.css"

interface IAppButton {
    children?: ReactNode;
    onClick?: () => void;
    inverted ?: boolean;
    long? : boolean
    type? : string;
  }



export const AppButton = ({children, onClick, inverted, long}: IAppButton) => {

    const rootClasses = [styles.button]
    if (inverted) {
        rootClasses.push(styles.button_inverted)
    }
    if(long) {
        rootClasses.push(styles.button_long)
    }

    return (
        <button className={rootClasses.join(' ')} onClick={onClick}>{children}</button>
    )
}

export default AppButton;