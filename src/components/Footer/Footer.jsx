import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <img src="../../public/assets/marca_registrada.svg" alt="Marca registrada" />
        <p>Desenvolvido por Karol e Alura</p>
    </footer>
  )
}
