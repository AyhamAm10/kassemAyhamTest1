import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import "./i18n";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </StrictMode>
);
