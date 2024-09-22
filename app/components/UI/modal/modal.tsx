import React, { ReactNode } from "react";
import styles from "./modal.module.css"

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>{props.isOpen && (
      <div className={styles.modal_overlay} onClick={props.toggle}>
        <div  className={styles.modal_box} onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    )} </>
  );
}
