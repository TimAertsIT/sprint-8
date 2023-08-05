import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import StarshipsPage from "../pages/starships";
import StarshipsDetails from "../components/StarshipsDetails/StarshipsDetails";
import Homepage from "../pages/home";
import NotFoundPage from "../pages/notFound";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import LayoutPage from "../pages/layout";
import GuardedRoute from '../components/GuardedRoute/GuardedRoute';


const Router = ({
    starships,
    selectedStarship,
    hasMore,
    handleLoadMore,
    handleStarshipClick,
    handleDetailsClick,
    isAuthenticated,
    setIsAuthenticated,
}) =>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />} />
            <Route
                path="/starships"
                element={
                    isAuthenticated ? (
                        <StarshipsPage
                            starships={starships}
                            selectedStarship={selectedStarship}
                            hasMore={hasMore}
                            handleLoadMore={handleLoadMore}
                            handleStarshipClick={handleStarshipClick}
                            handleDetailsClick={handleDetailsClick}
                        />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
            <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter >
    ;

export default Router;