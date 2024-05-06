import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdPhonelinkRing } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";


export default function Contact() {
  return (
    <div className='contact-container'>
        <h1 className='contact-heading'><u>Contact Us</u></h1>
        <span className='contact-para'>Have a question or want to inquire about our stunning jewelry collections? Reach out to JP Jewellers today! Our friendly team is ready to assist you with any queries regarding our exquisite pieces, custom designs, or special orders. Connect with us via phone, email, or visit our store for a personalized shopping experience.</ span>
        <IconContext.Provider value={{size:'3rem', margin:'0px'}}>
        <div className='contact-icons'>
            <div>
                <IoLocation />
                <h4 className='contact-icon-headings'>Address</h4>
                <p className='contact-icon-paras'>GTB Nagar, Delhi</p>
            </div>
            <div>
                <MdPhonelinkRing />
                <h4 className='contact-icon-headings'>Contact No.</h4>
                <p className='contact-icon-paras'>+91 XX98342341</p>
            </div>
            <div>
                <MdEmail />
                <h4 className='contact-icon-headings'>Email</h4>
                <p className='contact-icon-paras'>jpjewellers@gmail.com</p>
            </div>
        </div>
        </IconContext.Provider>
    </div>
  )
}
