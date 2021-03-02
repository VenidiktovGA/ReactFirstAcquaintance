import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export const Nav = (props) => {
	//Имитация получения с сервера
	const taskTitleLetters = [{ link: 1, title: 'Напиши слово' }, { link: 2, title: 'Найди слово' }];
	
	return(
		<nav className={styles.nav}>
			<ul>
				<li><a href='/'>Главная</a></li>
				<li><NavLink to={{ pathname: '/NavCommon', state: { taskTitleLetters}}}>Буквы</NavLink></li>
				<li><NavLink to='/Numeral'>Цифры</NavLink></li>
				<li><a href='#'>4</a></li>
			</ul>
		</nav>
	)
} 