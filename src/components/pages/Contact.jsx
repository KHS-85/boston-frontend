import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Contact = () => {
    return (
        <div id="Contact" className="container-fluid contact">

            <div className="container">

                <div className="row">

                    <div className="col-12">
                    <HashLink smooth to="#Top" className="hashlink"> <h2 className="mt-5">CONTACT US</h2> </HashLink>
                        
                        <img src="/stjerne.svg" className="stjerne mb-4" alt="" />
                    </div>

                    <div className="col-12">

                        <form>
                            {/* Name */}
                            <div className="form-group col-xs-3">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" />
                            </div>
                            {/* Email */}
                            <div className="form-group">
                                <label for="exampleFormControlInput2">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                            </div>
                            {/* Phone */}
                            <div className="form-group">
                                <label for="exampleFormControlInput3">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="phone number" />
                            </div>
                            {/* Message */}
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-secondary mb-5">Send</button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact
