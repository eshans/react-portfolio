import React from "react"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"
import "./index.css"

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Work />
			<Contact />
		</>
	)
}

export default App
