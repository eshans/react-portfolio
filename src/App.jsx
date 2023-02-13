import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import "./index.css"

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Work />
		</>
	)
}

export default App
