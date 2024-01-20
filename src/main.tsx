import {BrowserRouter, Route, Routes} from "react-router-dom";
import Paintings from "./components/PaintingsPage.tsx";
import Painting from "./components/PaintingPage.tsx";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/NavBar.tsx";
import BreadCrumbs from "./components/Breadcrumbs.tsx";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
    <Navbar />
    <BreadCrumbs />
            <Routes>
                <Route path="paintings/" element={<Paintings/>}/>
                <Route path="paintings/:id" element={<Painting/>} />
            </Routes>
    </BrowserRouter>
);