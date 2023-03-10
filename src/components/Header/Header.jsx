import React from 'react'
import styles from './header.module.scss'
import MenuLink from '../MenuLink/MenuLink';
export default function Header() {
  return (
    <header>
        <div className={styles.header}>
          <MenuLink name={'Início'} to={'/'}/>
          <MenuLink name={'Sobre mim'} to={'/aboutme'}/>
        </div>
    </header>
  )
}
