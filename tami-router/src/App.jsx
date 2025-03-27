import "./App.css";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import { Router } from "./Router.jsx";
import Page404 from "./pages/404.jsx";
import SearchPage from "./pages/search.jsx";

const appRoutes= [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  

  return (
    <main>
    <Router routes={appRoutes} defaultComponent={Page404}/>
    </main>
  );
}

export default App;
