// 3rd Party Libraries
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import ToDoPage from "./pages/ToDoPage";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";

const MainPage = () => (
    <Routers>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDoPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Routers>
);

export default MainPage;
