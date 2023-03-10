import ModelPost from "../../components/ModelPost/ModelPost";
import styles from './aboutme.module.scss'
export default function AboutMe() {
  return (
    <div>
      <Banner/>
      <ModelPost title={'Sobre mim'}>
          <h3 className={styles.subtitulo}>Oie, eu sou a Karol</h3>
          <img src='https://github.com/karolrezende.png' alt="Karol linda" className={styles.fotoSobreMim}/>
          <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.</p>
            
          <p className={styles.paragrafo}>Minha história com programação começou no Instituto Federal do Mato Grosso (IFMT), quando iniciei no curso superior de engenharia da computação. Eu aprendi lógica de programação e o básico de várias linguagens, C, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.</p>
            
          <p className={styles.paragrafo}>Depois de um tempo, escolhi cursar Sistemas para internet ainda no Instituto Federal do Mato Grosso (IFMT), pois não estava me espelhando no curso de Engenharia. Agora eu estou tendo a oportunidade de ver diversas materias dessa área, estou gostando muito!</p>
            
          <p className={styles.paragrafo}>Com isso estou tendo minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.</p>
            
          <p className={styles.paragrafo}>E foi enquanto eu estava no IFMT que decidi procurar um estágio em suporte técnico, fui escolhido para fazer parte do time.</p>
            
          <p className={styles.paragrafo}>Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!</p>
      </ModelPost>
    </div>
  )
}
