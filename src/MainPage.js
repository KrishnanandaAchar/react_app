/* eslint-disable import/no-named-as-default */
import { useEffect } from "react";

// 3rd Party Libraries
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { getUserData } from "./store/features/userSlice";

// Utils
import { Loader } from "./utils/common";

// Components
import Home from "./pages/Home";
import ToDoPage from "./pages/ToDoPage";
import Header from "./components/Header";
import PostsPage from "./pages/PostsPage";
import ShowAlert from "./components/ShowAlert";
import PageNotFound from "./pages/PageNotFound";
import PostDetailsPage from "./pages/PostDetailsPage";

const MainPage = () => {
    const loadingStatus = useSelector((state) => state.LoaderStatus.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    return (
        <>
            {loadingStatus && <Loader />}
            <Routers>
                <Header />
                <ShowAlert />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<ToDoPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/:id" element={<PostDetailsPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Routers>
        </>
    );
};

export default MainPage;
