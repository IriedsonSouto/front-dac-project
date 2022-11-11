import React from 'react';
import './App.css';
import 'bootswatch/dist/journal/bootstrap.css'
import Navbar from './componentes/Navbar';
import AppRoutes from './main/AppRoutes';

export default class App extends React.Component{

    render() {
        return (
            <div>
                <Navbar />
                <AppRoutes />
            </div>
        );
    }
}
