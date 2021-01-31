import React from 'react'
import styles from './Description.module.css'

export const Description = (props) => {
	return(
		<div className={styles.text}>
			<p>{props.description}</p>
		</div>
	)
}