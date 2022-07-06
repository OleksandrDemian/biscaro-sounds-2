import { Router, Routes, Route } from "solid-app-router";
import {Sounds} from "./views/Sounds";
import {Home} from "./views/Home";
import {Layout} from "./components/Layout";
import {Category} from "./views/Category";
import {Favorites} from "./views/Favorites";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/category/:id" component={Category} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/all" component={Sounds} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
