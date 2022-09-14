import styles from "./Cardapio.module.scss";
// import logo from "../../assets/logo.svg";
import {ReactComponent as Logo} from "../../assets/logo.svg"

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo/>
                {/* <img src={logo} alt="logo da aluroni" /> */}
            </nav>
        </main>
    );
}