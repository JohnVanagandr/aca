import "./style.css";
import { Filter } from "./components/Filter.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { ScrollTop } from "./components/ScrollTop.js";

const app = document.querySelector("#app");

const renderApp = async () => {
  
  app.innerHTML = `
    ${Header()}
    <main>
      ${Filter()} 
      <div id="product-container">
      </div>
    </main>
    ${Footer('ACA')}
    ${ScrollTop()}
  `;
  
};

renderApp();
