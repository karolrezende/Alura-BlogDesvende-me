import styles from './notfound.module.scss'
import notFoundImg from '../../../public/assets/erro_404.png'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const nav = useNavigate()
  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Opss... Página não encontrada</h1>
            <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando? 
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
            <div className={styles.botaoContainer}
                onClick={()=>nav(-1)}
            >
                <button>Voltar</button>
            </div>
            <img className={styles.imagemCachorro} src={notFoundImg} alt="Imagem cachorro" />
        </div>
        <div className={styles.espacoEmBranco}></div>
    </>
  )
}
