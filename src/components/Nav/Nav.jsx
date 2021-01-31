import React from 'react'
import styles from './Nav.module.css'

export const Nav = (props) => {
	return(
		<nav className={styles.nav}>
			<ul>
				<li><a href='#'>1</a></li>
				<li><a href='#'>2</a></li>
				<li><a href='#'>3</a></li>
				<li><a href='#'>4</a></li>
			</ul>
		</nav>
	)
} 