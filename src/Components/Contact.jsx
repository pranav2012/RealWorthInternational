import React from 'react'
import Map from '../Components/map';
import Button from '@material-ui/core/Button';
import '../styles/contact.scss';
import {btn_ref, address, contact_page} from '../data/data';

const {email,phone,location} = btn_ref;

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
                        <i className="material-icons">call</i>
                        <h3>{contact_page.phone.phone_head}</h3>
                        <p>{contact_page.phone.phone_subhead}</p>
                        <Button variant="contained"  href={"tel:" + phone} color="primary">{contact_page.phone.phone_btn_txt}</Button>
                    </div>
                    <div className='emailcard'>
                        <i className="material-icons">email</i>
                        <h3>{contact_page.email.email_head}</h3>
                        <p>{contact_page.email.email_subhead}</p>
                        <Button variant="contained" href={"mailto:" + email} color="primary">{contact_page.email.email_btn_txt}</Button>
                    </div>
                </div>

                 <h2 className='map__head' >Connect with one of our global office</h2>
                <div className='address'>
                    <div className='map__area'>
                        <Map/>
                    </div>
                    <div className='add__content'>
                        <h2>Address</h2>
                        <a href={location} rel="noopener noreferrer" target="_blank">
                            <p>{address.address_line1}</p>
                            <p>{address.address_line2}</p>
                            <p>{address.address_line3}</p>
                        </a>
                        <h2 className='map_chead'>Phone</h2>
                        <a href={"tel:" + phone}>
                            <p>{phone}</p>
                        </a>
                        <h2 className='map_chead'>Email</h2>
                        <a href={"mailto:" + email}>
                            <p>{email}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
