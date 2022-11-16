import React from 'react';
import { Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import {AuthConsumer} from "../main/SessionProvider";
import Home from '../screens/home/HomePag';
import GoatCenterPag from '../screens/goat/goatCenter/GoatCenterPag';
import GoatPagUpdate from '../screens/goat/goatUpdate/GoatPagUpdate'
import Medicine from '../screens/medicine/medicineCenter/MedicineCenterPag'
import MedicinePagUpdate from '../screens/medicine/medicineUpdate/MedicinePagUpdate';
import Aplication from '../screens/aplication/aplicationCenter/AplicationCenterPag'
import AplicationPagUpdate from '../screens/aplication/aplicationUpdate/AplicationPagUpdate';
import UserLoginPag from '../screens/user/userLogin/UserLoginPag';
import UserRegisterPag from '../screens/user/userRegister/UserRegisterPag';


function RestrictedRoute( { component: Component, show, ...props } ){
    return (
        <Route exact {...props} render={ (componentProps) => {
            if(show){
                return (
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
                )
            }
        }}  />
    )
}

function AppRoutes(props) {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path = "/" exact/>
                <Route component={UserLoginPag} path="/login" />
                <Route component={UserRegisterPag} path="/userregister" />

                <RestrictedRoute show={props.isAuthenticated} component={GoatCenterPag} path="/goat" />
                <RestrictedRoute show={props.isAuthenticated} component={GoatPagUpdate} path="/goatupdate/:id" />
                <RestrictedRoute show={props.isAuthenticated} component={Medicine} path="/medicine" />
                <RestrictedRoute show={props.isAuthenticated} component={MedicinePagUpdate} path="/medicineupdate/:id" />
                <RestrictedRoute show={props.isAuthenticated} component={Aplication} path="/aplication" />
                <RestrictedRoute show={props.isAuthenticated} component={AplicationPagUpdate} path="/aplicationupdate/:id" />
            </Switch>
        </BrowserRouter>
    )

}

export default () => (
    <AuthConsumer>
        {(context) => (<AppRoutes isAuthenticated={context.isAuthenticated}/>)}
    </AuthConsumer>
);
