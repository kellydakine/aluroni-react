import cardapio from "./itens.json";
import styles from "./Item.module.scss";

export default function Itens() {
    return(
        <div>
            {cardapio.map((item) => (
                <div>
                    {item.title}
                </div>
            ))}
        </div>
    )
}