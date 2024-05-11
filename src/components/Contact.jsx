import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdPhonelinkRing } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";


export default function Contact() {
  return (
    <div className='contact-container' id='Contact'>
        <h1 className='contact-heading'><u>Contact Us</u></h1>
        <span className='contact-para'>Have a question or want to inquire about our stunning jewelry collections? Reach out to JP Jewellers today! Our friendly team is ready to assist you with any queries regarding our exquisite pieces, custom designs, or special orders. Connect with us via phone, email, or visit our store for a personalized shopping experience.</ span>
        <IconContext.Provider value={{size:'3rem', margin:'0px'}}>
        <div className='contact-icons'>
            <div>
                <a href="https://www.google.com/maps/place/DLE+Industrial+Area,+Kirti+Nagar,+Delhi,+110015/@28.6571037,77.1403921,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03014d873459:0x72609d194ff62637!8m2!3d28.657142!4d77.1434831!16s%2Fg%2F12hlxvc53?entry=ttu" className='contact-links'>
                <IoLocation />
                <h4 className='contact-icon-headings'>Address</h4>
                <p className='contact-icon-paras'>GTB Nagar, Delhi</p>
                </a>
            </div>
            <div>
                <a href="tel:+123456789" className='contact-links'>
                    <MdPhonelinkRing />
                    <h4 className='contact-icon-headings'>Contact No.</h4>
                
                    <p className='contact-icon-paras'>+91 XX98342341</p>
                </a>
            </div>
            <div>
                <a href="mailto:info@example.com" className='contact-links'>
                    <MdEmail />
                    <h4 className='contact-icon-headings'>Email</h4>
                    <p className='contact-icon-paras'>jpjewellers@gmail.com</p>
                </a>
            </div>
        </div>
        </IconContext.Provider>
    </div>
  )
}
