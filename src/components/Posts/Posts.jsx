import styles from './posts.module.scss'
import posts from '../../assets/json/posts.json'
import { Link } from 'react-router-dom'
export default function Posts() {
  return (
    <ul className={styles.posts}>
        {posts.map(post=> (
          <Link key={post.id} to={`post/${post.id}`}>
            <li  className={styles.post}>
                <img className={styles.capa} src={`src/assets/posts/${post.id}/capa.png`} alt={post.titulo} />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <button className={styles.botaoLer}>Ver</button>
            </li>
          </Link>
        ))}
    </ul>
  )
            
}