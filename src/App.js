import React from 'react';
import './App.css';
import 'bootswatch/dist/journal/bootstrap.css'
import Navbar from './componentes/Navbar';
import AppRoutes from './main/AppRoutes';
import SessionProvider from './main/SessionProvider';

export default class App extends React.Component{

    render() {
        return (
            <SessionProvider>
                <Navbar />
                <AppRoutes />
            </SessionProvider>
        );
    }
}
