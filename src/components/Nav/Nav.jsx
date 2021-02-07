import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Letters } from '../Letters/Letters'
import styles from './Nav.module.css'

export const Nav = (props) => {
	return(
		<nav className={styles.nav}>
			<ul>
				<li><NavLink to='/Letters'>Буквы</NavLink></li>
				<li><NavLink to='/Numeral'>Цифры</NavLink></li>
				<li><a href='#'>3</a></li>
				<li><a href='#'>4</a></li>
			</ul>
		</nav>
	)
} 