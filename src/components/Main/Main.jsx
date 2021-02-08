import React from 'react'
import styles from './Main.module.css'
import { Letters } from '../Letters/Letters'
import { Numeral } from '../Numeral/Numeral'
import { BrowserRouter, Route } from 'react-router-dom'

export const Main = () => {
	return (
		<BrowserRouter>
			<main className={styles.main}>
				<Route path='/Letters' component={Letters} />
				<Route path='/Numeral' component={Numeral} />
			</main>
		</BrowserRouter>
	)
}