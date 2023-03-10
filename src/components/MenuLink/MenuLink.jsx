import styles from './menulink.module.scss'
import { NavLink} from 'react-router-dom'

export default function MenuLink(props) {
    return (
    <div>
        <NavLink 
            className={({isActive})=> 
                ` ${styles.link}
                  ${isActive ? styles.link__under : ""}`
            }  
            to={props.to}  
            end
        >
            {props.name}
        </NavLink>
    </div>
  )
}
