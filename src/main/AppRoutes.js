import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import Home from '../screens/home/HomePag';
import GoatCenterPag from '../screens/goat/goatCenter/GoatCenterPag';
import GoatPagUpdate from '../screens/goat/goatUpdate/GoatPagUpdate'
import Medicine from '../screens/medicine/medicineCenter/MedicineCenterPag'
import MedicinePagUpdate from '../screens/medicine/medicineUpdate/MedicinePagUpdate';
import Aplication from '../screens/aplication/aplicationCenter/AplicationCenterPag'
import AplicationPagUpdate from '../screens/aplication/aplicationUpdate/AplicationPagUpdate';


function AppRoutes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={GoatCenterPag} path="/goat" />
            <Route component={GoatPagUpdate} path="/goatupdate/:id" />
            <Route component={Medicine} path="/medicine" />
            <Route component={MedicinePagUpdate} path="/medicineupdate/:id" />
            <Route component={Aplication} path="/aplication" />
            <Route component={AplicationPagUpdate} path="/aplicationupdate/:id" />
        </BrowserRouter>
    )

}

export default AppRoutes;
