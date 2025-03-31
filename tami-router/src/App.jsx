import "./App.css";
import { lazy, Suspense } from "react";
import { Router } from "./Router.jsx";
import Page404 from "./pages/404.jsx";
import { Route } from "./Route.jsx";

const AboutPage = lazy(() => import("./pages/about.jsx"));
const HomePage = lazy(() => import("./pages/home"));
const SearchPage = lazy(() => import("./pages/search.jsx"));


const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
