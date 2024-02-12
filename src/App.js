import { useEffect } from 'react';
import AppCss from './App.module.css';

function App() {

	useEffect(() => {
		const handleResize = () => {
			console.log("--------------------------------------------------------------");
			console.log('window.innerWidth:', window.innerWidth);
			console.log('window.innerHeight:', window.innerHeight);
			console.log('window.devicePixelRatio:', window.devicePixelRatio);
			//detect zoom level of the browser
			let zoomLevel = window.devicePixelRatio;
			console.log('zoomLevel:', zoomLevel);
			console.log("--------------------------------------------------------------");
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}
	, [])

  	return (
		<div className={AppCss.App}>
			<h2 className={AppCss.NoMargin}>Static H2</h2>
			<h2 className={AppCss.NoMargin}>Dynamic H2</h2>
			<div className={AppCss.div}></div>
		</div>
  	)
}

export default App;
