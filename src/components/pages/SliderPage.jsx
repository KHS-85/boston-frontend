import React, { useEffect, useState } from 'react';

const SliderPage = () => {


    const [sliders, setSliders] = useState([]);

    const imagepath = "http://localhost:5017/images/"

    useEffect(() => {
        const apiUrl = "http://localhost:5017/sliders/";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((sliders) => {
                setSliders(sliders);

            });
    }, []);

    const slidermap = sliders.map(slider => {

        return (

            <div class="carousel-item" key={slider._id}>
                <img class="d-block w-100 sliderimg" src={imagepath + slider.billede} alt="slide" />
            </div>

        )

    })


    return (

        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 sliderimg" src="/slider1.jpg" alt="First slide" />
                    </div>
                    {slidermap}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}





export default SliderPage
