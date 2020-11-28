import React, { useEffect, useState } from 'react';

const MyProducts = () => {

  const [products, setProducts] = useState([]);

  const imagepath = "http://localhost:5017/images/"

  useEffect(() => {
    const apiUrl = "http://localhost:5017/products/";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);

      });
  }, []);

  const productmap = products.map(product => {

    return (

      <section key={product._id} className="col-12 col-md-6 col-lg-4 my-1 ml-md-0">

        <div class="card my-3 mx-3">
          <div class="card-body">
            <h4 class="card-title producttitle">{product.beskrivelse}</h4>
          </div>
          <img class="card-img-top" src={imagepath + product.billede} alt="Product Cover" />

        </div>

      </section>

    )

  })


  return (

    <div className="container">
      <div class="card-deck">
        {productmap}
      </div>
    </div>


  )
}

export default MyProducts
