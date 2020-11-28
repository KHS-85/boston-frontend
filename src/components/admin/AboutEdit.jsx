import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Loader from 'react-loader-spinner'

//api call
import { getAbout, editAbout } from '../helpers/apicall'

const AboutEdit = (props) => {


    const [about, setAbout] = useState()
    const history = useHistory()

    const aboutID = props.match.params.id

    useEffect(() => {

        console.log("useeffect her", aboutID)
        getAbout(aboutID).then(res => {

            if (res !== "error") setAbout(res)

        })

    }, [aboutID])


    const handleSubmit = e => {

        console.log("handlesubmit")

        e.preventDefault();
        console.log(e.target)

        editAbout(e.target, aboutID).then(res => {

            if(res !== "error"){
            console.log(res)
            history.push("/Admin/about")
        } else {
            //håndter fejl 
            console.log(res)
        }

        })

    }


    return (

        <div>
            
            <h2 className="mb-5">Change About</h2>


        {
            !about ? <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={30000} />
            :
        


            <form onSubmit={handleSubmit}>

                <p> <strong> Location: </strong>{about.location}</p>

                <label className="hideme">Location: 
    <input className="hideme" name="location" type="text" placeholder="location" value={about.location} required />

                </label>

                <br />
                <br />

                <label>Text: 
    <input name="tekst" id="makeMeTaller" type="textarea" rows="10" placeholder="Tekst" defaultValue={about.tekst} required />

                </label>



                <button type="submit" className="mb-5 ml-3"> Submit </button>

                </form>
}

        </div>

    )
}


export default AboutEdit
