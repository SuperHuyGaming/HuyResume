// App.jsx
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Projects from "./Components/Projects";
import Body from "./Components/Body";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Body />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}
