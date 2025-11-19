import styles from './styles.module.css';

export default function NotFound() {
    return (
        <div className={styles.containerError}>
            <h1 className={styles.title}>Erreur 404</h1>
            <p className={styles.content}>Ce restaurant n'existe pas</p>
        </div>
    );
}
