import React from 'react'
import styles from './Main.module.css'
import { Letters } from '../Letters/Letters'
import { Numeral } from '../Numeral/Numeral'
import { Home } from '../Home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NavCommon } from '../NavCommon/NavCommon'
import { PageNotFind } from '../PageNotFind/PageNotFind'

export const Main = () => {
	return (
		<main className={styles.main}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/NavCommon' component={NavCommon} />
				<Route path='/Numeral' component={Numeral} />
				<Route component={PageNotFind} />
			</Switch>
		</main>
	)
}