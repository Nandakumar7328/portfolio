import React from 'react';
import test from '../Home/express.png'
import react_cert from '../../assets/react.png'
import js_cert from '../../assets/js.png'
import node_cert from '../../assets/node.png'
import sql_cert from '../../assets/sql.png'
import res_cert from '../../assets/res_web.png'
import static_cert from '../../assets/static.png'
import './index.css'

const Certificate = () =>{
    return(
    <div className='d-flex flex-column justify-content-center align-items-centerd-flex flex-column justify-content-center align-items-center'>
      <div className='cert-container' id="certificate">
        <h1 className='name-h5 text-center'>Certificate's</h1>
        <p className='text-center intro'>I hold certifications in key programming languages like Python and JavaScript, signifying my expertise in each language and my ability to develop and manage software products effectively. Furthermore, I have obtained certifications in various domains such as cloud computing, web development, database management, and full-stack programming. These credentials validate my proficiency across these fields and underscore my capability to deliver high-quality services.</p>
      </div>
      <div className='d-flex flex-row justify-content-center flex-wrap'>
      <div class="link-mask-text">
      <a class="btn btn-secondary cert-image" href="https://certificates.ccbp.in/intensive/react-js?id=MFZQNIXZJA">
    <img className='image-sixe' src={react_cert} alt="Certificate Image" />
    View certificate</a>
	</div>
    <div class="link-mask-text">
      <a class="btn btn-secondary cert-image" href="https://certificates.ccbp.in/intensive/react-js?id=MFZQNIXZJA">
    <img className='image-sixe' src={js_cert} alt="Certificate Image" />
    View certificate</a>
	</div>
    <div class="link-mask-text">
      <a class="btn btn-secondary cert-image" href="https://certificates.ccbp.in/intensive/react-js?id=MFZQNIXZJA">
    <img className='image-sixe' src={node_cert} alt="Certificate Image" />
    View certificate</a>
	</div>
    <div class="link-mask-text">
      <a class="btn btn-secondary cert-image" href="https://certificates.ccbp.in/intensive/react-js?id=MFZQNIXZJA">
    <img className='image-sixe' src={sql_cert} alt="Certificate Image" />
    View certificate</a>
	</div>
    <div class="link-mask-text">
      <a class="btn btn-secondary cert-image" href="https://certificates.ccbp.in/intensive/react-js?id=MFZQNIXZJA">
    <img className='image-sixe' src={res_cert} alt="Certificate Image" />
    View certificate</a>
	</div>
    <div class="link-mask-text">
      <a class="btn btn-secondary cert-image" href="https://certificates.ccbp.in/intensive/react-js?id=MFZQNIXZJA">
    <img className='image-sixe' src={static_cert} alt="Certificate Image" />
    View certificate</a>
	</div>
      </div>
      </div>
    )
}


export default Certificate
