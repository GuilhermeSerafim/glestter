import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ post }) {
    const rolarParaCima = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para uma rolagem suave
        });
    }
    return (
        <Link 
            to={`/posts/${post.id}`}
            onClick={(() => {
                rolarParaCima();
            })}
        >
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>
                <h3 className={styles.subtitulo}>Breve descrição do texto</h3>
            </div>
        </Link>
    )
}
