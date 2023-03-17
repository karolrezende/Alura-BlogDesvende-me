import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useParams , Link} from "react-router-dom"
import posts from '../../assets/json/posts.json'
import ModelPost from "../../components/ModelPost/ModelPost"
import NotFound from "../../components/NotFound/NotFound"
import styles from './postlink.module.scss'
export default function PostLink() {

  const params = useParams()
  const post = posts.find(post=>{
    return post.id === Number(params.id)
  })
  if(!post){
    return <NotFound/>
  }
  const postFiltered = posts
    .filter(post=> {
      return post.id !== Number(params.id)})
    .sort((a,b)=> b.id - a.id)
    .slice((0,3 ))
  return (
    <ModelPost title={post.titulo}>
      <div className={styles.post_markdown_container}>
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
      <div>
        <h1 className={styles.tituloOutrosPosts}>Posts que você pode gostar</h1>

        <ul className={`${styles.posts}, ${styles.postsRecomendados}`}>
        {postFiltered.map(post=> (
          <Link key={post.id} to={`post/${post.id}`}>
            <li  className={styles.post}>
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <button className={styles.botaoLer}>Ver</button>
            </li>
          </Link>
        ))}
    </ul>
      </div>
    </ModelPost>
  )
}
