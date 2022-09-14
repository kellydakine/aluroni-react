import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";

type IOpcao = typeof filtros[0];
// interface opcao {
//     id: number;
//     label: string;
// }

export default function Filtros() {

    function selecionarFiltro(opcao: IOpcao) {

    }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro}
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}>
                        {opcao.label}
                </button>
            ))}
        </div>
    )
}
