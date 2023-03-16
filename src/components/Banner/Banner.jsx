import styles from './banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div>
            <h1 className={styles.title}>Olá, mundo</h1>
            <p className={styles.paragraph}> Boas vindas ao meu espaço pessoal! Eu sou Karoline Novais Rezende, 
                estudante de FullStack com JS. Aqui compartilho vários conhecimentos,
                espero que aprenda algo novo :)</p>
        </div>
        <div className={styles.imagens}>
            <img src='/assets/circulo_colorido.png' className={styles.circuloColorido}/>
            <img className={styles.minhaFoto} src='https://github.com/karolrezende.png'/> 
        </div>
    </div>
  )
}
