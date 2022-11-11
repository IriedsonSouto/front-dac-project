import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import Home from '../screens/home/HomePag';
import GoatPagFind from '../screens/goat/goatFind/GoatPagFind';
import GoatPagCreate from '../screens/goat/goatCreate/GoatPagCreate'
import Medicine from '../screens/medicine/medicineCreate/MedicinePagCreate'
import Aplication from '../screens/aplication/aplicationCreate/AplicationPagCreate'


function AppRoutes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={GoatPagFind} path="/goat" />
            <Route component={GoatPagCreate} path="/goatfind" />
            <Route component={Medicine} path="/medicine" />
            <Route component={Aplication} path="/aplication" />
        </BrowserRouter>
    )

}

export default AppRoutes;
