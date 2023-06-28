import {FC} from "react";
import styles from './button.module.css'

interface Button {
    variants: string
}

const Button: FC<Button> = ({variants, children}) => {
    return <div className={styles.button}>{children}</div>
}

export default Button;