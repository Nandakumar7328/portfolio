import React from 'react';
import cv from "../../../src/assets/Nanda_Kumar_resume.pdf"
import { FaHome,FaPhone,FaLinkedin,FaGithub ,FaInstagram,FaFacebook,FaPaperPlane} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './index.css'
const Contact = () => {
    const hirebtn = {
        textAlign:'center',
        marginLeft:'30%'
    }
    return(
        <section className="contact-sec sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>
      
                <ul className="contact-ul">
                  <li><FaHome />   7th St, Sri Krishna Nagar, Valasaravakkam, Chennai, 600095</li>
      
                  <li>
                  <FaPhone />
                    <i ><b>8971399165</b></i>
                    <i ><b>7026792561</b></i>
                  </li>
      
                  <li>
                  <IoMdMail />
                    <i href="mailto:nandauaru333@gmail.com"><b> nandauaru333@gmail.com</b></i>
                  </li>
                </ul>
      
                <span>
                  <i  className="fb icon"><FaLinkedin /></i>
                  <i className="insta icon"><FaGithub /></i>
                  <i  className="twitter icon"><FaInstagram /></i>
                  <i  className="twitter icon"><FaFacebook /></i>
                </span>
              </div>
            </div>
      
            <div className="col-md-6">
              <FaPaperPlane className='paper'/>
              <a href={cv} className='cv_btn' target="_blank" download style={hirebtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Hire me
                        </a>
            </div>
          </div>
      
          <div>
            <p> Copyright &copy;
              
              All rights reserved | Nanda Kumar
            </p>
          </div>
      
        </div>
      </section>
    )
}


export default Contact

