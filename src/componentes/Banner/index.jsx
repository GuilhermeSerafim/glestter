import { Outlet } from "react-router-dom";
import styles from "./Banner.module.css";


export default function Banner() {
    return (
        <main>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        Bem-vindo ao Gblog
                    </h1>
                    <p className={styles.paragrafo}>
                        Aqui você será como um verdadeiro explorador, desbravando os territórios desconhecidos da inteligência artificial, mergulhando nas profundezas da mente humana e contemplando os mistérios do universo.
                        Prepare-se para uma viagem além da imaginação, onde cada descoberta é uma porta para o futuro.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img
                        className={styles.gatinhoAstronauta}
                        src="https://static.vecteezy.com/ti/fotos-gratis/p2/23574317-astronauta-gato-dentro-espaco-capacete-retrato-do-uma-gato-ai-generativo-imagem-gratis-foto.jpg"
                        alt="Minha foto"
                        aria-hidden={true}
                    />
                </div>
            </div>
            <Outlet />
        </main>
    )
}
