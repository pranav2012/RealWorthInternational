import React from 'react'
import Map from '../Components/map';
import Button from '@material-ui/core/Button';
import '../styles/contact.scss';

function Contact() {
    return (
        <div id='contact'>
            <div className='cbg'>
                <div className='cbg__layer'>
                    <h2 className='contact__head' >Get in Touch</h2>
                    <p>Want to get in touch? here is how you can reach us.</p>
                </div>
            </div>
            <div className='contact__bg'>
                <div className='contact__cards'>
                    <div className="phonecard">
                        <i class="material-icons">call</i>
                        <h3>Talk to us</h3>
                        <p>Interested in our product's. don't wait call us directly</p>
                        <Button variant="contained" color="primary">Call</Button>
                    </div>
                    <div className='emailcard'>
                        <i class="material-icons">email</i>
                        <h3>Email us</h3>
                        <p>Interested in our product's. don't wait send your query's on our mail</p>
                        <Button variant="contained" color="primary">Email</Button>
                    </div>
                </div>

                 <h2 className='map__head' >Connect with one of our global office</h2>
                <div className='address'>
                    <div className='map__area'>
                        <Map/>
                    </div>
                    <div className='add__content'>
                        <h2>Address</h2>
                        <p>Real worth International,</p>
                        <p>hauz khaz enclave,</p>
                        <p>New Delhi-110016</p>
                        <h2>Phone</h2>
                        <p>+91-7878787878</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
