import React from 'react';
import './App.css';
import 'bootswatch/dist/cosmo/bootstrap.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Sidebar from './componentes/Sidebar';
import Medicine from './screens/medicine/MedicinePag';
import Goat from './screens/goat/GoatPag';
import Home from './screens/home/HomePag';
import Aplication from './screens/aplication/AplicationPag'

export default class App extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/goat" element={<Goat />} />
                        <Route path="/medicine" element={<Medicine />} />
                        <Route path="/aplication" element={<Aplication />} />
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        );
    }
}
