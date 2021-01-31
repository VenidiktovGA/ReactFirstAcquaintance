import React from 'react'
import styles from './Nav.module.css'

export const Nav = (props) => {
	return(
		<nav className={styles.nav}>
			<ul>
				<li><a href='/Letters'>Буквы</a></li>
				<li><a href='/Numeral'>Цифры</a></li>
				<li><a href='#'>3</a></li>
				<li><a href='#'>4</a></li>
			</ul>
		</nav>
	)
} 