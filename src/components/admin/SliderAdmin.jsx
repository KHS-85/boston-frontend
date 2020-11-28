import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//loader
import Loader from 'react-loader-spinner'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';


//API-call 
import { getAllSliders } from '../helpers/apicall'


const SliderAdmin = () => {

    //HOOKS
    const [sliders, setSliders] = useState()

    //kald api'et når component er loadet/rendered

    useEffect(() => {

        getAllSliders().then(res => {

            // hvis respone ikke er "error" så set state
            if (res !== "error") setSliders(res)

        })

    }, [])

    let sliderList = <tr><td colSpan="4"> <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} /> </td></tr>//3 secs

    //Hvis der er data i state produkter
    if (sliders) {

        sliderList = sliders.map(p => { // bruger "p", men kan være hvad som helst

            return (

                <tr key={p._id}>
                    <th scope="row">{p._id}</th>
                    <td>{p.alttext}</td>
                    <td>Image</td>
                    <td>
                        <Link to={ `SliderDelete/${p._id}`} >  <MdDeleteForever />  </Link>
                        <Link to={`SliderEdit/${p._id}`} > <MdModeEdit />  </Link>
                    </td>

                </tr>

            )

        })
    }


    return (
        <div>

            <h3 className="my-5">Slider Admin <small>  <br/> <i> (Ikke færdiggjort, da metoden er samme som demonstreret i products) </i> </small></h3>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Alttext</th>
                        <th scope="col">SliderImage</th>
                        <th scope="col">Edit</th>
                    </tr>
                    <tr>
                        <th colSpan="3"></th>
                        <th >
                            <Link to="/admin/SliderCreate" className="btn btn-dark">OPRET NY</Link>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {sliderList}
                </tbody>
            </table>

        </div>
    )
}

export default SliderAdmin
