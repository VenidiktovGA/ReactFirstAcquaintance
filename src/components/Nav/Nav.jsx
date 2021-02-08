import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export const Nav = (props) => {
	return(
		<nav className={styles.nav}>
			<ul>
				<li><NavLink to='/Letters'>Буквы</NavLink></li>
				<li><NavLink to='/Numeral'>Буквы</NavLink></li>
				<li><a href='#'>3</a></li>
				<li><a href='#'>4</a></li>
			</ul>
		</nav>
	)
} 