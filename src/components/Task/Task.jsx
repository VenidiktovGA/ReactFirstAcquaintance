import React from 'react'
import { Description } from './Description/Description'
import styles from './Task.module.css'

export const Task = (props) => {
	return(
		<div>
			<Description description={props.title}/>
			<input type="text" className={styles.input}/>
			<button>Готов</button>
			<button>Отмена</button>
		</div>
	)
}