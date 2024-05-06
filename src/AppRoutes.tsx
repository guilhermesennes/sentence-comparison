import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import HistoryList from "./pages/HistoryList";

const AppRoutes = () => {
    return (
        <Routes>
            <Route Component={ Home } path="/" />
            <Route Component={ HistoryList } path="/historico" />
        </Routes>
    )
}

export default AppRoutes;