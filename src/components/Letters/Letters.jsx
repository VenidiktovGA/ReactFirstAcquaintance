import React from 'react'
import styles from './Letters.module.css'
import {Task} from '../Task/Task'

export const Letters = () => {

	return(
		<div>
			<Task title='Напиши слово' />
			<Task title='Найди слово' />
		</div>
	)
}