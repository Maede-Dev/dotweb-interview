import React from "react";
import RoutingConfig from "./routes/routingConfig";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RoutingConfig />
    </BrowserRouter>
  );
}

export default App;
