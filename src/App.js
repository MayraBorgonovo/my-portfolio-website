import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Preloader from "./components/layout/Preloader";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    return () => {
      clearTimeout(initialTimer);
    }
  }, []);

  return (
      <Switch>
        <Route path="/" exact>
          {showLoading && <Preloader />}
          {!showLoading && <Home />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;
