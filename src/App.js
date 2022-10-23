import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { NavBar } from "./components/NavBar"
import Footer from "./components/Footer"
function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Work />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
