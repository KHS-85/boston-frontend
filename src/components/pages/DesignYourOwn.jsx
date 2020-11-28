import React from 'react'
import PickYourGear from './PickYourGear'
import { HashLink } from 'react-router-hash-link';

const DesignYourOwn = () => {
    return (

        <div id="DesignYourOwn" className="container-fluid designyourown">

            <div className="container">

                <div className="row">

                    <div className="col-12">
                    <HashLink smooth to="#Top" className="hashlink"> <h2 className="mt-5">DESIGN YOUR OWN RIG!</h2> </HashLink>
                        <img src="/stjerne.svg" className="stjerne mb-4" alt="" />
                    </div>

                </div>

                <div className="row">

                    <div className="col-12 col-lg-6">
                        <h4 className="mb-4">Pick your gear</h4>

                        <PickYourGear />

                    </div>

                    <div className="col-12 col-lg-6">
                        <h4 className="mb-4">Summary</h4>

                        <div className="summarytable">
                            <table class="table table-hover">

                                <tbody>
                                    <tr>
                                        <th className="text-left" scope="row">CPU</th>
                                        <td className="text-right"> <span className="price">150$</span> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-left">MOTHERBOARD</th>
                                        <td className="text-right"> <span className="price">150$</span> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-left">MEMORY</th>
                                        <td className="text-right"> <span className="price">150$</span> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-left">STORAGE</th>
                                        <td className="text-right"> <span className="price">150$</span> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-left">VIDEO CARD</th>
                                        <td className="text-right"> <span className="price">150$</span> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-left">CASE</th>
                                        <td className="text-right"> <span className="price">150$</span> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-left">POWER SUPPLY</th>
                                        <td className="text-right"> <span className="price">150$</span> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="text-left"> <strong> TOTAL </strong> </th>
                                        <td className="text-right"> <span className="price">1050$</span> </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default DesignYourOwn
