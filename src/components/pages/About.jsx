import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const About = () => {

    const [about1, setAbout1] = useState([]);
    const [about2, setAbout2] = useState([]);


    useEffect(() => {
        const apiUrl1 = "http://localhost:5017/abouts/5fc145c08cab0704a478f17a";
        fetch(apiUrl1)
            .then((res) => res.json())
            .then((about1) => {
                setAbout1(about1);
            });
        const apiUrl2 = "http://localhost:5017/abouts/5fc145cd8cab0704a478f17b";
        fetch(apiUrl2)
            .then((res) => res.json())
            .then((about2) => {
                setAbout2(about2);
            });
    }, []);


    return (

        <div id="About" className="about">

            <div className="container">

                <div className="row">

                    <div className="col-12">
                        <HashLink smooth to="#Top" className="hashlink"> <h2 className="mt-5">ABOUT</h2> </HashLink>
                        <img src="/stjerne.svg" className="stjerne mb-4" alt="" />
                    </div>

                </div>


                <div className="row">

                <div className="col-6 aboutcol ml-auto">
                    <p> {about1.tekst} </p>
                </div>

                <div className="col-6 aboutcol mr-auto">
                    <p> {about2.tekst} </p>
                </div>

                </div>

            </div>

        </div>


    )
}


export default About
