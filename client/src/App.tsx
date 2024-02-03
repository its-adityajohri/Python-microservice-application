import React from 'react';
import './App.css';
import Products from "./admin/Products";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./main/Main";
import ProductsCreate from "./admin/ProductsCreate";
import ProductsEdit from "./admin/ProductsEdit";

function App() {
    return (
        <div className="App">
            {/* <BrowserRouter>
                <Route path='/' Component={Main}/>
                <Route path='/admin/products' Component={Products}/>
                <Route path='/admin/products/create' Component={ProductsCreate}/>
                <Route path='/admin/products/:id/edit' Component={ProductsEdit}/>
            </BrowserRouter> */}
            <div>test hello 1</div>
            <Main/>

        </div>
    );
}

export default App;
