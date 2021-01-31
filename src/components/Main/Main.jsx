import React from 'react'
import styles from './Main.module.css'
import { Task } from './Task/Task'

export const Main = () => {
	return(
		<main className={styles.main}>
			<Task title='Напиши слово'/>
			<Task title='Найди слово' />
		</main>
	)
}