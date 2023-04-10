import ReactDomClient from "react-dom/client";
import App from "./App";

const rootElem = document.getElementById("root");
const root = ReactDomClient.createRoot(rootElem);

root.render(<App />);
