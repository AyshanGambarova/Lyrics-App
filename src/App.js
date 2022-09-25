import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Provider } from "./context";
import HomePage from './pages/Home/index';
import LyricsPage from './pages/Lyrics/index';


function App() {
  return (
    <Provider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lyrics/track/:trackId" element={<LyricsPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
