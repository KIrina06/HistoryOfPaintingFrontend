import "./styles/Main.sass"
import "./styles/Reset.sass"
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {BrowserRouter, Route, Routes, Navigate, useLocation} from 'react-router-dom';
import PicturePage from "./pages/PicturePage/PicturePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import {QueryClient, QueryClientProvider } from "react-query";
import {Provider} from "react-redux"
import store from "./store/store"
import PicturesPage from "./pages/PicturesPage/PicturesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import {useAuth} from "./hooks/users/useAuth";
import ExpertiseConstructor from "./components/ExpertiseConstructor/ExpertiseConstructor";
import ExpertisePage from "./pages/ExpertisePage/ExpertisePage";
import ExpertisesPage from "./pages/ExpertisesPage/ExpertisesPage";
import PictureEditPage from "./pages/PictureEditPage/PictureEditPage";
import PictureAddPage from "./pages/PictureAddPage/PictureAddPage";


const TopPanelWrapper = () => {

    const {is_authenticated, is_moderator} = useAuth()

    const location = useLocation()

    return (
        <div className="top-panel-wrapper">
            <Breadcrumbs />
            {is_authenticated && !is_moderator && location.pathname.endsWith("pictures") && <ExpertiseConstructor /> }
        </div>
    )
}


function App() {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>

            <Provider store={store}>

                <BrowserRouter basename="/HistoryOfPainting">

                    <div className="App">

                        <div className="wrapper">

                            <Header />

                            <div className={"content-wrapper"}>

                                <TopPanelWrapper />

                                <Routes>

                                    <Route path="/" element={<Navigate to="/pictures" replace />} />

                                    <Route path="/profile" element={<ProfilePage />} />

                                    <Route path="/pictures" element={<PicturesPage />} />

                                    <Route path="/pictures/add" element={<PictureAddPage />} />

                                    <Route path="/pictures/:id" element={<PicturePage />} />

                                    <Route path="/pictures/:id/edit" element={<PictureEditPage />} />

                                    <Route path="/profile" element={<ProfilePage />} />

                                    <Route path="/expertises/:id" element={<ExpertisePage />} />

                                    <Route path="/expertises" element={<ExpertisesPage />} />

                                    <Route path="/login" element={<LoginPage />} />

                                    <Route path="/register" element={<RegisterPage />} />

                                </Routes>

                            </div>

                        </div>

                    </div>

                </BrowserRouter>

            </Provider>

        </QueryClientProvider>
    )
}

export default App
