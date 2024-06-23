import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Documentation from "./pages/Documentation";
import Roster from "./pages/Roster";
import Search from "./pages/Search";
import Simulation from "./pages/Simulation";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route 
                    path="/documentation" 
                    element={<Documentation />} 
                />
                <Route
                    path="/search"
                    element={<Search />}
                />
                <Route 
                    path="/roster"
                    element={<Roster />} 
                />
                <Route
                    path="/simulation"
                    element={<Simulation />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;