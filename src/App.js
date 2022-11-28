// Redux Store
import { Provider } from "react-redux";
import store from "./store/store";

// Components
import MainPage from "./MainPage";

const App = () => (
    <Provider store={store}>
        <MainPage />
    </Provider>
);

export default App;

// ESLint Prettier: https://levelup.gitconnected.com/configure-eslint-and-prettier-for-your-react-project-like-a-pro-2022-10287986a1b6
// Icons: https://react-icons.github.io/react-icons
