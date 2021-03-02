import React from 'react'
import styles from './NavCommon.module.css'
import { Redirect, NavLink } from 'react-router-dom'

export const NavCommon = (props) => {

	/*Передаю пропсы при переходе по сылке*/
	/*
	Пропс в NavLink прокидывается только при переходе по ссылке
	https://qna.habr.com/q/520436
	*/

	let linkItems = props.location.state.taskTitleLetters.map((value => <li key={value.link}><NavLink className={styles.link} to={`/NavCommon/${value.link}`}>{value.title}</NavLink></li>));
	
	return (
		<nav className={styles.nav}>
			<ul>
				{linkItems}
			</ul>
		</nav>
	)
}