import styles from './footer.module.scss'
import icon from '/assets/marca_registrada.svg'
export default function Footer() {
  return (
    <footer className={styles.footer}>
        <img src={icon} alt="Marca registrada" />
        <p>Desenvolvido por Karol e Alura</p>
    </footer>
  )
}
