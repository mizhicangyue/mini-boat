import './App.css';
import {renderRoutes} from 'react-router-config';
import React, { FC } from 'react';
import {HashRouter} from 'react-router-dom';
import route from "./router";


const App: FC = () => (
    <HashRouter>
        {renderRoutes(route)}
    </HashRouter>
);

export default App;
