import styles from './modelpost.module.scss'
import background from '/public/assets/sobre_mim_capa.png'

export default function ModelPost({title, children}) {
  return (
    <div className={styles.postModeloContainer}>
        <img src={background} className={styles.fotoCapa}/>
        <h1 className={styles.titulo}>{title}</h1>
        <div className={styles.postConteudoContainer}>
            {children}
        </div>
    </div>
  )
}
