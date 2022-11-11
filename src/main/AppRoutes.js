import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import Home from '../screens/home/HomePag';
import GoatCenterPag from '../screens/goat/goatCenter/GoatCenterPag';
import GoatPagUpdate from '../screens/goat/goatUpdate/GoatPagUpdate'
import Medicine from '../screens/medicine/medicineCreate/MedicinePagCreate'
import Aplication from '../screens/aplication/aplicationCreate/AplicationPagCreate'


function AppRoutes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={GoatCenterPag} path="/goat" />
            <Route component={GoatPagUpdate} path="/goatupdate" />
            <Route component={Medicine} path="/medicine" />
            <Route component={Aplication} path="/aplication" />
        </BrowserRouter>
    )

}

export default AppRoutes;
