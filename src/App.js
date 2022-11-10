import React from 'react';
import './App.css';
import 'bootswatch/dist/cosmo/bootstrap.css'
import Sidebar from './componentes/Sidebar';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Medicine from './screens/medicine/medicineCreate/MedicinePagCreate';
import Goat from './screens/goat/goatCreate/GoatPagCreate';
import Home from './screens/home/HomePag';
import Aplication from './screens/aplication/aplicationCreate/AplicationPagCreate'

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
