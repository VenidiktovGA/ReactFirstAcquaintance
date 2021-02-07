import React from 'react'
import styles from './Main.module.css'
import { Letters } from '../Letters/Letters'
import { Numeral } from '../Numeral/Numeral'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export const Main = () => {
	return (
			<main className={styles.main}>
				<Switch>
				<Route path='/Letters' component={Letters} />
				<Route path='/Numeral' component={Numeral} />
				</Switch>
			</main>
	)
}