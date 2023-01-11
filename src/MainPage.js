import { useEffect } from "react";

// 3rd Party Libraries
import { useDispatch } from "react-redux";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { getUserData } from "./store/features/userSlice";

// Components
import Home from "./pages/Home";
import ToDoPage from "./pages/ToDoPage";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";

const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    return (
        <Routers>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<ToDoPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Routers>
    );
};

export default MainPage;
