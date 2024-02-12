import React, { useEffect } from "react"
import styles from "./App.module.css"

function App() {
  	useEffect(() => {
    	const setTextSize = () => {
      		const textElement = document.querySelector(`.${styles.text}`)
			const userAgentString = navigator.userAgent
			const viewport = window.devicePixelRatio
			const safariviewport = (window.innerWidth / window.outerWidth)
			let fontSize = 100;
			let chromeAgent = userAgentString.indexOf("Chrome") > -1; 
			let safariAgent = userAgentString.indexOf("Safari") > -1; 
			if ((chromeAgent) && (safariAgent)) {
				safariAgent = false
			}
			console.log("viewport native from browser: " + viewport)
			console.log("custom viewport for safari: " + safariviewport)
			console.log("safariAgent: " + safariAgent)
			if (safariAgent) {
				fontSize = fontSize * safariviewport
      			textElement.style.fontSize = `${fontSize}px`;
			} else {
				fontSize = fontSize / viewport
      			textElement.style.fontSize = `${fontSize}px`;
			}
		}
    	setTextSize();
    	window.addEventListener('resize', setTextSize);
    	return () => {
        	window.removeEventListener('resize', setTextSize);
    	}
	}, [])
	
	return (
    	<div className={styles.App}>
     		<h1 className={styles.text}>Hello React !</h1>
    	</div>
  	)
}

export default App;
