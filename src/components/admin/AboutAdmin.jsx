import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//loader
import Loader from 'react-loader-spinner'
import { MdModeEdit } from 'react-icons/md';


const AboutAdmin = () => {

    //HOOKS
    const [abouts, setAbouts] = useState()

    //API-call 
    useEffect(() => {
        const apiUrl = "http://localhost:5017/abouts/";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((abouts) => {
                setAbouts(abouts);

            });
    }, []);


    let aboutList = <tr><td colSpan="4"> <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} /> </td></tr>//3 secs

    //Hvis der er data i state produkter
    if (abouts) {

        aboutList = abouts.map(p => { // bruger "p", men kan være hvad som helst

            return (

                <tr key={p._id}>
                    <th scope="row">{p._id}</th>
                    <td>{p.location}</td>
                    <td>{p.tekst}</td>
                    <td>
                        <Link to={`AboutEdit/${p._id}`} > <MdModeEdit />  </Link>
                    </td>

                </tr>

            )

        })
    }


    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Location</th>
                        <th scope="col">Text</th>
                        <th scope="col">Edit</th>
                    </tr>

                </thead>
                <tbody>
                    {aboutList}
                </tbody>
            </table>

        </div>
    )
}

export default AboutAdmin
