import {Route, Routes} from "react-router-dom";
import Paintings from "./routes/PaintingsPage.tsx";
import Painting from "./routes/PaintingPage.tsx";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/NavBar.tsx";
import BreadCrumbs from "./components/Breadcrumbs.tsx";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Router>
    <Navbar />
    <BreadCrumbs />
            <Routes>
                <Route path="/" element={<Paintings/>}/>
                <Route path="paintings/:id" element={<Painting/>} />
            </Routes>
    </Router>
);