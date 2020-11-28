import React from 'react'
import MyProducts from './MyProducts'
import { HashLink } from 'react-router-hash-link';

const Products = () => {
    return (
        <div id="Products" className="container-fluid productspage">

            <div className="container">

            <div className="row">

            
                <div className="col-12">
                <HashLink smooth to="#Top" className="hashlink"> <h2 className="mt-5">Products</h2> </HashLink>
                    <img src="/stjerne.svg" className="stjerne mb-4" alt=""/>
                </div>

            </div>

            </div>

            <div className="row">

            <MyProducts/>

            </div>

            


        </div>
    )
}

export default Products
