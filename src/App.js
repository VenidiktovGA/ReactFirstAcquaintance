import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className='site-wrapper'>
			<Header />
			<BrowserRouter>
				<div className='rout-wrapper'>
					<Nav />
					<Main />
				</div>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
