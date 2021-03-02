import React from 'react'
import styles from './Home.module.css'

export const Home = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>Привет</header>
			<p className={styles.slogan}>это стартовая страница</p>
		</div>
	)
}