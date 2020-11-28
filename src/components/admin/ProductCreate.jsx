import React from 'react'
import { useHistory } from 'react-router-dom'

import ImageUploader from 'react-images-upload';

//Brugeren åbner "siden"
//brugeren udfylder formular
// - trykker opret
//Kontakt til api'et opretmetode - post
//brugeren får en tilbagemelding eller vinsning på at produktet er oprettet

// api-kald 
import { createProduct } from '../helpers/apicall'


const ProductCreate = () => {


    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        createProduct(e.target).then(res => {

            
            if(res !== "error"){
                console.log(res)
                history.push("/Admin/Products")
            } else {
                //håndter fejl 
                console.log(res)
            }
            
        })


    }



    return (
        <div>


            <h2 className="mb-5">Add new product</h2>

            <form onSubmit={handleSubmit}>

                <label>Title:
                    <input name="overskrift" type="text" placeholder="Product Title" required />

                </label>

                <br />
                <br />

                <label>Description:
                    <input name="beskrivelse" type="text" placeholder="Product Description" required />

                </label>

                <br />
                <br />



                <br />
                <br />

                <label>Vælg et billede
                < ImageUploader
                        name="billede"
                        withIcon={true}
                        buttonText="Upload Image"
                        withLabel={true}
                        imgExtension={['.jpg', '.gif', '.jpeg', '.png']}
                        singleImage={true}
                        withPreview={true}
                        required={true}
                    />
                </label>

                <br/> <br/>

                <button className="btn btn-secondary my-3" type="submit"> tilføj nyt produkt </button>


            </form>



        </div>
    )
}

export default ProductCreate
